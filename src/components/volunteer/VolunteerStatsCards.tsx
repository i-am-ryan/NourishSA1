
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Package, Award, Fuel, MapPin } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { VolunteerStats } from '@/types/volunteer';

interface VolunteerStatsCardsProps {
  stats: VolunteerStats;
}

const VolunteerStatsCards = ({ stats }: VolunteerStatsCardsProps) => {
  const statsCards = [
    {
      icon: Star,
      value: stats.totalPoints,
      label: 'Total Points',
      color: 'text-yellow-500',
      delay: 0.1
    },
    {
      icon: Package,
      value: stats.tasksCompleted,
      label: 'Tasks Completed',
      color: 'text-green-600',
      delay: 0.2
    },
    {
      icon: Award,
      value: stats.rank,
      label: 'Current Rank',
      color: 'text-purple-600',
      delay: 0.3,
      isText: true
    },
    {
      icon: Fuel,
      value: `R${stats.fuelBalance}`,
      label: 'Fuel Credits',
      color: 'text-blue-600',
      delay: 0.4,
      isText: true
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: card.delay }}
        >
          <GlassCard className="text-center p-6">
            <card.icon className={`w-8 h-8 ${card.color} mx-auto mb-3`} />
            <div className="text-2xl font-bold text-foreground mb-1">
              {card.isText ? card.value : card.value}
            </div>
            <div className="text-sm text-muted-foreground">{card.label}</div>
          </GlassCard>
        </motion.div>
      ))}
      
      {/* Zone Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="sm:col-span-2 lg:col-span-4"
      >
        <GlassCard className="text-center p-4">
          <div className="flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary mr-2" />
            <span className="text-foreground font-medium">Your Zone: {stats.zone}</span>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default VolunteerStatsCards;
