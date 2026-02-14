import { GoogleGenAI, Modality } from "@google/genai";

// Always use process.env.API_KEY directly and instantiate new GoogleGenAI with named parameter.
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateTextResponse = async (prompt: string, history: {role: string, parts: string}[] = []) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [...history.map(h => ({ role: h.role, parts: [{ text: h.parts }] })), { role: 'user', parts: [{ text: prompt }] }],
    config: {
      systemInstruction: "You are BharatGoAi, an Indian-born AI. You are helpful, respectful, and have deep knowledge of Indian culture, tech, and languages. Respond in a friendly, high-quality manner as the leading AI platform for Bharat.",
      temperature: 0.7,
    }
  });
  // Use the .text property, not .text() method
  return response.text;
};

export const generateImage = async (prompt: string, aspectRatio: "1:1" | "16:9" | "9:16" = "1:1") => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }]
    },
    config: {
      imageConfig: {
        aspectRatio,
      }
    }
  });

  // Always iterate through all parts to find the image part as per guidelines.
  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("No image data found in response");
};

export const generateSpeech = async (text: string, voiceName: string = 'Kore') => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text }] }],
    config: {
      // Must use the Modality enum
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName },
        },
      },
    },
  });

  return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
};

// Implement raw PCM decoding logic without external libraries as per the guidelines.
export const decodeAudio = async (base64: string, ctx: AudioContext) => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  const dataInt16 = new Int16Array(bytes.buffer);
  const frameCount = dataInt16.length;
  const buffer = ctx.createBuffer(1, frameCount, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
};