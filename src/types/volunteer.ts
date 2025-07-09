
export interface Task {
  id: number;
  type: 'pickup' | 'delivery';
  business?: string;
  destination?: string;
  location: string;
  time: string;
  items: string;
  points: number;
  status: 'assigned' | 'completed' | 'in-progress';
  distance: string;
  fuelCost: number;
}

export interface VolunteerStats {
  totalPoints: number;
  tasksCompleted: number;
  rank: string;
  level: number;
  fuelBalance: number;
  airtimeBalance: number;
  zone: string;
}
