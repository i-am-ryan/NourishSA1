
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Phone, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLocation } from 'react-router-dom';

const EmergencySOS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Only show on food hubs page
  if (location.pathname !== '/hubs') {
    return null;
  }

  const emergencyOptions = [
    {
      icon: AlertTriangle,
      title: "I need food urgently",
      description: "Connect immediately with nearest food hub",
      action: () => window.location.href = '/hubs',
      color: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30"
    },
    {
      icon: MapPin,
      title: "Request same-day pickup",
      description: "Get surplus food delivered today",
      action: () => window.location.href = '/surplus',
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/30"
    },
    {
      icon: Users,
      title: "Contact community champion",
      description: "Speak with local volunteer coordinator",
      action: () => window.open('https://wa.me/27123456789', '_blank'),
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/30"
    }
  ];

  return (
    <>
      {/* Emergency Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md mx-4 rounded-2xl border-0 shadow-2xl bg-background">
          <DialogHeader className="space-y-4 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              Emergency Food Help
            </DialogTitle>
            <p className="text-muted-foreground">
              We're here to help connect you with immediate food assistance
            </p>
          </DialogHeader>

          <div className="space-y-3">
            {emergencyOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.button
                  key={index}
                  onClick={option.action}
                  className={`w-full p-4 rounded-xl border border-border text-left transition-all duration-200 ${option.color}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-3">
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{option.title}</h3>
                      <p className="text-sm opacity-80">{option.description}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border">
            <Button 
              onClick={() => setIsOpen(false)}
              variant="outline"
              className="w-full rounded-xl h-12"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmergencySOS;
