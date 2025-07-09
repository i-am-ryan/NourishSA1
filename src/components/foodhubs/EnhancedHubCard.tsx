
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GlassCard from '@/components/GlassCard';
import { MapPin, Clock, Phone, Users, MessageCircle, CheckCircle, Star } from 'lucide-react';
import { FoodHub } from '@/types/foodHub';

interface EnhancedHubCardProps {
  hub: FoodHub;
  index: number;
}

const EnhancedHubCard = ({ hub, index }: EnhancedHubCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500';
      case 'busy': return 'bg-yellow-500';
      case 'urgent': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Open & Available';
      case 'busy': return 'Busy';
      case 'urgent': return 'Urgent Help Needed';
      default: return 'Unknown';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <GlassCard className="h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="text-3xl mr-3">{hub.image}</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-foreground">{hub.name}</h3>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex items-center mt-1">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(hub.status)} mr-2`}></div>
                <span className="text-sm font-medium text-muted-foreground">
                  {getStatusText(hub.status)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Manager Profile */}
        <div className="flex items-center gap-3 mb-4 p-3 bg-muted/30 rounded-lg">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            {hub.manager.name.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{hub.manager.name}</p>
            <p className="text-xs text-muted-foreground">Hub Manager</p>
          </div>
          <Button size="sm" variant="ghost" className="p-2">
            <MessageCircle className="w-4 h-4 text-green-600" />
          </Button>
        </div>

        {/* Location & Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
            <div>
              <div className="text-foreground">{hub.location}</div>
              <div className="text-xs text-muted-foreground">{hub.coordinates}</div>
            </div>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-3 flex-shrink-0" />
            <span className="text-foreground">{hub.hours}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
            <span className="text-foreground">{hub.phone}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Users className="w-4 h-4 mr-3 flex-shrink-0" />
            <span className="text-foreground">{hub.capacity}</span>
          </div>
        </div>

        {/* Daily Forecast */}
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
          <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
            Daily Forecast
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-300 mt-1">
            {hub.dailyForecast}
          </p>
        </div>

        {/* Current Needs */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2">Current Needs:</h4>
          <div className="flex flex-wrap gap-2">
            {hub.currentNeeds.map((need, needIndex) => (
              <Badge 
                key={needIndex} 
                variant={hub.status === 'urgent' ? 'destructive' : 'secondary'}
              >
                {need}
              </Badge>
            ))}
          </div>
        </div>

        {/* Trust Score */}
        <div className="mb-6 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-muted-foreground">
              Trusted by {hub.trustedByFamilies.toLocaleString()} families
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Verified {hub.verifiedDate}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <Button className="flex-1 bg-green-600 hover:bg-green-700">
              <MapPin className="w-4 h-4 mr-1" />
              Get Directions
            </Button>
            <Button variant="outline" className="flex-1">
              <Phone className="w-4 h-4 mr-1" />
              Call Hub
            </Button>
          </div>
          <Button variant="outline" className="w-full">
            <MessageCircle className="w-4 h-4 mr-1" />
            WhatsApp Manager
          </Button>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default EnhancedHubCard;
