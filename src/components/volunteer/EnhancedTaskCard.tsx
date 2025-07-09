
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import SlideButton from '@/components/SlideButton';
import { MapPin, Clock, Package, Truck, Camera, AlertTriangle, Fuel } from 'lucide-react';
import { Task } from '@/types/volunteer';

interface TaskCardProps {
  task: Task;
  onComplete: (taskId: number) => void;
  onReassign: (taskId: number) => void;
  onPhotoUpload: (taskId: number, photo: File) => void;
}

const EnhancedTaskCard = ({ task, onComplete, onReassign, onPhotoUpload }: TaskCardProps) => {
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onPhotoUpload(task.id, file);
      setShowPhotoUpload(false);
    }
  };

  const handleTaskComplete = () => {
    setShowPhotoUpload(true);
  };

  const confirmComplete = () => {
    onComplete(task.id);
    setShowPhotoUpload(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className={`p-6 ${task.status === 'completed' ? 'opacity-60' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant={task.type === 'pickup' ? 'default' : 'secondary'}>
              <Truck className="w-3 h-3 mr-1" />
              {task.type === 'pickup' ? 'Pickup' : 'Delivery'}
            </Badge>
            <Badge variant="outline">
              +{task.points} points
            </Badge>
            <Badge variant="outline" className="text-green-600">
              {task.distance}
            </Badge>
            <Badge variant="outline" className="text-blue-600">
              <Fuel className="w-3 h-3 mr-1" />
              ~R{task.fuelCost}
            </Badge>
          </div>
          <Badge variant={task.status === 'completed' ? 'default' : 'outline'}>
            {task.status}
          </Badge>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-3">
          {task.business || task.destination}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{task.location}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>{task.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Package className="w-4 h-4 mr-2" />
            <span>{task.items}</span>
          </div>
        </div>

        {task.status === 'assigned' && (
          <div className="space-y-3">
            <SlideButton
              text={`Slide to complete ${task.type}`}
              completedText={`${task.type} completed!`}
              onComplete={handleTaskComplete}
            />
            
            <Button
              variant="outline"
              size="sm"
              className="w-full text-orange-600 border-orange-200 hover:bg-orange-50"
              onClick={() => onReassign(task.id)}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Reassign
            </Button>
          </div>
        )}

        {/* Photo Upload Modal */}
        {showPhotoUpload && (
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="text-center">
              <Camera className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground mb-3">
                Upload photo proof to complete task
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id={`photo-${task.id}`}
              />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPhotoUpload(false)}
                >
                  Cancel
                </Button>
                <label htmlFor={`photo-${task.id}`}>
                  <Button size="sm" className="cursor-pointer">
                    Take Photo
                  </Button>
                </label>
                <Button
                  size="sm"
                  variant="default"
                  onClick={confirmComplete}
                >
                  Complete Without Photo
                </Button>
              </div>
            </div>
          </div>
        )}
      </GlassCard>
    </motion.div>
  );
};

export default EnhancedTaskCard;
