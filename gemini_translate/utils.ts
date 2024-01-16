import { GoogleGenerativeAI } from "@google/generative-ai"

export class Util {
  static async getTranslatedText(text: string): Promise<string> {
    if (!text || text.trim() === "") return "..."
    return new Promise(async (resolve, reject) => {
      try {
        const key = await this.getGeminiKey()
        const genAI = new GoogleGenerativeAI(key)
        const model = genAI.getGenerativeModel({ model: "gemini-pro" })
        const prompt = `你是一位专业中文翻译，擅长对翻译结果进行二次修改和润色成通俗易懂的中文，我希望你能帮我将以下内容重新意译和润色。
规则：
- 内容可能专业知识相关，注意翻译时术语的准确性
- 保留特定的英文术语、数字或名字，并在其前后加上空格，例如："生成式 AI 产品"，"不超过 10 秒"。
- 基于直译结果重新意译，意译时务必对照原始英文，不要添加也不要遗漏内容，并以让翻译结果通俗易懂，符合中文表达习惯。
- 翻译后的内容尽量是一段完整的中文，并且返回 markdown 格式，突出显示关键内容。
请翻译以下内容：${text}`

        // setTimeout(() => reject("Timeout"), 4000)
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
