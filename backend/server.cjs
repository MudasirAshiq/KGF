// This is a reference implementation for the Backend API.
// To run:
// 1. npm install express mongoose cors dotenv
// 2. node backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SiteData = require('./models/SiteData');

// Configuration
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kgf_db';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Initial Seed Data (Fallback)
const initialData = {
  vision: {
    headline: "Sustainability Meets Innovation",
    content: "We envision a Kashmir where natural resources power the future. By transforming wood waste into high-efficiency fuel, we create a circular economy that protects our forests while empowering local communities."
  },
  products: [
    {
      id: '1',
      title: 'Premium Wood Pellets',
      description: 'High-density biomass fuel pellets designed for maximum efficiency.',
      features: ['High Calorific Value', 'Low Ash Content', 'Carbon Neutral']
    },
    {
      id: '2',
      title: 'Industrial Bio-Fuel',
      description: 'Sustainable thermal energy solutions for factories and heating plants.',
      features: ['Cost Effective', 'Consistent Burn', 'Eco-Compliant']
    },
    {
      id: '3',
      title: 'Sawdust Supply Chain',
      description: 'Community-driven collection model transforming waste into wealth.',
      features: ['Zero Waste', 'Local Sourcing', 'Community Income']
    }
  ],
  stats: [
    { id: 's1', value: 3650, suffix: ' tons', label: 'of waste to be processed' },
    { id: 's2', value: 4500, suffix: ' mWh', label: 'Clean Energy' },
    { id: 's3', value: 300, suffix: '+', label: 'Families Supported' }
  ],
  founder: {
    name: "Ar. Aamir Latief Wani",
    role: "Founder & Principal Architect",
    bio: "An Edinburgh-based conservation architect, Aamir works on sustainable approaches to preserving heritage structures while making them energy efficient. He designs retrofitting strategies using wood pellets as a green, net-zero carbon emission fuel. Founder of Ecotherm Agritech (Converge Initiative Top 6, 2024-25) and DesArt Studios (Kashmir, 2018), he advocates for energy literacy and the revival of vernacular earthquake-resistant systems like Dhajji Dewari.",
    address: "Kashmir, India / Edinburgh, UK",
    linkedin: "https://www.linkedin.com/in/aamir-latief-wani-2020415b/"
  },
  policy: [
    { 
      id: 'p1', 
      year: '2018', 
      title: 'J&K Biofuel Policy', 
      description: 'Introduction of state-wide incentives for biomass utilization to reduce carbon footprint in the Himalayan region.' 
    },
    { 
      id: 'p2', 
      year: '2021', 
      title: 'Industrial Mandate', 
      description: 'New regulations requiring brick kilns and heating units to replace at least 20% of coal consumption with bio-pellets.' 
    },
    { 
      id: 'p3', 
      year: '2024', 
      title: 'Green Valley Vision', 
      description: 'Target set for zero wood-waste in landfills by 2030, supported by subsidies for pellet manufacturing units.' 
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
  contactEmail: "info@kashmirgreenfuel.com",
  contactAddress: "Rajbagh, Kashmir, J&K"
};

// Routes

// GET /api/content - Fetch all site content
app.get('/api/content', async (req, res) => {
  try {
    const data = await SiteData.findOne();
    if (data) {
      return res.json(data);
    }
    // If connected but empty, returned initialData
    res.json(initialData);
  } catch (err) {
    console.warn('Database not available, serving initial data.');
    // Fail gracefully with fallback data
    res.json(initialData);
  }
});

// POST /api/content - Update site content
// Protected by simple check in this demo
app.post('/api/content', async (req, res) => {
  const { password, ...updateData } = req.body;
  
  // Simple auth check (In production, use JWT/Sessions)
  if (password !== 'kgfadmin') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    let data = await SiteData.findOne();
    if (!data) {
      data = new SiteData(updateData);
    } else {
      Object.assign(data, updateData);
    }
    const savedData = await data.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));