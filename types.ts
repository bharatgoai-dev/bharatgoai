
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChitraImage {
  id: string;
  url: string;
  prompt: string;
  createdAt: Date;
}

export interface VoiceSample {
  id: string;
  text: string;
  audioUrl: string;
  voiceName: string;
}
