const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

class GeminiController {
  static async generateName(req, res, next) {
    try {
      const prompt = `Generate one random character name from Dora the Explorer excluding Swiper, must be full name, no additional text`;
      const result = await model.generateContent(prompt);
      res.json(result.response.text().replace(/\n/g, ""));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GeminiController;
