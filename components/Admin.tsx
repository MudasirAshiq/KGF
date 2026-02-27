import React, { useState, useEffect } from 'react';
import { getData, updateData, checkAuth } from '../services/dataService';
import { AppData, Product, PolicyItem } from '../types';
import { Save, LogOut, Package, User, FileText, Loader2, BarChart3, Phone, Shield, Plus, Trash2, Flame, Recycle } from 'lucide-react';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState<AppData | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'vision' | 'products' | 'founder' | 'stats' | 'contact' | 'policy' | 'calorific' | 'model'>('vision');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  useEffect(() => {
    const isAuth = sessionStorage.getItem('kgf_admin_auth');
    if (isAuth === 'true') {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const result = await getData();
    setData(result);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkAuth(password)) {
      setIsAuthenticated(true);
      sessionStorage.setItem('kgf_admin_auth', 'true');
      fetchData();
    } else {
      alert("Invalid password (hint: kgfadmin)");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('kgf_admin_auth');
    setData(null);
  };

  const handleSave = async () => {
    if (!data) return;
    setSaveStatus('saving');
    await updateData(data);
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };

  // --- Update Helpers ---

  const updateVision = (field: string, value: string) => {
    if (!data) return;
    setData({ ...data, vision: { ...data.vision, [field]: value } });
  };

  const updateFounder = (field: string, value: string) => {
    if (!data) return;
    setData({ ...data, founder: { ...data.founder, [field]: value } });
  };

  const updateStat = (id: string, value: number) => {
    if (!data) return;
    const newStats = data.stats.map(s => s.id === id ? { ...s, value } : s);
    setData({ ...data, stats: newStats });
  };

  const updateContact = (field: string, value: string) => {
    if (!data) return;
    setData({ ...data, [field]: value });
  };

  const updateCalorific = (index: number, field: string, value: any) => {
    if (!data) return;
    const newData = [...data.calorificData];
    newData[index] = { ...newData[index], [field]: value };
    setData({ ...data, calorificData: newData });
  };

  const updateModelStep = (index: number, field: string, value: string) => {
    if (!data) return;
    const newSteps = [...data.modelSteps];
    newSteps[index] = { ...newSteps[index], [field]: value };
    setData({ ...data, modelSteps: newSteps });
  };

  // --- Product Helpers ---

  const updateProduct = (id: string, field: keyof Product, value: any) => {
    if (!data) return;
    const newProducts = data.products.map(p => p.id === id ? { ...p, [field]: value } : p);
    setData({ ...data, products: newProducts });
  };

  const updateProductFeatures = (id: string, text: string) => {
    if (!data) return;
    const features = text.split('\n').filter(f => f.trim() !== '');
    updateProduct(id, 'features', features);
  };

  const addProduct = () => {
    if (!data) return;
    const newProduct: Product = {
      id: Date.now().toString(),
      title: 'New Product',
      description: 'Description here...',
      features: ['Feature 1']
    };
    setData({ ...data, products: [...data.products, newProduct] });
  };

  const removeProduct = (id: string) => {
    if (!data) return;
    if (window.confirm('Are you sure you want to delete this product?')) {
      setData({ ...data, products: data.products.filter(p => p.id !== id) });
    }
  };

  // --- Policy Helpers ---

  const updatePolicy = (id: string, field: keyof PolicyItem, value: string) => {
    if (!data) return;
    const newPolicy = data.policy.map(p => p.id === id ? { ...p, [field]: value } : p);
    setData({ ...data, policy: newPolicy });
  };

  const addPolicy = () => {
    if (!data) return;
    const newItem: PolicyItem = {
      id: Date.now().toString(),
      year: new Date().getFullYear().toString(),
      title: 'New Initiative',
      description: 'Description...'
    };
    setData({ ...data, policy: [...data.policy, newItem] });
  };

  const removePolicy = (id: string) => {
    if (!data) return;
    if (window.confirm('Are you sure you want to delete this policy item?')) {
      setData({ ...data, policy: data.policy.filter(p => p.id !== id) });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-serif text-stone-900 mb-6 text-center">Admin Access</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-600 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
              />
              <p className="text-xs text-stone-400 mt-2">Hint: kgfadmin</p>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 rounded-lg font-medium hover:bg-emerald-500 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <Loader2 className="animate-spin text-emerald-600" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-stone-900">Content Management</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-medium">
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex flex-col gap-2 flex-shrink-0">
            {[
              { id: 'vision', label: 'Vision', icon: FileText },
              { id: 'products', label: 'Products', icon: Package },
              { id: 'policy', label: 'Policy Timeline', icon: Shield },
              { id: 'stats', label: 'Waste Stats', icon: BarChart3 },
              { id: 'calorific', label: 'Energy Data', icon: Flame },
              { id: 'model', label: 'Process Steps', icon: Recycle },
              { id: 'founder', label: 'Founder', icon: User },
              { id: 'contact', label: 'Contact Info', icon: Phone },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id ? 'bg-emerald-100 text-emerald-800 font-medium' : 'text-stone-600 hover:bg-white'
                }`}
              >
                <item.icon size={18} /> {item.label}
              </button>
            ))}
          </div>

          {/* Editor Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
            
            {activeTab === 'vision' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-stone-800 border-b pb-4">Edit Vision Section</h3>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Headline</label>
                  <input
                    type="text"
                    value={data.vision.headline}
                    onChange={(e) => updateVision('headline', e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Content</label>
                  <textarea
                    rows={6}
                    value={data.vision.content}
                    onChange={(e) => updateVision('content', e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'calorific' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-stone-800 border-b pb-4">Edit Calorific Values</h3>
                <div className="space-y-4">
                  {data.calorificData.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-xl bg-stone-50">
                      <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Fuel Name</label>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) => updateCalorific(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Value (kcal/kg)</label>
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) => updateCalorific(index, 'value', parseInt(e.target.value) || 0)}
                          className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Color Hex</label>
                        <input
                          type="text"
                          value={item.color}
                          onChange={(e) => updateCalorific(index, 'color', e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'model' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-stone-800 border-b pb-4">Edit Process Steps</h3>
                <div className="space-y-4">
                  {data.modelSteps.map((step, index) => (
                    <div key={index} className="p-4 border rounded-xl bg-stone-50 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Title</label>
                          <input
                            type="text"
                            value={step.title}
                            onChange={(e) => updateModelStep(index, 'title', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Icon Name (Recycle, Factory, Flame, Users)</label>
                          <input
                            type="text"
                            value={step.iconName}
                            onChange={(e) => updateModelStep(index, 'iconName', e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Description</label>
                        <textarea
                          rows={2}
                          value={step.desc}
                          onChange={(e) => updateModelStep(index, 'desc', e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'founder' && (
              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-stone-800 border-b pb-4">Edit Founder Details</h3>
                 <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Name</label>
                  <input
                    type="text"
                    value={data.founder.name}
                    onChange={(e) => updateFounder('name', e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Bio</label>
                  <textarea
                    rows={8}
                    value={data.founder.bio}
                    onChange={(e) => updateFounder('bio', e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">LinkedIn URL</label>
                  <input
                    type="text"
                    value={data.founder.linkedin || ''}
                    onChange={(e) => updateFounder('linkedin', e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'stats' && (
              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-stone-800 border-b pb-4">Edit Waste Statistics</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.stats.map(stat => (
                      <div key={stat.id}>
                        <label className="block text-sm font-medium text-stone-600 mb-2">{stat.label} ({stat.suffix})</label>
                        <input
                          type="number"
                          value={stat.value}
                          onChange={(e) => updateStat(stat.id, parseInt(e.target.value) || 0)}
                          className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        />
                      </div>
                    ))}
                 </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-stone-800 border-b pb-4">Edit Contact Information</h3>
                 <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Email Address</label>
                  <input
                    type="text"
                    value={data.contactEmail}
                    onChange={(e) => updateContact('contactEmail', e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-stone-600 mb-2">Physical Address</label>
                  <input
                    type="text"
                    value={data.contactAddress}
                    onChange={(e) => updateContact('contactAddress', e.target.value)}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'products' && (
               <div className="space-y-8">
                 <div className="flex justify-between items-center border-b pb-4">
                   <h3 className="text-xl font-bold text-stone-800">Product Management</h3>
                   <button onClick={addProduct} className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 hover:bg-emerald-500 transition-colors">
                     <Plus size={16} /> Add Product
                   </button>
                 </div>
                 
                 <div className="grid grid-cols-1 gap-8">
                    {data.products.map(p => (
                      <div key={p.id} className="p-6 border border-stone-200 rounded-xl bg-stone-50 relative group">
                        <button 
                          onClick={() => removeProduct(p.id)}
                          className="absolute top-4 right-4 text-stone-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50 transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 size={18} />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Title</label>
                            <input
                              type="text"
                              value={p.title}
                              onChange={(e) => updateProduct(p.id, 'title', e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Description</label>
                            <textarea
                              rows={2}
                              value={p.description}
                              onChange={(e) => updateProduct(p.id, 'description', e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                            />
                          </div>
                          <div className="md:col-span-2">
                             <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Features (One per line)</label>
                             <textarea
                              rows={3}
                              value={p.features.join('\n')}
                              onChange={(e) => updateProductFeatures(p.id, e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none text-sm font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
            )}

            {activeTab === 'policy' && (
              <div className="space-y-8">
                 <div className="flex justify-between items-center border-b pb-4">
                   <h3 className="text-xl font-bold text-stone-800">Policy Timeline</h3>
                   <button onClick={addPolicy} className="bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 hover:bg-emerald-500 transition-colors">
                     <Plus size={16} /> Add Event
                   </button>
                 </div>
                 
                 <div className="space-y-4">
                    {data.policy.map(item => (
                      <div key={item.id} className="p-4 border border-stone-200 rounded-xl bg-stone-50 flex gap-4 items-start relative">
                        <button 
                          onClick={() => removePolicy(item.id)}
                          className="absolute top-2 right-2 text-stone-400 hover:text-red-500 p-1 rounded-full hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                        
                        <div className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-4">
                          <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Year</label>
                            <input
                              type="text"
                              value={item.year}
                              onChange={(e) => updatePolicy(item.id, 'year', e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                            />
                          </div>
                          <div className="md:col-span-4">
                            <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Title</label>
                            <input
                              type="text"
                              value={item.title}
                              onChange={(e) => updatePolicy(item.id, 'title', e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                            />
                          </div>
                          <div className="md:col-span-6">
                             <label className="block text-xs font-bold text-stone-500 uppercase mb-1">Description</label>
                             <textarea
                              rows={2}
                              value={item.description}
                              onChange={(e) => updatePolicy(item.id, 'description', e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-500 outline-none text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t flex items-center justify-end gap-4 sticky bottom-0 bg-white/90 backdrop-blur-sm py-4 -mb-8 rounded-b-2xl">
               {saveStatus === 'saved' && <span className="text-emerald-600 text-sm font-medium">Changes Saved Successfully!</span>}
               <button
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-emerald-500 transition-all flex items-center gap-2 disabled:opacity-50 shadow-lg shadow-emerald-500/20"
              >
                {saveStatus === 'saving' ? <Loader2 className="animate-spin" size={20}/> : <Save size={20} />}
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;