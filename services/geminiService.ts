
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Alex Chen, a 2nd-year Computer Science Engineering student at Tech University.
Alex is highly interested in Machine Learning and Data Science.
Alex's Skills: Python, C++, Java, Scikit-learn, TensorFlow, PyTorch, React, Tailwind CSS.
Alex's Key Projects: 
1. MNIST Digit Classifier using CNNs.
2. Sentiment Analysis on Movie Reviews using NLP.
3. Personal Portfolio (this website).
Alex's Goal: To become an ML Research Engineer.

Your job is to answer questions about Alex professionally and enthusiastically. 
Keep answers concise. If asked about contact info, mention his LinkedIn (linkedin.com/in/alexchen) or GitHub (github.com/alexchen).
Be friendly and act as a representative of Alex's talent.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Alex is probably busy training a model right now!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to Alex's AI core. Please try again later.";
  }
};
