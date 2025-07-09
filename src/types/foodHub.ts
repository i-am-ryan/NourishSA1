
export interface FoodHub {
  id: number;
  name: string;
  location: string;
  coordinates: string;
  hours: string;
  phone: string;
  capacity: string;
  currentNeeds: string[];
  status: 'open' | 'busy' | 'urgent';
  image: string;
  manager: {
    name: string;
    photo: string;
    whatsapp: string;
  };
  dailyForecast: string;
  trustScore: number;
  trustedByFamilies: number;
  verifiedDate: string;
}

export interface MapPin {
  id: number;
  lat: number;
  lng: number;
  status: 'open' | 'busy' | 'urgent';
  name: string;
}
