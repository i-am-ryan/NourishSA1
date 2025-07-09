
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Plus, Minus, Apple, Cake, Milk, UtensilsCrossed, ShoppingBasket } from 'lucide-react';

interface DonateSurplusFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const DonateSurplusForm = ({ onSubmit, onCancel }: DonateSurplusFormProps) => {
  const [formData, setFormData] = useState({
    donorType: '',
    businessName: '',
    foodType: '',
    description: '',
    quantity: 1,
    unit: 'kg',
    expiryDate: '',
    expiryTime: ''
  });

  const donorTypes = [
    'Individual', 'Business', 'Restaurant', 'Farm', 'Retailer', 'Church', 'NGO', 'Orphanage', 'Other'
  ];

  const foodTypes = [
    { value: 'Fresh Produce', icon: Apple, color: 'text-green-600' },
    { value: 'Bakery Items', icon: Cake, color: 'text-amber-600' },
    { value: 'Dairy Products', icon: Milk, color: 'text-blue-600' },
    { value: 'Cooked Meals', icon: UtensilsCrossed, color: 'text-red-600' },
    { value: 'Non-Perishable', icon: ShoppingBasket, color: 'text-gray-600' }
  ];

  const adjustQuantity = (delta: number) => {
    setFormData(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Donate Surplus Food</h2>
        <p className="text-gray-600">Help reduce waste by sharing your surplus food with those in need</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donor Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Donor Type</label>
          <Select value={formData.donorType} onValueChange={(value) => setFormData({...formData, donorType: value})}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select donor type" />
            </SelectTrigger>
            <SelectContent>
              {donorTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Business/Individual Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {formData.donorType === 'Individual' ? 'Your Name' : 'Business Name'}
          </label>
          <Input
            value={formData.businessName}
            onChange={(e) => setFormData({...formData, businessName: e.target.value})}
            placeholder={formData.donorType === 'Individual' ? 'Enter your name' : 'Enter business name'}
            className="h-12 rounded-xl"
          />
        </div>

        {/* Food Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Food Type</label>
          <Select value={formData.foodType} onValueChange={(value) => setFormData({...formData, foodType: value})}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="What type of food?" />
            </SelectTrigger>
            <SelectContent>
              {foodTypes.map(type => {
                const Icon = type.icon;
                return (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center">
                      <Icon className={`mr-2 h-4 w-4 ${type.color}`} />
                      {type.value}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Describe the food items..."
            className="rounded-xl"
            rows={3}
          />
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Photo (Optional)</label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-green-400 transition-colors">
            <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <div className="flex items-center space-x-4">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => adjustQuantity(-1)}
              className="h-12 w-12 rounded-xl"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <div className="flex-1 text-center">
              <span className="text-2xl font-bold">{formData.quantity}</span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => adjustQuantity(1)}
              className="h-12 w-12 rounded-xl"
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Select value={formData.unit} onValueChange={(value) => setFormData({...formData, unit: value})}>
              <SelectTrigger className="w-32 h-12 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">kg</SelectItem>
                <SelectItem value="items">items</SelectItem>
                <SelectItem value="boxes">boxes</SelectItem>
                <SelectItem value="portions">portions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Expiry Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
            <Input
              type="date"
              value={formData.expiryDate}
              onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
              className="h-12 rounded-xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Time</label>
            <Input
              type="time"
              value={formData.expiryTime}
              onChange={(e) => setFormData({...formData, expiryTime: e.target.value})}
              className="h-12 rounded-xl"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            className="flex-1 h-12 rounded-xl"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="flex-1 h-12 rounded-xl bg-green-600 hover:bg-green-700"
          >
            Donate Surplus
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default DonateSurplusForm;
