
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, Target, Award, Utensils, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We put people before profit, always. Every meal we share, every plan we make — it all begins with the wellbeing of our neighbours.",
      image: "/lovable-uploads/1c03dbd3-d693-4c6b-8f27-6b99367e1cbe.png",
      caption: "South African community event"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We can't do this alone. We trust in the power of people working together — businesses, volunteers, families — all hands and hearts in.",
      image: "/lovable-uploads/b562b356-ddbe-4931-b73b-e1835cd07c0c.png",
      caption: "teamwork volunteers South Africa"
    },
    {
      icon: Utensils,
      title: "Impact Focused",
      description: "Numbers matter — but so do faces and stories. We count meals served, but we also count the hope we deliver, plate by plate.",
      image: "/lovable-uploads/d5d2488a-c590-474a-8efd-85da37de4a0a.png",
      caption: "community kitchen Africa"
    },
    {
      icon: Award,
      title: "Trust & Transparency",
      description: "No secrets, no shortcuts. We stay open, clear and accountable — so every family, donor and volunteer knows they can believe in us.",
      image: "/lovable-uploads/098de943-a35a-49dc-a16e-a182264cafad.png",
      caption: "hands together trust South Africa"
    }
  ];

  const team = [
    {
      name: "Ryan Musiyarira",
      role: "Lead Solutions Architect & Full-Stack Developer",
      bio: "Technology innovator passionate about building scalable solutions for social good.",
      image: "/lovable-uploads/f5902ce9-7b9f-4560-973a-40866fb15e30.png"
    },
    {
      name: "Emmanuel Lombe",
      role: "Community Engagement Lead",
      bio: "Community organizer with deep roots in South African townships and rural areas.",
      image: "/lovable-uploads/e494273d-31fd-49b1-9b54-584e45ee46ee.png"
    },
    {
      name: "Oratile Selepe",
      role: "Volunteer Coordinator",
      bio: "Former teacher who coordinates our amazing network of local volunteers.",
      image: "👩🏿‍💼"
    },
    {
      name: "Trister Tempo",
      role: "Partnerships & Donor Relations",
      bio: "Building bridges between businesses and communities for sustainable food sharing.",
      image: "/lovable-uploads/cc051a83-b3f1-4c4f-a96e-90f1fb1c1a97.png"
    },
    {
      name: "Zachary Issel",
      role: "Operations & Logistics Manager",
      bio: "Supply chain expert ensuring food gets from surplus to families efficiently.",
      image: "/lovable-uploads/3bceab24-2f13-460c-a105-297ef82d6647.png"
    },
    {
      name: "Tshepo Sitoe",
      role: "Sustainability & Impact Analyst",
      bio: "Data scientist measuring our impact and environmental sustainability.",
      image: "/lovable-uploads/ac130dcb-a1a7-48dc-9ff8-bc9a44406e32.png"
    },
    {
      name: "Sandra Mwangi",
      role: "Communications & Storytelling Lead",
      bio: "Journalist sharing the powerful stories of communities we serve.",
      image: "/lovable-uploads/2a38b317-9fa1-4812-8956-ac9e109e919c.png"
    }
  ];

  return (
    <div className="min-h-screen pt-16 dark:bg-gray-900">
      {/* Hero Section - Our Story */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/7d5a1d34-a36c-4a04-9618-57e896e998e1.png" 
            alt="Community members sharing food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
        </div>
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="font-bold">NourishSA was born from a simple observation:</span> while many South Africans struggle with food insecurity, 
              tons of perfectly good food go to waste every day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                <Link to="/signin">Join Our Mission</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/772e67f8-2f3b-4fd2-be1c-4994d4c6a6f6.png" 
                    alt="We Care community bag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 p-6">
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    We connect surplus food from businesses with families in need through a network of 
                    community volunteers and local hubs. Our technology-driven approach ensures efficient, 
                    transparent, and dignified food distribution.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Every meal we help provide is a step toward building stronger, more resilient communities 
                    across South Africa.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-8">
                <div className="text-center">
                  <div className="mb-6 relative">
                    <img 
                      src="/lovable-uploads/9ab420e3-8304-483a-b4bd-3207bed5cd2f.png" 
                      alt="South African flag"
                      className="w-24 h-16 mx-auto rounded-lg object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Vision 2030</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    To eliminate food waste and hunger in South Africa through community-powered logistics 
                    and technology innovation.
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 relative">
        {/* Subtle community background */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/lovable-uploads/1c03dbd3-d693-4c6b-8f27-6b99367e1cbe.png" 
            alt="Community background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              These are the promises we live by — what keeps us real, honest and rooted in the communities we serve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden"
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-300">
                    <img 
                      src={value.image} 
                      alt={value.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-left">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                      className="mb-4"
                    >
                      <value.icon className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/4165599e-a3b2-40df-b492-bfa720d080af.png" 
                alt="happy South African family smiling"
                className="w-full h-full object-cover"
              />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic font-serif max-w-2xl">
              "These values are more than words — they're the promise we make to every community we touch."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate humans building real change — one surplus meal, one family at a time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)" }}
                >
                  <div className="mb-6">
                    {member.image.startsWith('/') ? (
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="text-6xl mb-4"
                      >
                        {member.image}
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-green-600 dark:text-green-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
