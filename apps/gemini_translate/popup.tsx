import "./style.css"

import githubIcon from "data-base64:~assets/github.svg"
import IconPng from "data-base64:~assets/icon.png"
import { useEffect, useState } from "react"

import { Util } from "~utils"

function IndexPopup() {
  const [key, setKey] = useState("")
  useEffect(() => {
    Util.getGeminiKey().then((res) => {
      setKey(res)
    })
  }, [])

  return (
    <div className="w-[400px] p-4 flex gap-4 justify-between items-center">
      <div className="group">
        <h3 className="flex items-center mb-4 text-lg text-center text-purple-700">
          <button
            className="mr-[4px] text-[13px] leading-[14px] text-gray-50 cursor-pointer shadow bg-gray-700 p-1 rounded-sm"
            onClick={() => {
              setKey("")
              Util.setGeminiKey("")
            }}>
            Reset
          </button>
          <input
            placeholder="Gemini Key"
            className="border-b border-b-gray-400 w-[220px] focus:outline-none focus:border-purple-500 transition-all"
            type="password"
            value={key}
            onChange={(e) => {
              setKey(e.target.value)
              Util.setGeminiKey(e.target.value)
            }}
          />
        </h3>
        <a href="https://github.com/Developer27149" target="_blank">
          <img
            src={githubIcon}
            alt="github"
            className="inline-block w-6 mr-2 transition-all group-hover:rotate-12 group-hover:scale-105"
          />
          Developer27149
        </a>
      </div>
      <img src={IconPng} alt="logo" className="w-24" />
    </div>
  )
}

export default IndexPopup
