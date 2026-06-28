"use client";

import { lazy, Suspense, useEffect, useState } from "react";

const ChatBot = lazy(() => import("react-chatbotify"));

type ChatbotParams = {
  userInput?: string;
};

function getVisitorId() {
  const storageKey = "devhatch-chat-visitor-id";

  let visitorId = window.localStorage.getItem(storageKey);

  if (!visitorId) {
    visitorId = `visitor-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 10)}`;

    window.localStorage.setItem(storageKey, visitorId);
  }

  return visitorId;
}

export default function DevHatchChatbot() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  async function getBotReply(message: string) {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_CHATBOT_API_URL;

      if (!apiUrl) {
        return "Chatbot configuration is missing. Please contact DevHatch Labs directly.";
      }

      const response = await fetch(`${apiUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: getVisitorId(),
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Unable to get a response.");
      }

      return (
        data?.response ||
        "I could not generate a response right now. Please try again."
      );
    } catch (error) {
      console.error("DevHatch chatbot error:", error);

      return "I am having trouble connecting right now. Please try again in a moment.";
    }
  }

  const flow = {
    start: {
      message:
        "Hi! I am the DevHatch Labs AI Assistant. Ask me about our AI systems, automation, chatbots, software services, or how we can help your business.",
      path: "assistant",
    },

    assistant: {
      message: async (params: ChatbotParams) => {
        const userMessage = params.userInput?.trim();

        if (!userMessage) {
          return "Please type your question and I will help you.";
        }

        return await getBotReply(userMessage);
      },
      path: "assistant",
    },
  };

  const settings = {
    general: {
      primaryColor: "#1769FF",
      secondaryColor: "#159FE8",
      fontFamily: "inherit",
      showHeader: true,
      showFooter: false,
      showInputRow: true,
      embedded: false,
      flowStartTrigger: "ON_LOAD",
    },

    tooltip: {
      mode: "CLOSE",
      text: "Chat with DevHatch AI",
    },

    chatButton: {
      icon: "/chatbot-smile.svg",
    },

    header: {
      title: "DevHatch AI Assistant",
      showAvatar: false,
    },

    notification: {
      disabled: true,
    },

    audio: {
      disabled: true,
    },

    voice: {
      disabled: true,
    },

    fileAttachment: {
      disabled: true,
    },

    emoji: {
      disabled: true,
    },

    chatHistory: {
      storageKey: "devhatch-chat-history",
      maxEntries: 20,
      autoLoad: true,
    },

    chatInput: {
      enabledPlaceholderText: "Ask about DevHatch Labs...",
      botDelay: 250,
      allowNewline: true,
      blockSpam: true,
      showCharacterCount: false,
    },

    chatWindow: {
      defaultOpen: false,
      showTypingIndicator: true,
      autoJumpToBottom: true,
      showScrollbar: false,
    },

    botBubble: {
      animate: true,
      showAvatar: false,
      simulateStream: true,
      streamSpeed: 12,
    },

    userBubble: {
      animate: true,
      showAvatar: false,
    },

    ariaLabel: {
      chatButton: "Open DevHatch AI Assistant",
      closeChatButton: "Close chatbot",
      inputTextArea: "Type your message",
      sendButton: "Send message",
    },
  };

  const styles = {
    chatButtonStyle: {
      width: "62px",
      height: "62px",
      right: "24px",
      bottom: "24px",
      borderRadius: "9999px",
      background:
        "linear-gradient(135deg, #1769FF 0%, #159FE8 55%, #6D4AFF 100%)",
      boxShadow: "0 14px 32px rgba(23, 105, 255, 0.34)",
      border: "2px solid rgba(255, 255, 255, 0.86)",
      transition: "transform 180ms ease, box-shadow 180ms ease",
    },

    chatButtonHoveredStyle: {
      transform: "translateY(-4px) scale(1.05)",
      boxShadow: "0 20px 42px rgba(23, 105, 255, 0.42)",
    },

    chatIconStyle: {
      width: "31px",
      height: "31px",
    },

    chatWindowStyle: {
      width: "390px",
      maxWidth: "calc(100vw - 32px)",
      height: "560px",
      maxHeight: "calc(100vh - 118px)",
      borderRadius: "22px",
      overflow: "hidden",
      border: "1px solid #D9E6FA",
      boxShadow: "0 24px 70px rgba(6, 26, 69, 0.22)",
      right: "24px",
      bottom: "96px",
    },

    headerStyle: {
      background:
        "linear-gradient(135deg, #061A45 0%, #1769FF 62%, #159FE8 100%)",
      color: "#FFFFFF",
      padding: "18px 20px",
      fontWeight: "700",
    },

    bodyStyle: {
      background:
        "radial-gradient(circle at top right, rgba(23, 105, 255, 0.08), transparent 35%), #FFFFFF",
    },

    botBubbleStyle: {
      background: "#EEF5FF",
      color: "#061A45",
      border: "1px solid #D9E6FA",
      borderRadius: "16px 16px 16px 5px",
      lineHeight: "1.55",
    },

    userBubbleStyle: {
      background:
        "linear-gradient(135deg, #1769FF 0%, #159FE8 100%)",
      color: "#FFFFFF",
      borderRadius: "16px 16px 5px 16px",
      lineHeight: "1.55",
    },

    chatInputContainerStyle: {
      borderTop: "1px solid #E5EDF9",
      background: "#FFFFFF",
      padding: "12px",
    },

    chatInputAreaStyle: {
      border: "1px solid #D9E6FA",
      borderRadius: "14px",
      color: "#061A45",
      background: "#F9FBFF",
    },

    chatInputAreaFocusedStyle: {
      border: "1px solid #1769FF",
      boxShadow: "0 0 0 3px rgba(23, 105, 255, 0.12)",
    },

    sendButtonStyle: {
      background: "#1769FF",
      borderRadius: "10px",
    },

    sendButtonHoveredStyle: {
      background: "#159FE8",
    },

    tooltipStyle: {
      background: "#061A45",
      color: "#FFFFFF",
      borderRadius: "10px",
      padding: "8px 11px",
      boxShadow: "0 10px 24px rgba(6, 26, 69, 0.18)",
    },
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ChatBot
        id="devhatch-ai-assistant"
        flow={flow}
        settings={settings}
        styles={styles}
      />
    </Suspense>
  );
}