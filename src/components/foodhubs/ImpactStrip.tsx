
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Package } from 'lucide-react';

const ImpactStrip = () => {
  const impactStats = [
    { icon: Package, value: '2,300kg', label: 'Surplus redirected' },
    { icon: Users, value: '8,400', label: 'Meals created' },
    { icon: TrendingUp, value: '26', label: 'Active hubs' },
  ];

  const weeklyPhotos = [
    '🍎', '🥬', '🍞', '🥛', '🥕'
  ];

  return (
    <motion.div
      className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          This Week's Community Impact
        </h3>
        <p className="text-muted-foreground">
          Together, we're making a real difference across South Africa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {impactStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Weekly photos from hub managers
        </p>
        <div className="flex justify-center space-x-2">
          {weeklyPhotos.map((photo, index) => (
            <motion.div
              key={index}
              className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center text-lg shadow-sm"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {photo}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactStrip;
