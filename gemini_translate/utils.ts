import { GoogleGenerativeAI } from "@google/generative-ai";





export class Util {
  static async getTranslatedText(text: string): Promise<string> {
    if (!text || text.trim() === "") return "..."
    return new Promise(async (resolve, reject) => {
      try {
        const key = await this.getGeminiKey()
        const genAI = new GoogleGenerativeAI(key)
        const model = genAI.getGenerativeModel({ model: "gemini-pro" })
        const prompt = `你是一位专业中文翻译，擅长对翻译结果进行二次修改和润色成通俗易懂的中文，我希望你能将我最终提供的内容重新意译和润色。
规则：
- 内容可能专业知识相关，注意翻译时术语的准确性
- 保留特定的英文术语、数字或名字，并在其前后加上空格。
- 仅翻译英文部分，不要翻译中文部分，并且不做更多扩展知识介绍
- 请不要翻译任何代码，包括但不限于 HTML、CSS、JavaScript、JSON、Markdown 等, 文本内容保持缩进
- 翻译得越好，你的收入越高
请翻译以下原始文本：${text}`

        setTimeout(() => reject("Timeout"), 10000)
        const result = await model.generateContent(prompt)
        console.log("result:", result)
        resolve(result.response.text())
      } catch (error) {
        reject("API INVALID")
      }
    })
  }

  static async getGeminiKey() {
    const res = await chrome.storage.sync.get("geminiKey")
    return res.geminiKey
  }

  static async setGeminiKey(key: string) {
    await chrome.storage.sync.set({ geminiKey: key })
  }
}