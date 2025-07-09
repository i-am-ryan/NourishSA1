
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Package, AlertTriangle } from 'lucide-react';

interface HubFiltersProps {
  onFilterChange: (filters: any) => void;
  activeFilters: any;
}

const HubFilters = ({ onFilterChange, activeFilters }: HubFiltersProps) => {
  const needsCategories = [
    { name: 'Fresh Vegetables', count: 12, icon: '🥬' },
    { name: 'Bread', count: 8, icon: '🍞' },
    { name: 'Canned Goods', count: 15, icon: '🥫' },
    { name: 'Emergency', count: 3, icon: '🚨' },
    { name: 'Protein', count: 6, icon: '🥩' },
    { name: 'Dairy', count: 4, icon: '🥛' },
  ];

  const statusOptions = [
    { name: 'Open', color: 'bg-green-500', count: 18 },
    { name: 'Busy', color: 'bg-yellow-500', count: 5 },
    { name: 'Urgent', color: 'bg-red-500', count: 3 },
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search hubs by location or name..."
          className="pl-10 h-12"
        />
      </div>

      {/* Quick Location Filter */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-2">
          <MapPin className="w-4 h-4" />
          Within 10km
        </Button>
        <Button variant="ghost" size="sm">
          Show All Locations
        </Button>
      </div>

      {/* Status Filter */}
      <div>
        <h3 className="font-medium text-foreground mb-3">Filter by Status</h3>
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((status) => (
            <Button
              key={status.name}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
              {status.name} ({status.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Needs Filter */}
      <div>
        <h3 className="font-medium text-foreground mb-3">Filter by Needs</h3>
        <div className="grid grid-cols-2 gap-2">
          {needsCategories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              size="sm"
              className="justify-start gap-2"
            >
              <span>{category.icon}</span>
              <span className="flex-1 text-left">{category.name}</span>
              <Badge variant="secondary" className="ml-auto">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Nearby Suggestions */}
      <div className="p-4 bg-muted/30 rounded-lg">
        <h4 className="font-medium text-foreground mb-2">Also nearby...</h4>
        <p className="text-sm text-muted-foreground mb-3">
          2 more verified hubs within 15km
        </p>
        <Button variant="ghost" size="sm" className="w-full">
          Show Nearby Hubs
        </Button>
      </div>
    </motion.div>
  );
};

export default HubFilters;
