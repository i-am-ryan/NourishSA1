
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import GrowShareSection from '@/components/home/GrowShareSection';
import ImpactStatsSection from '@/components/home/ImpactStatsSection';
import CommunityStoriesSection from '@/components/home/CommunityStoriesSection';
import FinalCTASection from '@/components/home/FinalCTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <GrowShareSection />
      <ImpactStatsSection />
      <CommunityStoriesSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;
