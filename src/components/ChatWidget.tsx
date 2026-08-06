import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WEBHOOK_URL = 'https://promptto.app.n8n.cloud/webhook/promptto-web';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to latest message
  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [messages, isOpen]);


  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);


  async function handleSend() {
    const text = inputValue.trim();

    if (!text || isLoading) return;


    setMessages((prev) => [
      ...prev,
      {
        role: 'user',
        text,
      },
    ]);

    setInputValue('');
    setIsLoading(true);


    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
        }),
      });


      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }


      const data = await response.json();


      // Supports different n8n AI Agent response formats
      const reply =
        data?.output ||
        data?.reply ||
        data?.message ||
        data?.text ||
        (typeof data === 'string' ? data : null) ||
        'Sorry, I did not understand that.';


      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: reply,
        },
      ]);


    } catch (error) {

      console.error('Chatbot error:', error);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text:
            'Sorry, something went wrong. Please try again.',
        },
      ]);

    } finally {
      setIsLoading(false);
    }
  }



  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

  }



  return (
    <div className="fixed bottom-6 right-6 z-50">

      {isOpen && (

        <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">

          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">

            <h3 className="font-semibold">
              PromptTo AI
            </h3>

            <button
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>

          </div>


          {/* Messages */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3">

            {messages.length === 0 && (

              <div className="bg-gray-100 p-3 rounded-lg">

                <p className="text-sm">
                  Hello! Welcome to PromptTo. How can we help you today?
                </p>

              </div>

            )}



            {messages.map((message, index) => (

              <div
                key={`${message.role}-${index}`}
                className={`rounded-lg p-3 text-sm ${
                  message.role === 'user'
                    ? 'bg-blue-50 text-blue-900 ml-auto'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >

                {message.text}

              </div>

            ))}



            {isLoading && (

              <div className="bg-gray-100 rounded-lg p-3 text-sm">
                PromptTo AI is typing...
              </div>

            )}


            <div ref={bottomRef} />

          </div>



          {/* Input */}
          <div className="p-4 border-t border-gray-200">

            <div className="flex space-x-2">

              <input
                ref={inputRef}
                value={inputValue}
                onChange={(event) =>
                  setInputValue(event.target.value)
                }
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="Ask PromptTo anything..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />


              <button

                onClick={handleSend}

                disabled={isLoading}

                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm disabled:opacity-50"

              >

                {isLoading ? '...' : 'Send'}

              </button>


            </div>

          </div>


        </div>

      )}



      {/* Toggle */}
      <button

        onClick={() => setIsOpen(!isOpen)}

        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center space-x-2"

      >

        <MessageCircle className="w-6 h-6" />

        <span className="hidden sm:block">
          PromptTo AI
        </span>

      </button>


    </div>
  );
};


export default ChatWidget;