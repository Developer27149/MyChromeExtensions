import "./style.css"
import "@radix-ui/themes/styles.css"

import { Theme } from "@radix-ui/themes"
import { useAtom } from "jotai"
import { useEffect } from "react"

import Loading from "~components/Loading"
import Login from "~components/Login"
import { loadingStore } from "~stores"

function IndexPopup() {
  const [loading, setLoading] = useAtom(loadingStore)
  useEffect(() => {
    const asyncFc = async () => {
      // get config from storage, and then set loading to false
      try {
        setLoading(false)
      } catch (error) {
        console.log("Init error:", error)
      }
    }
    asyncFc()
  }, [])
  return (
    <div className="w-[400px] h-[600px] bg-white">
      <Loading loading={loading} />
      <Theme>
        <Login />
        <div className="p-4 text-blue-600 font-thin">
          Simple is the best,
          <br />
          Simple is easy to use,simple is beautiful.
        </div>
      </Theme>
    </div>
  )
}

export default IndexPopup
