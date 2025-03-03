# Next.js AI Chatbot

A modern AI chatbot built with Next.js, Vercel AI SDK, and Google's Gemini models. This project allows users to chat with an AI assistant through a clean, responsive interface.

![AI Chatbot Demo](https://placehold.co/600x400?text=AI+Chatbot+Demo)

## Live Demo

Check out the live demo: [Next.js AI Chatbot](https://nextjs-ai-chatbot-2.vercel.app/)

## Features

- 💬 **Real-time AI Chat**: Engage in natural conversations with an AI powered by Google's Gemini models
- 🚀 **Built with Next.js**: Utilizing the latest Next.js features for optimal performance
- 🔄 **Streaming Responses**: Get AI responses in real-time with streaming
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Clean UI**: Minimalist interface with a focus on user experience
- 🌙 **Dark Mode Support**: Toggle between light and dark themes
- 🧠 **Context Awareness**: AI maintains context throughout the conversation

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Vercel AI SDK](https://sdk.vercel.ai/docs) - Tools for building AI-powered user interfaces
- [Gemini API](https://ai.google.dev/gemini-api) - Powers the AI chat functionality
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Vercel](https://vercel.com/) - Deployment and hosting

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm
- Google AI (Gemini) API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chad-f-dalrymple/nextjs-ai-chatbot-2.git
cd nextjs-ai-chatbot-2
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory with your Google AI API key:
```
GOOGLE_AI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-ai-chatbot-2/
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   ├── chat/             # Chat interface
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── chat/             # Chat-related components
│   └── ui/               # UI components
├── lib/                  # Utility functions and configs
├── public/               # Static assets
├── styles/               # Global styles
└── ...                   # Config files
```

## Customization

### Changing the AI Model

To use a different Gemini model, update the model name in the API route:

```typescript
// app/api/chat/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

export async function POST(req: Request) {
  // ...
  const model = genAI.getGenerativeModel({ 
    model: "gemini-pro", // Change to your desired model.
  });
  
  const response = await model.generateContentStream({
    contents: [
      // ...
    ],
  });
  // ...
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Import the repository in Vercel
3. Set the environment variable `GOOGLE_AI_API_KEY` in the Vercel dashboard
4. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vercel](https://vercel.com/) for the excellent deployment platform
- [Google](https://ai.google.dev/) for providing the Gemini AI models
- [Next.js](https://nextjs.org/) team for the amazing framework

---

Built with ❤️ by [Chad Dalrymple](https://github.com/chad-f-dalrymple)