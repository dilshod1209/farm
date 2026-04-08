/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Droplets, 
  Sun, 
  Leaf, 
  BarChart3, 
  ArrowRight, 
  Menu, 
  X, 
  Cpu, 
  Database, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Layers,
  TrendingUp,
  Wind,
  ThermometerSun,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// --- Mock Data ---
const moistureData = [
  { time: '00:00', value: 35 },
  { time: '04:00', value: 32 },
  { time: '08:00', value: 45 },
  { time: '12:00', value: 40 },
  { time: '16:00', value: 38 },
  { time: '20:00', value: 42 },
  { time: '23:59', value: 41 },
];

const waterUsageData = [
  { day: 'Mon', saved: 120 },
  { day: 'Tue', saved: 150 },
  { day: 'Wed', saved: 180 },
  { day: 'Thu', saved: 140 },
  { day: 'Fri', saved: 210 },
  { day: 'Sat', saved: 250 },
  { day: 'Sun', saved: 230 },
];

const budgetData = [
  { category: 'IoT Hardware (Sensors & Gateways)', allocation: '$18,000', percentage: '30%' },
  { category: 'AI & Software Development', allocation: '$15,000', percentage: '25%' },
  { category: 'Solar Infrastructure', allocation: '$12,000', percentage: '20%' },
  { category: 'Field Implementation & Labor', allocation: '$9,000', percentage: '15%' },
  { category: 'Maintenance & Operations', allocation: '$6,000', percentage: '10%' },
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-forest p-2 rounded-lg">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-heading font-bold text-forest">AquaSmart Oasis</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#technology" className="text-sm font-medium hover:text-ocean transition-colors">Technology</a>
          <a href="#impact" className="text-sm font-medium hover:text-ocean transition-colors">Impact</a>
          <a href="#transparency" className="text-sm font-medium hover:text-ocean transition-colors">Transparency</a>
          <Button variant="default" className="bg-forest hover:bg-forest/90" asChild>
            <a href="#dashboard">Live Dashboard</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#technology" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Technology</a>
              <a href="#impact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Impact</a>
              <a href="#transparency" className="text-lg font-medium" onClick={() => setIsOpen(false)}>Transparency</a>
              <Button className="bg-forest w-full" onClick={() => setIsOpen(false)}>Live Dashboard</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Counter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-forest mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
        {label}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-forest/10 selection:text-forest">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-emerald/5 to-transparent rounded-l-full blur-3xl" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-6 border-forest/20 text-forest px-4 py-1 rounded-full bg-forest/5">
                Next-Gen Sustainability
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-forest leading-[1.1] mb-8">
                AI-Powered Precision <br />
                <span className="text-ocean">Irrigation for Arid Lands</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                AquaSmart Oasis combines IoT sensor networks with advanced AI prediction engines to transform desert agriculture into thriving sustainable ecosystems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-forest hover:bg-forest/90 h-14 px-8 text-lg">
                  Explore Live Dashboard <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-forest/20 text-forest hover:bg-forest/5">
                  Our Technology
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Element */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute top-1/2 right-20 -translate-y-1/2 w-96 h-96 bg-white rounded-3xl shadow-2xl border border-forest/10 p-8 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-tighter">Live Sensor Feed</span>
            </div>
            <Badge variant="secondary" className="bg-ocean/10 text-ocean">Region: Sahara-A1</Badge>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={moistureData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#064E3B" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#064E3B" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#064E3B" fillOpacity={1} fill="url(#colorValue)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-3 bg-muted rounded-xl">
              <div className="text-[10px] uppercase text-muted-foreground mb-1">Moisture</div>
              <div className="text-xl font-bold text-forest">42.5%</div>
            </div>
            <div className="p-3 bg-muted rounded-xl">
              <div className="text-[10px] uppercase text-muted-foreground mb-1">Temp</div>
              <div className="text-xl font-bold text-forest">31°C</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Live Stats Section */}
      <section className="py-20 bg-forest text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Counter value={1200000} label="Liters of Water Saved" suffix="+" />
            <Counter value={100} label="Solar Powered" suffix="%" />
            <Counter value={15} label="Hectares Managed" />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-heading font-bold text-forest mb-6">Core Technology</h2>
            <p className="text-lg text-muted-foreground">
              Our integrated system uses a multi-layered approach to ensure every drop of water is used with maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-10 h-10 text-forest" />,
                title: "IoT Sensor Network",
                desc: "High-precision LoRaWAN sensors monitoring soil moisture, temperature, and salinity in real-time.",
                tag: "Hardware"
              },
              {
                icon: <Database className="w-10 h-10 text-ocean" />,
                title: "AI Prediction Engine",
                desc: "Machine learning models that analyze weather patterns and sensor data to predict irrigation needs 48h in advance.",
                tag: "Software"
              },
              {
                icon: <Zap className="w-10 h-10 text-emerald" />,
                title: "Solar Energy Hub",
                desc: "Fully autonomous power systems that run our sensors and automated valves using 100% renewable energy.",
                tag: "Infrastructure"
              }
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-muted/50 border border-transparent hover:border-forest/10 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{tech.icon}</div>
                <Badge className="mb-4 bg-forest/10 text-forest hover:bg-forest/10">{tech.tag}</Badge>
                <h3 className="text-2xl font-heading font-bold text-forest mb-4">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-heading font-bold text-forest mb-8">Ecological Impact</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <Droplets className="w-6 h-6" />,
                    title: "Water Conservation",
                    desc: "Reducing water waste by up to 60% compared to traditional flood irrigation methods."
                  },
                  {
                    icon: <Sun className="w-6 h-6" />,
                    title: "Energy Neutrality",
                    desc: "Zero-carbon footprint operations through localized solar micro-grids."
                  },
                  {
                    icon: <Leaf className="w-6 h-6" />,
                    title: "Soil Health",
                    desc: "Preventing salinization and nutrient leaching through precise moisture control."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-forest text-white flex items-center justify-center shadow-lg shadow-forest/20">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-forest mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/irrigation1/600/800" 
                alt="Smart Farm" 
                className="rounded-3xl object-cover h-full shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col gap-4">
                <img 
                  src="https://picsum.photos/seed/irrigation2/600/400" 
                  alt="IoT Sensor" 
                  className="rounded-3xl object-cover h-1/2 shadow-xl"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://picsum.photos/seed/irrigation3/600/400" 
                  alt="Solar Panel" 
                  className="rounded-3xl object-cover h-1/2 shadow-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Transparency Section */}
      <section id="transparency" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-heading font-bold text-forest mb-4">Budget & Transparency</h2>
              <p className="text-lg text-muted-foreground">
                We believe in full accountability. Here is how our $60,000 grant allocation is being utilized to bring AquaSmart Oasis to life.
              </p>
            </div>
            <div className="bg-forest/5 border border-forest/10 p-4 rounded-2xl">
              <div className="text-xs font-bold uppercase text-forest/60 mb-1">Total Grant</div>
              <div className="text-3xl font-heading font-bold text-forest">$60,000.00</div>
            </div>
          </div>

          <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="py-6 px-8 text-forest font-bold">Category</TableHead>
                  <TableHead className="py-6 px-8 text-forest font-bold">Allocation</TableHead>
                  <TableHead className="py-6 px-8 text-forest font-bold text-right">Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {budgetData.map((row, i) => (
                  <TableRow key={i} className="hover:bg-muted/20 transition-colors">
                    <TableCell className="py-6 px-8 font-medium">{row.category}</TableCell>
                    <TableCell className="py-6 px-8 text-ocean font-bold">{row.allocation}</TableCell>
                    <TableCell className="py-6 px-8 text-right">
                      <Badge variant="outline" className="border-forest/20 text-forest">{row.percentage}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Live Monitoring Dashboard */}
      <section id="dashboard" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-forest mb-4">Live Monitoring Dashboard</h2>
            <p className="text-lg text-muted-foreground">Real-time data from our active pilot site in the Kyzylkum Desert.</p>
          </div>

          <Tabs defaultValue="moisture" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white p-1 rounded-2xl h-14 shadow-lg">
                <TabsTrigger value="moisture" className="rounded-xl px-8 h-12 data-[state=active]:bg-forest data-[state=active]:text-white">
                  Soil Moisture
                </TabsTrigger>
                <TabsTrigger value="water" className="rounded-xl px-8 h-12 data-[state=active]:bg-forest data-[state=active]:text-white">
                  Water Saved
                </TabsTrigger>
                <TabsTrigger value="map" className="rounded-xl px-8 h-12 data-[state=active]:bg-forest data-[state=active]:text-white">
                  Field Map
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="moisture">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 rounded-3xl border-none shadow-xl bg-white p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-heading text-forest flex items-center gap-2">
                      <TrendingUp className="w-6 h-6" /> 24h Moisture Trend
                    </CardTitle>
                    <CardDescription>Average soil moisture across 50 sensor nodes</CardDescription>
                  </CardHeader>
                  <div className="h-[400px] w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={moistureData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#888'}} unit="%" />
                        <Tooltip 
                          contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#064E3B" 
                          strokeWidth={4} 
                          dot={{ r: 6, fill: '#064E3B', strokeWidth: 2, stroke: '#fff' }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
                <div className="space-y-6">
                  <Card className="rounded-3xl border-none shadow-xl bg-forest text-white p-6">
                    <div className="flex justify-between items-start mb-4">
                      <ThermometerSun className="w-8 h-8 opacity-80" />
                      <Badge className="bg-white/20 text-white border-none">Optimal</Badge>
                    </div>
                    <div className="text-sm font-medium opacity-80 uppercase tracking-wider mb-1">Current Temp</div>
                    <div className="text-4xl font-heading font-bold">34.2°C</div>
                    <div className="mt-4 text-xs opacity-60">Last updated: 2 mins ago</div>
                  </Card>
                  <Card className="rounded-3xl border-none shadow-xl bg-ocean text-white p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Wind className="w-8 h-8 opacity-80" />
                      <Badge className="bg-white/20 text-white border-none">Moderate</Badge>
                    </div>
                    <div className="text-sm font-medium opacity-80 uppercase tracking-wider mb-1">Wind Speed</div>
                    <div className="text-4xl font-heading font-bold">12.5 km/h</div>
                    <div className="mt-4 text-xs opacity-60">Direction: North-East</div>
                  </Card>
                  <Card className="rounded-3xl border-none shadow-xl bg-white p-6">
                    <div className="flex justify-between items-start mb-4">
                      <ShieldCheck className="w-8 h-8 text-emerald" />
                      <Badge variant="outline" className="border-emerald/20 text-emerald">Active</Badge>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">System Status</div>
                    <div className="text-2xl font-heading font-bold text-forest">All Nodes Online</div>
                    <div className="mt-4 text-xs text-muted-foreground">50/50 sensors reporting</div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="water">
              <Card className="rounded-3xl border-none shadow-xl bg-white p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-heading text-forest">Weekly Water Conservation</CardTitle>
                  <CardDescription>Liters of water saved compared to baseline irrigation</CardDescription>
                </CardHeader>
                <div className="h-[400px] w-full mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={waterUsageData}>
                      <defs>
                        <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0369A1" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0369A1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} unit="L" />
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                      />
                      <Area type="monotone" dataKey="saved" stroke="#0369A1" fillOpacity={1} fill="url(#colorSaved)" strokeWidth={4} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="map">
              <Card className="rounded-3xl border-none shadow-xl bg-white overflow-hidden h-[500px] relative">
                {/* Simulated Map */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="https://picsum.photos/seed/desert-map/1200/800" 
                      alt="Field Map" 
                      className="w-full h-full object-cover opacity-50 grayscale"
                      referrerPolicy="no-referrer"
                    />
                    {/* Sensor Pins */}
                    {[
                      { t: '20%', l: '30%' },
                      { t: '40%', l: '60%' },
                      { t: '70%', l: '20%' },
                      { t: '15%', l: '80%' },
                      { t: '55%', l: '45%' },
                    ].map((pin, i) => (
                      <motion.div 
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2"
                        style={{ top: pin.t, left: pin.l }}
                      >
                        <div className="w-full h-full bg-forest rounded-full border-2 border-white shadow-lg animate-pulse" />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white px-2 py-0.5 rounded text-[8px] font-bold shadow whitespace-nowrap">
                          Node {i + 1}: 42%
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-forest w-5 h-5" />
                    <span className="font-bold text-forest">Pilot Site Alpha</span>
                  </div>
                  <div className="text-xs text-muted-foreground">Coordinates: 41.3775° N, 64.5853° E</div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white p-2 rounded-lg">
                  <Droplets className="text-forest w-6 h-6" />
                </div>
                <span className="text-2xl font-heading font-bold">AquaSmart Oasis</span>
              </div>
              <p className="text-white/60 max-w-md leading-relaxed mb-8">
                Pioneering the future of sustainable desert agriculture through the power of artificial intelligence and high-precision IoT technology.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 text-white">
                  <Globe className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10 text-white">
                  <Layers className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Project</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Impact Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Grant Transparency</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-white/60">
                <li>info@aquasmart-oasis.org</li>
                <li>+1 (555) 123-4567</li>
                <li>Tashkent, Uzbekistan</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© 2026 AquaSmart Oasis. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
