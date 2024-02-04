import { Primitive } from "type-fest";

export type StorageSetOption = {
  // 过期时间，单位毫秒
  expire?: number;
  // sync or local
  type?: "sync" | "local";
};

export class LocalStorageUtil {
  static async setItem(
    key: string,
    value: Primitive | Record<string, Primitive>,
    option?: StorageSetOption
  ) {
    const _option = Object.assign({ type: "local" }, option);
    await chrome.storage[_option?.type].set({
      [key]: _option?.expire
        ? { value, expire: Date.now() + option.expire }
        : value,
    });
  }
  static getItem<T>(
    key: string,
    type: StorageSetOption["type"] = "local"
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      chrome.storage[type].get([key], (items) => {
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }
        // check if expired
        if (items[key]?.expire && items[key].expire < Date.now()) {
          return resolve(items[key].value);
        }
        resolve(items[key]);
      });
    });
  }
  static async removeItem(
    key: string,
    type: StorageSetOption["type"] = "local"
  ) {
    // delete the item  from storage
    await chrome.storage[type].remove(key);
  }
}
