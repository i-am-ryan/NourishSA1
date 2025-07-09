
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Globe, Bot, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useLocation } from 'react-router-dom';

const FloatingAIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'assistant',
      message: "Hi! I'm your NourishSA assistant. I can help you with information about food security, nutrition, sustainable agriculture, community programs, and anything related to addressing hunger in South Africa. What would you like to know?"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  
  // Only show on home page
  if (location.pathname !== '/') {
    return null;
  }

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'zulu', label: 'isiZulu' },
    { value: 'xhosa', label: 'isiXhosa' },
    { value: 'sotho', label: 'Sesotho' },
    { value: 'afrikaans', label: 'Afrikaans' },
    { value: 'tswana', label: 'Setswana' },
    { value: 'pedi', label: 'Sepedi' }
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = message;
    setMessage('');
    setIsLoading(true);
    
    setChatHistory(prev => [...prev, { type: 'user', message: userMessage }]);
    
    try {
      // Simulate AI research and response
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const aiResponse = `Based on current research about "${userMessage}" in the context of South African food security:

This is a comprehensive topic that involves multiple factors including agricultural policies, climate change impacts, economic conditions, and community-based interventions. 

In South Africa specifically, this relates to programs like the National School Nutrition Programme, community gardens initiatives, and organizations working to reduce the 26% food insecurity rate affecting approximately 15 million people.

Would you like me to provide more specific information about any aspect of this topic, such as local programs, nutrition guidelines, or community resources?`;
      
      setChatHistory(prev => [...prev, { type: 'assistant', message: aiResponse }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { 
        type: 'assistant', 
        message: "I apologize, but I'm having trouble accessing the latest research right now. Please try again in a moment, or feel free to explore our other sections for food resources and volunteer opportunities." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating AI Assistant Button - Bottom Right - Made Smaller */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-3 rounded-full shadow-lg"
          size="sm"
        >
          <Bot className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Chat Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg mx-4 rounded-2xl border-0 shadow-2xl max-h-[80vh] flex flex-col bg-background">
          <DialogHeader className="space-y-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl font-bold text-foreground flex items-center">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-3">
                  <Bot className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                Ask NourishSA
              </DialogTitle>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-40 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {languages.map(lang => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </DialogHeader>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 min-h-[200px] max-h-[300px]">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl ${
                    chat.type === 'user'
                      ? 'bg-green-600 text-white'
                      : 'bg-muted text-foreground border border-border'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{chat.message}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground border border-border p-3 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-sm text-muted-foreground ml-2">Researching...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="flex-shrink-0 flex space-x-2 pt-4 border-t border-border">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about food security, nutrition, programs..."
              className="flex-1 rounded-xl bg-background"
              onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              disabled={isLoading}
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-green-600 hover:bg-green-700 rounded-xl px-4"
              disabled={!message.trim() || isLoading}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingAIAssistant;
