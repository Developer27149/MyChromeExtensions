import { EStorageKey } from "~utils/types/enums"
import { appStore } from "~stores"
import { getDataFromStorage } from "~utils/storage/tool"
import { useAtom } from "jotai"

export const useApp = () => {
  const [appState, setAppState] = useAtom(appStore)
  const getInitState = async () => {
    const data = await getDataFromStorage(EStorageKey.appStore)
    
  }
  return {
    appState,
    setAppState
  }
}
