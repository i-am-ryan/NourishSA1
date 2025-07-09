import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, HomeIcon } from 'lucide-react';
import GlowingCard from '@/components/ui/glowing-card';

const HowItWorksSection = () => {
  const howItWorks = [
    { 
      title: "Surplus Collected", 
      description: "Local restaurants, shops and farms donate fresh, extra food to NourishSA hubs daily — no good meal goes to waste.",
      icon: Package,
      color: "from-green-400 to-green-600",
      image: "/lovable-uploads/85766eb1-bd48-4d84-9a32-fccdf86ae0bc.png",
      caption: "Colorful bags filled with donated surplus food"
    },
    { 
      title: "Sorted & Packed", 
      description: "Our local volunteers carefully sort, pack and prepare the food for quick, safe delivery to families.",
      icon: HomeIcon,
      color: "from-blue-400 to-blue-600",  
      image: "/lovable-uploads/f4453519-e5bb-4295-ab7a-fce40eae228c.png",
      caption: "Volunteers carefully packing food with care and attention"
    },
    { 
      title: "Meals Shared", 
      description: "Boxes of hope reach families in need — turning surplus into daily nourishment, dignity and community care.",
      icon: Truck,
      color: "from-orange-400 to-orange-600",
      image: "/lovable-uploads/bc00a394-a78d-471b-938b-0477ba11dbd1.png",
      caption: "Community members sharing meals together outdoors"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            How <span className="text-green-600">NourishSA</span> Works
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple three-step journey from surplus to smiles — here's how we make good food reach families in need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {howItWorks.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 text-center h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-2xl mb-4"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">{step.caption}</p>
                </div>
                
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon size={24} />
                </motion.div>
                
                <div className="w-16 h-1 bg-green-600 mx-auto mb-4 rounded-full"></div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-200 hover:scale-105 rounded-full px-6 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
                >
                  Learn More
                </Button>
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
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Together, this simple process means every extra plate feeds hope — not landfills.
          </p>
          <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300 ease-in-out group rounded-xl dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900">
            <Link to="/about">
              See How You Can Help
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

export default HowItWorksSection;
