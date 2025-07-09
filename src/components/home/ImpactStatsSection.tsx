
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Users, HomeIcon, Package } from 'lucide-react';

const ImpactStatsSection = () => {
  const stats = [
    { 
      number: "15,000+", 
      label: "Meals Served", 
      icon: Utensils,
      image: "/lovable-uploads/6f2ea9c8-6aa2-4e26-aed2-414eb6492e76.png",
      caption: "Hot meals for thousands of families"
    },
    { 
      number: "500+", 
      label: "Active Volunteers", 
      icon: Users,
      image: "/lovable-uploads/2a423765-9217-4c15-8508-367465a3b142.png",
      caption: "People making hope real every day"
    },
    { 
      number: "50+", 
      label: "Community Hubs", 
      icon: HomeIcon,
      image: "/lovable-uploads/7eef4732-c8ab-4d01-af4c-dda5ef2b6f7a.png",
      caption: "Safe spaces across South Africa"
    },
    { 
      number: "2,000kg", 
      label: "Food Saved Weekly", 
      icon: Package,
      image: "/lovable-uploads/bcd65d67-2626-4098-9418-116a59543abd.png",
      caption: "Fresh surplus rescued weekly"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Community Impact
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Together, we're changing lives daily, meal by meal, hub by hub across South African communities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white/80 backdrop-blur-md border border-green-100 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-green-400/20 transition-all duration-300 hover:scale-105 h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-lg shadow-green-400/30 group-hover:shadow-green-400/50 transition-all duration-300">
                    <img 
                      src={stat.image} 
                      alt={stat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    <stat.icon size={16} />
                  </motion.div>
                </div>
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {stat.number.includes('+') ? (
                    <>
                      {stat.number.replace('+', '')}
                      <span className="text-green-400">+</span>
                    </>
                  ) : stat.number}
                </motion.div>
                <div className="text-gray-700 font-medium mb-2">{stat.label}</div>
                <p className="text-sm text-gray-500 italic">{stat.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button asChild size="lg" variant="outline" className="border-green-400 text-gray-700 hover:bg-green-400 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 ease-in-out group rounded-xl">
            <Link to="/about">
              See our full Impact Report
              <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
