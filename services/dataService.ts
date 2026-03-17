import { AppData } from '../types';

const API_URL = 'http://localhost:5000/api';

// Initial Data resembling a database seed (Fallback)
const initialData: AppData = {
  vision: {
    headline: "Sustainability Meets Innovation",
    content: "We envision a Kashmir where natural resources power the future. By transforming wood waste into high-efficiency fuel, we create a circular economy that protects our forests while empowering local communities."
  },
  products: [
    {
      id: '1',
      title: 'Premium Wood Pellets',
      description: 'High-density biomass fuel pellets designed for maximum efficiency in domestic heating systems and pellet stoves.',
      features: ['High Calorific Value (4800+ kcal/kg)', 'Low Ash Content (<1%)', 'Carbon Neutral', 'Uniform Size for Auto-Feeders']
    },
    {
      id: '2',
      title: 'Industrial Bio-Fuel',
      description: 'Sustainable thermal energy solutions for factories, brick kilns, and large-scale heating plants in the industrial sector.',
      features: ['Cost Effective vs Coal', 'Consistent Burn Rate', 'Eco-Compliant Emissions', 'Bulk Delivery Available']
    },
    {
      id: '3',
      title: 'Sawdust Supply Chain',
      description: 'A community-driven collection model that transforms timber waste into wealth for local families and mill owners.',
      features: ['Zero Waste Initiative', 'Local Sourcing', 'Community Income Generation', 'Sustainable Waste Management']
    },
    {
      id: '4',
      title: 'Eco-Briquettes',
      description: 'Large compressed biomass blocks ideal for traditional fireplaces and open hearths, providing long-lasting warmth.',
      features: ['Slow Burn Technology', 'Easy Storage', 'Minimal Smoke', '100% Natural Bindings']
    }
  ],
  stats: [
    { id: 's1', value: 2999, suffix: ' tons', label: 'to be processed' },
    { id: 's2', value: 7200, suffix: ' mWh', label: 'Clean Energy' },
    { id: 's3', value: 450, suffix: '+', label: 'Families Supported' },
    { id: 's4', value: 12000, suffix: ' kg', label: 'CO2 Offset' }
  ],
  policy: [
    { 
      id: 'p1', 
      year: '2018', 
      title: 'J&K Biofuel Policy', 
      description: 'Introduction of state-wide incentives for biomass utilization to reduce carbon footprint in the Himalayan region.' 
    },
    { 
      id: 'p2', 
      year: '2020', 
      title: 'Clean Air Initiative', 
      description: 'Srinagar Smart City project identifies biomass pellets as a key solution for reducing winter smog caused by traditional heating.' 
    },
    { 
      id: 'p3', 
      year: '2021', 
      title: 'Industrial Mandate', 
      description: 'New regulations requiring brick kilns and heating units to replace at least 20% of coal consumption with bio-pellets.' 
    },
    { 
      id: 'p4', 
      year: '2023', 
      title: 'Green Valley Vision', 
      description: 'Target set for zero wood-waste in landfills by 2030, supported by subsidies for pellet manufacturing units.' 
    },
    { 
      id: 'p5', 
      year: '2025', 
      title: 'Net Zero Kashmir', 
      description: 'A comprehensive roadmap to make the valley carbon neutral by 2045, with KGF as a primary implementation partner.' 
    }
  ],
  calorificData: [
    { name: 'Firewood', value: 3500, color: '#a8a29e' },
    { name: 'Coal', value: 6500, color: '#44403c' },
    { name: 'KGF Pellets', value: 4800, color: '#10b981' },
  ],
  modelSteps: [
    {
      iconName: "Recycle",
      title: "Wood Waste Collection",
      desc: "Recovering sawdust and timber waste from local mills across the valley."
    },
    {
      iconName: "Factory",
      title: "Sustainable Processing",
      desc: "Converting raw biomass into high-density, low-moisture pellets."
    },
    {
      iconName: "Flame",
      title: "Clean Energy Delivery",
      desc: "Providing efficient, low-smoke fuel for households and industrial units."
    },
    {
      iconName: "Users",
      title: "Community Impact",
      desc: "Creating green jobs and reducing the environmental footprint of heating."
    }
  ],
  founder: {
    name: "Ar. Aamir Latief Wani",
    role: "Founder",
    bio: "An Edinburgh-based conservation architect, Aamir works on sustainable approaches to preserving heritage structures while making them energy efficient. He designs retrofitting strategies using wood pellets as a green, net-zero carbon emission fuel. Founder of Ecotherm Agritech (Converge Initiative Top 6, 2024-25) and DesArt Studios (Kashmir, 2018), he advocates for energy literacy and the revival of vernacular earthquake-resistant systems like Dhajji Dewari.",
    address: "Kashmir, India / Edinburgh, UK",
    linkedin: "https://www.linkedin.com/in/aamir-latief-wani-2020415b/"
  },
  contactEmail: "info@kashmirgreenfuel.com",
  contactAddress: "Rajbagh, Kashmir, J&K"
};

let currentData: AppData = { ...initialData };

export const getData = async (): Promise<AppData> => {
  try {
    const res = await fetch(`${API_URL}/content`);
    if (!res.ok) throw new Error('API not available');
    const data = await res.json();
    currentData = data; // Sync local cache
    return data;
  } catch (err) {
    // console.warn('Backend API not available, using local fallback.');
    return new Promise((resolve) => {
      setTimeout(() => resolve(currentData), 500);
    });
  }
};

export const updateData = async (newData: Partial<AppData>): Promise<AppData> => {
  try {
    const res = await fetch(`${API_URL}/content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...newData, password: 'kgfadmin' }), // Passing Auth in body for demo simplicity
    });
    
    if (!res.ok) throw new Error('Failed to update via API');
    const data = await res.json();
    currentData = data;
    return data;
  } catch (err) {
    // console.warn('Backend API not available, updating local fallback.');
    return new Promise((resolve) => {
      currentData = { ...currentData, ...newData };
      setTimeout(() => resolve(currentData), 500);
    });
  }
};

export const checkAuth = (password: string): boolean => {
  return password === "kgfadmin";
};