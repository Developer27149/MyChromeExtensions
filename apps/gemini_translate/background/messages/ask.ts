import { marked } from "marked"

import type { PlasmoMessaging } from "@plasmohq/messaging"

import { Util } from "~utils"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { selectedText } = req.body
  const geminiResult = await Util.getTranslatedText(selectedText)
  const html = await marked.parse(geminiResult)
  res.send({
    html
  })
}

export default handler
