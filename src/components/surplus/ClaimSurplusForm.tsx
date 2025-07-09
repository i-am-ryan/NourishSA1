
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ClaimSurplusFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const ClaimSurplusForm = ({ onSubmit, onCancel }: ClaimSurplusFormProps) => {
  const [formData, setFormData] = useState({
    claimantType: '',
    name: '',
    contact: '',
    location: '',
    foodNeeded: '',
    notes: '',
    preferredTime: ''
  });

  const claimantTypes = [
    'Family', 'Orphanage', 'Church', 'Community Kitchen', 'Individual', 'NGO', 'School', 'Senior Center'
  ];

  const locations = [
    'Sandton', 'Rosebank', 'Cape Town CBD', 'Soweto', 'Pretoria Central',
    'Durban North', 'Johannesburg CBD', 'Midrand', 'Centurion', 'Alexandra',
    'Khayelitsha', 'Mitchells Plain', 'Tembisa', 'Mamelodi'
  ];

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
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Claim Surplus Food</h2>
        <p className="text-gray-600">Connect with local donors and get fresh surplus food for your community</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Claimant Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type</label>
          <Select value={formData.claimantType} onValueChange={(value) => setFormData({...formData, claimantType: value})}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select organization type" />
            </SelectTrigger>
            <SelectContent>
              {claimantTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name / Organization</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Enter your name or organization name"
            className="h-12 rounded-xl"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
          <Input
            value={formData.contact}
            onChange={(e) => setFormData({...formData, contact: e.target.value})}
            placeholder="WhatsApp number preferred"
            className="h-12 rounded-xl"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select your area" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(location => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Food Needed */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Food Needed</label>
          <Select value={formData.foodNeeded} onValueChange={(value) => setFormData({...formData, foodNeeded: value})}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="What type of food do you need?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fresh Produce">Fresh Produce</SelectItem>
              <SelectItem value="Bakery Items">Bakery Items</SelectItem>
              <SelectItem value="Dairy Products">Dairy Products</SelectItem>
              <SelectItem value="Cooked Meals">Cooked Meals</SelectItem>
              <SelectItem value="Non-Perishable">Non-Perishable</SelectItem>
              <SelectItem value="Any Available">Any Available</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Preferred Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Pickup/Delivery Time</label>
          <Select value={formData.preferredTime} onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="When would you prefer?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Morning (8AM-12PM)">Morning (8AM-12PM)</SelectItem>
              <SelectItem value="Afternoon (12PM-6PM)">Afternoon (12PM-6PM)</SelectItem>
              <SelectItem value="Evening (6PM-8PM)">Evening (6PM-8PM)</SelectItem>
              <SelectItem value="Flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
          <Textarea
            value={formData.notes}
            onChange={(e) => setFormData({...formData, notes: e.target.value})}
            placeholder="Any special requirements or additional information..."
            className="rounded-xl"
            rows={3}
          />
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
            className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Submit Request
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default ClaimSurplusForm;
