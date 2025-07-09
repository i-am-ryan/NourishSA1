
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight, CheckCircle, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '@/components/GlassCard';
import InteractiveMap from '@/components/foodhubs/InteractiveMap';
import EnhancedHubCard from '@/components/foodhubs/EnhancedHubCard';
import HubFilters from '@/components/foodhubs/HubFilters';
import ImpactStrip from '@/components/foodhubs/ImpactStrip';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Phone } from 'lucide-react';
import { FoodHub } from '@/types/foodHub';

const FoodHubs = () => {
  const [filters, setFilters] = useState({});
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [hubs] = useState<FoodHub[]>([
    {
      id: 1,
      name: "Soweto Community Kitchen",
      location: "Orlando West, Soweto",
      coordinates: "26.2485° S, 27.8539° E",
      hours: "Mon-Fri: 8AM-6PM, Sat: 8AM-2PM",
      phone: "+27 11 935-1234",
      capacity: "200 meals/day",
      currentNeeds: ["Fresh vegetables", "Protein", "Dairy"],
      status: "open",
      image: "🏢",
      manager: {
        name: "Sarah Mthembu",
        photo: "",
        whatsapp: "+27123456789"
      },
      dailyForecast: "Needs 50kg vegetables before 2PM today",
      trustScore: 4.8,
      trustedByFamilies: 1240,
      verifiedDate: "Dec 2024"
    },
    {
      id: 2,
      name: "Cape Town Central Hub",
      location: "District Six, Cape Town",
      coordinates: "33.9249° S, 18.4241° E",
      hours: "Daily: 7AM-7PM",
      phone: "+27 21 461-7890",
      capacity: "150 meals/day",
      currentNeeds: ["Bread", "Canned goods", "Fresh fruit"],
      status: "open",
      image: "🏪",
      manager: {
        name: "John Williams",
        photo: "",
        whatsapp: "+27123456790"
      },
      dailyForecast: "Well stocked, accepting all donations",
      trustScore: 4.9,
      trustedByFamilies: 980,
      verifiedDate: "Dec 2024"
    },
    {
      id: 3,
      name: "Durban Beachfront Center",
      location: "Point, Durban",
      coordinates: "29.8587° S, 31.0218° E",
      hours: "Mon-Sat: 9AM-5PM",
      phone: "+27 31 327-5678",
      capacity: "100 meals/day",
      currentNeeds: ["Rice", "Cooking oil", "Spices"],
      status: "busy",
      image: "🏖️",
      manager: {
        name: "Priya Naidoo",
        photo: "",
        whatsapp: "+27123456791"
      },
      dailyForecast: "Running low on staples - urgent rice needed",
      trustScore: 4.7,
      trustedByFamilies: 650,
      verifiedDate: "Dec 2024"
    },
    {
      id: 4,
      name: "Alexandra Community Center",
      location: "Alexandra Township, Johannesburg",
      coordinates: "26.1036° S, 28.1000° E",
      hours: "Mon-Fri: 6AM-8PM",
      phone: "+27 11 882-9012",
      capacity: "250 meals/day",
      currentNeeds: ["Emergency supplies needed"],
      status: "urgent",
      image: "🏘️",
      manager: {
        name: "Moses Sibeko",
        photo: "",
        whatsapp: "+27123456792"
      },
      dailyForecast: "URGENT: Critical shortage - all items needed",
      trustScore: 4.6,
      trustedByFamilies: 1800,
      verifiedDate: "Dec 2024"
    }
  ]);

  const [sosTriggered, setSosTriggered] = useState(false);

  const handleEmergencySOS = () => {
    setIsEmergencyOpen(true);
  };

  const emergencyOptions = [
    {
      icon: AlertTriangle,
      title: "I need food urgently",
      description: "Connect immediately with nearest food hub",
      action: () => {
        setIsEmergencyOpen(false);
        setSosTriggered(true);
        setTimeout(() => setSosTriggered(false), 3000);
      },
      color: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30"
    },
    {
      icon: MapPin,
      title: "Request same-day pickup",
      description: "Get surplus food delivered today",
      action: () => {
        setIsEmergencyOpen(false);
        window.location.href = '/surplus';
      },
      color: "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/30"
    },
    {
      icon: Users,
      title: "Contact community champion",
      description: "Speak with local volunteer coordinator",
      action: () => {
        setIsEmergencyOpen(false);
        window.open('https://wa.me/27123456789', '_blank');
      },
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/30"
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Donate surplus",
      description: "Choose hub → get drop-off details",
      icon: "📦"
    },
    {
      step: 2,
      title: "Need help?",
      description: "Find nearest hub → dignified no-questions service",
      icon: "🤝"
    },
    {
      step: 3,
      title: "Verified weekly",
      description: "All hubs trusted by local champions",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Background Image */}
        <motion.div 
          className="relative text-center mb-12 rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/lovable-uploads/82076757-f0ea-4ec4-b016-a74d3b68b59a.png')`
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="relative z-10 py-24 px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Find Trusted Community Food Hubs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Safe, local drop points for donations & urgent food support across South Africa.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className={`px-8 py-6 text-lg font-semibold ${
                  sosTriggered 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-red-600 hover:bg-red-700 animate-pulse'
                }`}
                onClick={handleEmergencySOS}
              >
                <AlertTriangle className="mr-2" size={20} />
                {sosTriggered ? 'SOS Sent - Help is coming!' : 'Emergency Food SOS'}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Emergency Dialog */}
        <Dialog open={isEmergencyOpen} onOpenChange={setIsEmergencyOpen}>
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
                onClick={() => setIsEmergencyOpen(false)}
                variant="outline"
                className="w-full rounded-xl h-12"
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Interactive Map */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InteractiveMap hubs={hubs} onHubSelect={(hub) => console.log('Selected hub:', hub)} />
        </motion.div>

        {/* Impact Strip */}
        <div className="mb-12">
          <ImpactStrip />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <HubFilters onFilterChange={setFilters} activeFilters={filters} />
            </div>
          </div>

          {/* Hub Cards */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {hubs.map((hub, index) => (
                <EnhancedHubCard key={hub.id} hub={hub} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <motion.div
          className="mt-16 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground">Simple steps to get help or make a difference</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-8 h-8 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Trust Layer */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GlassCard className="text-center p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold text-foreground">2,300+</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Local families trust our verified community hubs
            </p>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="w-4 h-4 text-red-500 fill-current" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.8/5 Community Rating</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* Volunteer Join Strip */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to help deliver surplus?
              </h3>
              <p className="text-muted-foreground mb-6">
                Become a Local Hero and help connect surplus food with families in need
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/volunteer">
                  Become a Local Hero
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Neighborhood Invite with Street Background */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div 
            className="relative rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url('/lovable-uploads/86e6d306-5b34-4726-b214-f209594889cd.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-green-600/80" />
            
            {/* Content */}
            <div className="relative z-10 p-8 text-white">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-bold mb-4">
                Start a new hub in your area
              </h3>
              <p className="mb-6 opacity-90">
                Register your street, church or school as a verified micro hub
              </p>
              <Button variant="secondary" size="lg" className="text-green-600 bg-white hover:bg-gray-100">
                Get Verified in 2 Days
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FoodHubs;
