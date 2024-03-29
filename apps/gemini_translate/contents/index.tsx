import icon from "data-base64:~assets/icon.png"
import cssText from "data-text:~style.css"
import marked from "marked"
import { useEffect, useState } from "react"
import Highlight from "react-highlight"

import { sendToBackground } from "@plasmohq/messaging"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const CustomButton = () => {
  const [hidden, setHidden] = useState(true)
  const [result, setResult] = useState("")
  const [iconPos, setIconPos] = useState({ x: -100, y: -100 })
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [width, setWidth] = useState(0)
  const [selectedText, setSelectedText] = useState("")
  const [loading, setLoading] = useState(false)

  const onTranslate = async () => {
    try {
      setLoading(true)
      // 在这里可以执行针对选中文本的操作
      setHidden(false)
      const { html } = await sendToBackground({
        name: "ask",
        body: {
          selectedText
        }
      })
      setResult(html)
    } catch (error) {
      console.log("error", error)
      let errorInfo = error === "Timeout" ? "请求超时" : error
      const html = await marked.parse(
        `<span style="color: red">${errorInfo}</span>`
      )
      setResult(html)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", function (e) {
      const selection = window.getSelection()
      const selectedText = selection.toString()
      if (selectedText !== "") {
        // get current mouse position
        const { clientX, clientY } = e
        setIconPos({ x: clientX, y: clientY })

        setSelectedText(selectedText)
        const range = selection.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        let { left, bottom, right } = rect
        setWidth(right - left)
        // 计算位置的百分比
        left = (left / window.innerWidth) * 100
        bottom = ((bottom + 12) / window.innerHeight) * 100
        setPos({ x: left, y: bottom })
      } else {
        setHidden(true)
        setIconPos({ x: -100, y: -100 })
        setPos({ x: -100, y: -100 })
      }
    })
  }, [])

  return (
    <div
      onMouseUp={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}>
      {/* icon */}
      <div
        className="fixed flex items-center justify-center text-center bg-white rounded-full shadow cursor-pointer"
        style={{
          top: `${iconPos.y}px`,
          left: `${iconPos.x}px`,
          zIndex: 9999999999
        }}
        onClick={onTranslate}>
        {hidden && <img src={icon} className="w-5 h-5 p-1" />}
      </div>
      {!hidden && (
        <div
          className="fixed flex items-center p-4 text-gray-700 bg-white rounded-md shadow min-h-8 min-w-36 text-[14px]"
          style={{
            top: `${pos.y}vh`,
            left: `${pos.x}vw`,
            maxWidth: `max(${width}px, ${100 - pos.x - 1}vw)`,
            zIndex: 9999999999,
            maxHeight: `calc(100vh - ${pos.y}vh - 50px)`,
            overflowY: "auto",
            width: `max(${width}px, 500px)`
          }}>
          {loading ? (
            <div className="w-4 h-4 transition-all bg-blue-100 rounded-sm animation-ping"></div>
          ) : (
            <div
              className="w-full p-2"
              dangerouslySetInnerHTML={{ __html: result }}></div>
          )}
        </div>
      )}
    </div>
  )
}

export default CustomButton
