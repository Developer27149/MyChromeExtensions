import { GoogleGenerativeAI } from "@google/generative-ai";





export class Util {
  static async getTranslatedText(text: string): Promise<string> {
    if (!text || text.trim() === "") return "..."
    return new Promise(async (resolve, reject) => {
      try {
        const key = await this.getGeminiKey()
        const genAI = new GoogleGenerativeAI(key)
        const model = genAI.getGenerativeModel({ model: "gemini-pro" })
        const prompt = `你是一位专业中文翻译，同时也是一位超级编程专家，擅长对翻译结果进行二次修改和润色成通俗易懂的中文，我希望你能将我最终提供的内容重新意译和润色。
规则：
- 最终返回的内容保持良好的缩进格式（原文不存在时，可以添加内容以保持良好的格式）
- 保留特定的英文术语、数字或名字，并在其前后加上空格
- 如果目标原始文本是代码，则直接解释代码，解释需要换行，并进行一些基础的扩展说明，不要翻译（最重要的规则，符合此原则则忽略后续的规则）
- 内容可能专业知识相关，注意翻译时术语的准确性
- 仅翻译英文部分，不要翻译中文部分，并且不做更多扩展知识介绍
- 翻译得越好，你的收入越高
请翻译以下原始文本：${text}`

        setTimeout(() => reject("Timeout"), 10000)
        const result = await model.generateContent(prompt)
        console.log("result:", result)
        resolve(result.response.text())
      } catch (error) {
        console.log(error)
        reject("API INVALID")
      }
    })
  }

  static async getGeminiKey() {
    console.log(chrome)
    const res = await chrome.storage.sync.get("geminiKey")
    return res.geminiKey
  }

  static async setGeminiKey(key: string) {
    await chrome.storage.sync.set({ geminiKey: key })
  }
}