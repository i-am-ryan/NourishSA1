
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import { FoodHub } from '@/types/foodHub';

interface InteractiveMapProps {
  hubs: FoodHub[];
  onHubSelect: (hub: FoodHub) => void;
}

const InteractiveMap = ({ hubs, onHubSelect }: InteractiveMapProps) => {
  const [selectedHub, setSelectedHub] = useState<FoodHub | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'urgent': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const mapPins = hubs.map((hub, index) => ({
    id: hub.id,
    x: 20 + (index % 3) * 30 + Math.random() * 10,
    y: 30 + Math.floor(index / 3) * 25 + Math.random() * 10,
    hub
  }));

  return (
    <div className="relative">
      <GlassCard className="h-80 md:h-96 relative overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
              {/* Simple map illustration */}
              <path d="M10,20 Q30,10 50,25 T90,30" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M5,40 Q25,35 45,50 T85,55" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" fill="none" opacity="0.3" />
              <path d="M15,60 Q35,55 55,70 T95,75" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" fill="none" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Map Pins */}
        {mapPins.map((pin) => (
          <motion.button
            key={pin.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full ${getStatusColor(pin.hub.status)} shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform z-10`}
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            onClick={() => setSelectedHub(pin.hub)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <MapPin className="w-2 h-2 text-gray-600" />
            </div>
          </motion.button>
        ))}

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-lg p-3 text-xs">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>Open</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span>Busy</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Urgent</span>
            </div>
          </div>
        </div>

        {/* Hub Popup */}
        {selectedHub && (
          <motion.div
            className="absolute bottom-4 left-4 right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-border">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-foreground">{selectedHub.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedHub.location}</p>
                </div>
                <button
                  onClick={() => setSelectedHub(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  <Navigation className="w-4 h-4 mr-1" />
                  Directions
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="w-4 h-4 mr-1" />
                  Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </GlassCard>
    </div>
  );
};

export default InteractiveMap;
