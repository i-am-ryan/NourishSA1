
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VolunteerSidebar from '@/components/volunteer/VolunteerSidebar';
import VolunteerStatsCards from '@/components/volunteer/VolunteerStatsCards';
import EnhancedTaskCard from '@/components/volunteer/EnhancedTaskCard';
import InteractiveCalendar from '@/components/InteractiveCalendar';
import { Button } from '@/components/ui/button';
import { Task, VolunteerStats } from '@/types/volunteer';

const Volunteer = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      type: 'pickup',
      business: 'SuperSpar Sandton',
      location: 'Sandton, Johannesburg',
      time: '2:00 PM - 3:00 PM',
      items: '50kg mixed vegetables',
      points: 15,
      status: 'assigned',
      distance: '3.5 km',
      fuelCost: 12
    },
    {
      id: 2,
      type: 'delivery',
      destination: 'Community Kitchen - Soweto',
      location: 'Soweto, Johannesburg',
      time: '4:00 PM - 5:00 PM',
      items: 'Fresh produce from SuperSpar',
      points: 20,
      status: 'assigned',
      distance: '2.1 km',
      fuelCost: 8
    },
    {
      id: 3,
      type: 'pickup',
      business: 'Woolworths Rosebank',
      location: 'Rosebank, Johannesburg',
      time: '6:00 PM - 6:30 PM',
      items: '30 loaves of bread',
      points: 10,
      status: 'completed',
      distance: '4.2 km',
      fuelCost: 15
    }
  ]);

  const [volunteerStats] = useState<VolunteerStats>({
    totalPoints: 145,
    tasksCompleted: 23,
    rank: 'Community Champion',
    level: 3,
    fuelBalance: 45,
    airtimeBalance: 25,
    zone: 'Soweto'
  });

  const handleCompleteTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: 'completed' as const } : task
    ));
  };

  const handleReassignTask = (taskId: number) => {
    console.log(`Reassigning task ${taskId} to nearby volunteers...`);
    // Implementation for emergency reassign
  };

  const handlePhotoUpload = (taskId: number, photo: File) => {
    console.log(`Photo uploaded for task ${taskId}:`, photo.name);
    // Implementation for photo upload
  };

  const renderHeroBanner = () => (
    <motion.div 
      className="text-center mb-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Your Mission Control for Community Impact
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Track tasks, fuel, rewards — all in one place.
      </p>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div>
            {renderHeroBanner()}
            <VolunteerStatsCards stats={volunteerStats} />
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Tasks</h2>
                <div className="space-y-4">
                  {tasks.map((task) => (
                    <EnhancedTaskCard
                      key={task.id}
                      task={task}
                      onComplete={handleCompleteTask}
                      onReassign={handleReassignTask}
                      onPhotoUpload={handlePhotoUpload}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Find New Tasks
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Smart Route
                  </Button>
                  <Button variant="outline" className="w-full">
                    Claim Fuel Credits
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tasks':
        return (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">All Tasks</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <EnhancedTaskCard
                  key={task.id}
                  task={task}
                  onComplete={handleCompleteTask}
                  onReassign={handleReassignTask}
                  onPhotoUpload={handlePhotoUpload}
                />
              ))}
            </div>
          </div>
        );

      case 'routes':
        return (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Smart Route Planner</h2>
            <p className="text-muted-foreground">Route planning feature coming soon...</p>
          </div>
        );

      case 'leaderboard':
        return (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Zone Leaderboard</h2>
            <p className="text-muted-foreground">Leaderboard feature coming soon...</p>
          </div>
        );

      case 'impact':
        return (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Impact</h2>
            <p className="text-muted-foreground">Impact tracking coming soon...</p>
          </div>
        );

      case 'settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Settings</h2>
            <p className="text-muted-foreground">Settings panel coming soon...</p>
          </div>
        );

      default:
        return renderContent();
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="flex">
        <VolunteerSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          zone={volunteerStats.zone}
        />

        <main className="flex-1 lg:ml-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {renderContent()}

            {activeSection === 'dashboard' && (
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">Schedule</h2>
                <InteractiveCalendar />
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Volunteer;
