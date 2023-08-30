import { EStorageArea, EStorageKey } from "~utils/types/enums"

export const getDataFromStorage = async <T>(
  key: string,
  options?: {
    defaultValue?: T
    area?: EStorageArea
  }
) => {
  const { defaultValue, area } = options ?? {}
  const storage =
    area === EStorageArea.local ? chrome.storage.local : chrome.storage.sync
  const data = await storage.get(EStorageKey.cacheTime)
  const cacheTime = data[EStorageKey.cacheTime] ?? {}
  // if cache time is expired, return default value
  if (cacheTime[key] && cacheTime[key] > Date.now()) {
    // clear cache
    storage.remove(key)
    delete cacheTime[key]
    storage.set({ [EStorageKey.cacheTime]: cacheTime })
    return defaultValue
  }

  return new Promise<T>((resolve) => {
    storage.get(key, (data) => {
      if (data[key]) {
        resolve(data[key])
      } else {
        resolve(defaultValue)
      }
    })
  })
}

/**
 *
 * @param key storage key
 * @param value storage value
 * @param options storage area and cache time, default is local and no cache, if cache time is set, the value will be cached in local storage
 */
export const setDataToStorage = <T>(
  key: string,
  value: T,
  options: {
    area?: EStorageArea
    cacheTime?: number
  }
) => {
  const { area, cacheTime } = options
  const storage =
    area === EStorageArea.local ? chrome.storage.local : chrome.storage.sync
  storage.set({ [key]: value })
  if (cacheTime) {
    // set cache time
    storage.get(EStorageKey.cacheTime, (data) => {
      const cacheTime = data[EStorageKey.cacheTime] ?? {}
      cacheTime[key] = Date.now() + cacheTime
      storage.set({ [EStorageKey.cacheTime]: cacheTime })
    })
  }
}
