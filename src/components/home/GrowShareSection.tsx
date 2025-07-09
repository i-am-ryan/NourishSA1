import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sprout, HomeIcon, Shield } from 'lucide-react';
import GlowingCard from '@/components/ui/glowing-card';

const GrowShareSection = () => {
  const growShareFeatures = [
    {
      title: "Community Gardens",
      description: "Start growing together in your neighborhood",
      icon: Sprout,
      color: "green",
      image: "/lovable-uploads/b17d9988-0cc7-4bb3-abaa-e11df0943d45.png",
      caption: "Volunteers working together in community gardens"
    },
    {
      title: "Micro Food Banks",
      description: "Drop-off points at churches, schools, and homes",
      icon: HomeIcon,
      color: "blue",
      image: "/lovable-uploads/9ae42749-c423-4231-8688-a74dc7119fec.png",
      caption: "Nutritious meals reach children through local micro food banks"
    },
    {
      title: "Trust Ledger",
      description: "Transparent tracking of every donation",
      icon: Shield,
      color: "orange",
      image: "/lovable-uploads/0ea5814a-8b22-4256-be89-df784abe7883.png",
      caption: "Building trust through transparent community connections"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Grow & Share Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building sustainable food systems through community gardens, micro food banks, and transparent logistics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {growShareFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlowingCard glowColor={feature.color} className="text-center h-full">
                <div className="mb-6">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm text-gray-500 italic">{feature.caption}</p>
                </div>
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button size="sm" variant="outline" className="hover:scale-105 transition-all duration-200">
                  Learn More
                </Button>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowShareSection;
