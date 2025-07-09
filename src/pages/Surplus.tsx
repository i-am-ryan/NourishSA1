
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import GlassCard from '@/components/GlassCard';
import DonateSurplusForm from '@/components/surplus/DonateSurplusForm';
import ClaimSurplusForm from '@/components/surplus/ClaimSurplusForm';
import { 
  Plus, 
  Heart,
  Gift,
  Users,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Surplus = () => {
  const [activeFlow, setActiveFlow] = useState<'none' | 'donate' | 'claim'>('none');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleDonateSubmit = (data: any) => {
    // AI Surplus Matcher logic would go here
    setSuccessMessage("Thank you! Your food is going to Soweto Community Kitchen. Volunteer Mary will pick up at 4PM today.");
    setActiveFlow('none');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleClaimSubmit = (data: any) => {
    // AI Surplus Matcher logic would go here
    setSuccessMessage(`Perfect! We found 5kg fresh vegetables from SuperSpar Sandton. Volunteer John will deliver to ${data.location} within 2 hours.`);
    setActiveFlow('none');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-lg max-w-md">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <p className="font-medium">{successMessage}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header with Food Image */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Food Image */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c27bf122-0959-472b-8de1-13cca9214a85.png"
              alt="Delicious prepared meals"
              className="w-full max-w-4xl mx-auto h-64 md:h-80 object-cover rounded-3xl shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-green-600 mb-4">
            Surplus Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Smart matching system that connects surplus food with verified recipients through local volunteers
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeFlow === 'none' && (
              <motion.div
                key="selection"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {/* Action Selection */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {/* Donate Card with Background Image */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div 
                      className="relative overflow-hidden rounded-2xl cursor-pointer group h-full"
                      onClick={() => setActiveFlow('donate')}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('/lovable-uploads/c84c72dc-5e01-4b9e-a7c8-fcc3dbfcf5e6.png')`
                        }}
                      />
                      {/* Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-green-600/80" />
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center text-white">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                          <Gift className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Donate Surplus Food</h2>
                        <p className="mb-6 leading-relaxed opacity-90">
                          Share your excess food with local families, orphanages, and community kitchens through our matching system
                        </p>
                        <div className="flex items-center justify-center font-semibold group-hover:text-green-200">
                          Start Donating <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Claim Card with Background Image */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div 
                      className="relative overflow-hidden rounded-2xl cursor-pointer group h-full"
                      onClick={() => setActiveFlow('claim')}
                    >
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url('/lovable-uploads/43610b4f-4ed2-47c5-a256-a969da6fd0f7.png')`
                        }}
                      />
                      {/* Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-blue-600/80" />
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center text-white">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                          <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Claim Surplus Food</h2>
                        <p className="mb-6 leading-relaxed opacity-90">
                          Access fresh surplus food for your family, organization, or community through verified local donors
                        </p>
                        <div className="flex items-center justify-center font-semibold group-hover:text-blue-200">
                          Start Claiming <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* How It Works */}
                <GlassCard className="p-8 mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How Surplus Matching Works</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Smart Geo-Matching</h4>
                      <p className="text-gray-600 text-sm">Smart system matches donors and recipients based on location, food type, and urgency</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-orange-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Volunteer Network</h4>
                      <p className="text-gray-600 text-sm">Verified volunteers handle pickup and delivery with WhatsApp coordination</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Real-Time Tracking</h4>
                      <p className="text-gray-600 text-sm">Live status updates for donors, recipients, and volunteers throughout the process</p>
                    </div>
                  </div>
                </GlassCard>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { number: '2,847', label: 'Meals Shared' },
                    { number: '156', label: 'Active Donors' },
                    { number: '89', label: 'Verified Recipients' },
                    { number: '45', label: 'Volunteer Drivers' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                      <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeFlow === 'donate' && (
              <motion.div
                key="donate"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8 max-w-2xl mx-auto">
                  <DonateSurplusForm
                    onSubmit={handleDonateSubmit}
                    onCancel={() => setActiveFlow('none')}
                  />
                </GlassCard>
              </motion.div>
            )}

            {activeFlow === 'claim' && (
              <motion.div
                key="claim"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8 max-w-2xl mx-auto">
                  <ClaimSurplusForm
                    onSubmit={handleClaimSubmit}
                    onCancel={() => setActiveFlow('none')}
                  />
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Surplus;
