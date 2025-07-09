
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Together We Feed <span className="text-green-600">South Africa</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Every surplus meal matters. Every volunteer hour counts. Every donation builds hope.
            Join our community of changemakers turning waste into nourishment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300 ease-in-out group rounded-xl"
            >
              <Link to="/volunteer">
                Get Started Today
                <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </Button>
            
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg hover:scale-105 hover:shadow-lg hover:shadow-green-600/25 transition-all duration-300 ease-in-out group rounded-xl dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
            >
              <Link to="/about">
                Learn More
                <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <ArrowRight size={20} />
                </span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
