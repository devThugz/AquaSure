import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useScroll, useInView } from 'framer-motion';
import { ArrowRightIcon, CloudLightningIcon, ShieldCheckIcon, UsersIcon, ChevronDownIcon, WifiIcon, ThermometerIcon, WavesIcon, FishIcon, MapPinIcon, LifeBuoyIcon, BrainIcon, BarChartIcon, CoinsIcon, PhoneIcon, MailIcon, MessageSquareIcon, ChevronRightIcon, AlertTriangleIcon, UserIcon, XIcon, MenuIcon } from 'lucide-react';
export function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {
    scrollYProgress
  } = useScroll();
  const controls = useAnimation();
  const heroRef = useRef(null);
  // Refs for each section
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  // InView states for each section
  const aboutInView = useInView(aboutRef, {
    margin: '-100px 0px'
  });
  const featuresInView = useInView(featuresRef, {
    margin: '-100px 0px'
  });
  const pricingInView = useInView(pricingRef, {
    margin: '-100px 0px'
  });
  const contactInView = useInView(contactRef, {
    margin: '-100px 0px'
  });
  // Active section for navbar highlighting
  const [activeSection, setActiveSection] = useState('hero');
  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Update active section based on scroll position
  useEffect(() => {
    if (aboutInView) setActiveSection('about');else if (featuresInView) setActiveSection('features');else if (pricingInView) setActiveSection('pricing');else if (contactInView) setActiveSection('contact');else setActiveSection('hero');
  }, [aboutInView, featuresInView, pricingInView, contactInView]);
  // Animate elements on initial load
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    });
  }, [controls]);
  // Smooth scroll to section
  const scrollToSection = sectionRef => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth'
    });
    setMobileMenuOpen(false);
  };
  // Particle animation for background
  const Particles = () => {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({
        length: 20
      }).map((_, index) => <motion.div key={index} className="absolute rounded-full bg-aqua-500/30" initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5
      }} animate={{
        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight - 100],
        x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth - 100]
      }} transition={{
        repeat: Infinity,
        repeatType: 'reverse',
        duration: Math.random() * 10 + 20
      }} style={{
        width: Math.random() * 20 + 10,
        height: Math.random() * 20 + 10,
        filter: 'blur(8px)',
        opacity: Math.random() * 0.3 + 0.1
      }} />)}
      </div>;
  };
  // Background blobs for gradient effect
  const BackgroundBlobs = () => {
    return <>
        <div className="blob bg-aqua-500" style={{
        width: '500px',
        height: '500px',
        top: '-100px',
        right: '-100px'
      }} />
        <div className="blob bg-teal-500" style={{
        width: '600px',
        height: '600px',
        bottom: '-200px',
        left: '-200px',
        animationDelay: '2s'
      }} />
        <div className="blob bg-ocean-aqua" style={{
        width: '400px',
        height: '400px',
        top: '40%',
        right: '10%',
        animationDelay: '5s'
      }} />
      </>;
  };
  return <div className="min-h-screen bg-gradient-to-b from-ocean-navy via-ocean-navy/95 to-ocean-blue/90 text-soft-white overflow-hidden">
      <Particles />
      <BackgroundBlobs />
      {/* Navigation Bar */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-ocean-navy shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src="/AQUA.png" alt="AquaSure Logo" className="h-12 w-12 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-white">AquaSure</h1>
                <p className="text-xs text-aqua-300">Smart Ocean Innovation</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className={`text-soft-white hover:text-aqua-500 transition-colors ${activeSection === 'about' ? 'text-aqua-500 font-medium' : ''}`} onClick={e => {
              e.preventDefault();
              scrollToSection(aboutRef);
            }}>
                About
              </a>
              <a href="#features" className={`text-soft-white hover:text-aqua-500 transition-colors ${activeSection === 'features' ? 'text-aqua-500 font-medium' : ''}`} onClick={e => {
              e.preventDefault();
              scrollToSection(featuresRef);
            }}>
                Features
              </a>
              <a href="#pricing" className={`text-soft-white hover:text-aqua-500 transition-colors ${activeSection === 'pricing' ? 'text-aqua-500 font-medium' : ''}`} onClick={e => {
              e.preventDefault();
              scrollToSection(pricingRef);
            }}>
                Pricing
              </a>
              <a href="#contact" className={`text-soft-white hover:text-aqua-500 transition-colors ${activeSection === 'contact' ? 'text-aqua-500 font-medium' : ''}`} onClick={e => {
              e.preventDefault();
              scrollToSection(contactRef);
            }}>
                Contact
              </a>
              <Link to="/login" className="px-4 py-2 border border-aqua-500 text-aqua-500 rounded-full hover:bg-aqua-500/10 hover:shadow-glow transition-all">
                Dive In
              </Link>
              <Link to="/signup" className="px-5 py-2 bg-gradient-accent rounded-full text-white flex items-center hover:shadow-glow-lg transition-all">
                Explore the Ocean
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </nav>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <motion.div initial={false} animate={{
      height: mobileMenuOpen ? 'auto' : 0,
      opacity: mobileMenuOpen ? 1 : 0
    }} transition={{
      duration: 0.3,
      ease: 'easeInOut'
    }} className="fixed top-20 left-0 right-0 z-40 md:hidden overflow-hidden bg-ocean-navy/95 backdrop-blur-md border-b border-aqua-500/20">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-4">
            <a href="#about" className={`text-soft-white hover:text-aqua-500 transition-colors py-2 px-4 rounded-lg hover:bg-white/5 ${activeSection === 'about' ? 'text-aqua-500 bg-white/5 font-medium' : ''}`} onClick={e => {
            e.preventDefault();
            scrollToSection(aboutRef);
          }}>
              About
            </a>
            <a href="#features" className={`text-soft-white hover:text-aqua-500 transition-colors py-2 px-4 rounded-lg hover:bg-white/5 ${activeSection === 'features' ? 'text-aqua-500 bg-white/5 font-medium' : ''}`} onClick={e => {
            e.preventDefault();
            scrollToSection(featuresRef);
          }}>
              Features
            </a>
            <a href="#pricing" className={`text-soft-white hover:text-aqua-500 transition-colors py-2 px-4 rounded-lg hover:bg-white/5 ${activeSection === 'pricing' ? 'text-aqua-500 bg-white/5 font-medium' : ''}`} onClick={e => {
            e.preventDefault();
            scrollToSection(pricingRef);
          }}>
              Pricing
            </a>
            <a href="#contact" className={`text-soft-white hover:text-aqua-500 transition-colors py-2 px-4 rounded-lg hover:bg-white/5 ${activeSection === 'contact' ? 'text-aqua-500 bg-white/5 font-medium' : ''}`} onClick={e => {
            e.preventDefault();
            scrollToSection(contactRef);
          }}>
              Contact
            </a>
            <Link to="/login" className="px-4 py-2 border border-aqua-500 text-aqua-500 rounded-full hover:bg-aqua-500/10 hover:shadow-glow transition-all text-center" onClick={() => setMobileMenuOpen(false)}>
              Dive In
            </Link>
            <Link to="/signup" className="px-5 py-2 bg-gradient-accent rounded-full text-white flex items-center justify-center hover:shadow-glow-lg transition-all" onClick={() => setMobileMenuOpen(false)}>
              Explore the Ocean
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </nav>
        </div>
      </motion.div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative" ref={heroRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column */}
            <motion.div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0" initial={{
            opacity: 0,
            y: 20
          }} animate={controls}>
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-accent text-white text-xs font-medium mb-6 shadow-glow-sm">
                NEXT-GEN OCEAN TECHNOLOGY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                The Future of <br />
                <span className="gradient-text">Smart Fishing</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Dive into the future of sustainable fisheries with AquaSure — a
                next-generation platform that empowers fisherfolk through
                real-time monitoring, weather alerts, smart insurance, and
                AI-powered insights.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/login">
                  <motion.button className="px-8 py-3 bg-gradient-accent rounded-full text-white font-medium text-lg shadow-glow hover:shadow-glow-lg transition-all ripple" whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.98
                }}>
                    Get Started
                  </motion.button>
                </Link>
                <Link to="/data-marketplace">
                  <motion.button className="px-8 py-3 bg-ocean-teal/20 backdrop-blur-md border-2 border-ocean-teal rounded-full text-white font-medium text-lg hover:bg-ocean-teal/30 hover:shadow-glow transition-all" whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.98
                }}>
                    Explore Marine Data
                  </motion.button>
                </Link>
              </div>
              <div className="space-y-4">
                <h3 className="text-aqua-400 font-medium">Platform Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow mr-3">
                      <CloudLightningIcon className="h-4 w-4 text-white" />
                    </div>
                    <span>Real-time weather alerts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow mr-3">
                      <ShieldCheckIcon className="h-4 w-4 text-white" />
                    </div>
                    <span>Smart insurance hub</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow mr-3">
                      <UsersIcon className="h-4 w-4 text-white" />
                    </div>
                    <span>Ocean community insights</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gradient-accent flex items-center justify-center shadow-glow mr-3">
                      <WifiIcon className="h-4 w-4 text-white" />
                    </div>
                    <span>Satellite connectivity</span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Right Column */}
            <motion.div className="w-full lg:w-1/2 relative" initial={{
            opacity: 0,
            y: 30
          }} animate={controls} transition={{
            delay: 0.3
          }}>
              <div className="relative">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-radial from-aqua-500/20 to-transparent rounded-xl"></div>
                {/* Dashboard frame */}
                <div className="relative bg-ocean-navy/50 border border-aqua-500/30 backdrop-blur-md rounded-xl overflow-hidden shadow-glow p-5">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent"></div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-aqua-500 mr-2 animate-pulse"></div>
                      <span className="text-xs text-aqua-500">LIVE</span>
                    </div>
                  </div>
                  {/* Ocean map visualization */}
                  <div className="relative h-64 bg-ocean-navy/80 rounded-lg mb-4 overflow-hidden">
                    <div className="absolute inset-0 opacity-70">
                      <img src="https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Ocean Satellite Map" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ocean-navy/90"></div>
                    {/* Map markers */}
                    <div className="absolute top-1/4 left-1/3">
                      <div className="h-3 w-3 rounded-full bg-aqua-500 animate-ping"></div>
                    </div>
                    <div className="absolute top-1/2 right-1/4">
                      <div className="h-3 w-3 rounded-full bg-aqua-500 animate-ping"></div>
                    </div>
                    <div className="absolute bottom-1/3 left-1/2">
                      <div className="h-3 w-3 rounded-full bg-aqua-500 animate-ping"></div>
                    </div>
                    {/* Wave overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-24">
                      <div className="wave-animation h-full"></div>
                      <div className="wave-animation-reverse h-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-ocean-navy/80 backdrop-blur-md p-2 rounded-md border border-aqua-500/30">
                      <div className="text-xs text-aqua-300">Location</div>
                      <div className="text-sm font-medium">South Pacific</div>
                    </div>
                  </div>
                  {/* Data metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-ocean-navy/50 backdrop-blur-md border border-aqua-500/20 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <ThermometerIcon className="h-4 w-4 text-aqua-500 mr-2" />
                        <span className="text-xs text-gray-300">
                          Temperature
                        </span>
                      </div>
                      <div className="text-lg font-medium">26.4°C</div>
                      <div className="text-xs text-green-400">
                        +1.2° from avg
                      </div>
                    </div>
                    <div className="bg-ocean-navy/50 backdrop-blur-md border border-aqua-500/20 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <WavesIcon className="h-4 w-4 text-aqua-500 mr-2" />
                        <span className="text-xs text-gray-300">
                          Wave Height
                        </span>
                      </div>
                      <div className="text-lg font-medium">1.8m</div>
                      <div className="text-xs text-yellow-400">Moderate</div>
                    </div>
                    <div className="bg-ocean-navy/50 backdrop-blur-md border border-aqua-500/20 p-3 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FishIcon className="h-4 w-4 text-aqua-500 mr-2" />
                        <span className="text-xs text-gray-300">
                          Fish Density
                        </span>
                      </div>
                      <div className="text-lg font-medium">High</div>
                      <div className="text-xs text-green-400">
                        Optimal fishing
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 h-20 w-20 bg-aqua-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-ocean-aqua rounded-full filter blur-3xl opacity-20 animate-pulse-slow" style={{
                animationDelay: '1s'
              }}></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Scroll indicator */}
        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center" animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <ChevronDownIcon className="h-6 w-6 text-aqua-500" />
        </motion.div>
      </section>
      {/* About Carousel Section */}
      <section ref={aboutRef} id="about" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="gradient-text">AquaSure</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our mission is to revolutionize the fishing industry through
              cutting-edge technology, sustainable practices, and community
              empowerment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-6 hover:shadow-glow transition-all">
              <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6 mx-auto shadow-glow">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Smart Location Tracking
              </h3>
              <p className="text-gray-300 text-center">
                AquaSure provides real-time GPS tracking to ensure safety at sea
                and optimize fishing routes based on historical data.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-6 hover:shadow-glow transition-all">
              <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6 mx-auto shadow-glow">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Gamified Insurance
              </h3>
              <p className="text-gray-300 text-center">
                Our innovative pet fish system makes insurance engaging and
                rewarding, providing essential coverage for fisherfolk.
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-6 hover:shadow-glow transition-all">
              <div className="h-16 w-16 bg-gradient-accent rounded-full flex items-center justify-center mb-6 mx-auto shadow-glow">
                <BrainIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                AI-Powered Insights
              </h3>
              <p className="text-gray-300 text-center">
                Nemo AI provides personalized recommendations, weather
                forecasts, and fishing insights to maximize catch and safety.
              </p>
            </motion.div>
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="mt-16 text-center">
            <a href="#features" onClick={e => {
            e.preventDefault();
            scrollToSection(featuresRef);
          }} className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all">
              Explore Features
              <ChevronDownIcon className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-aqua-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-ocean-teal rounded-full filter blur-3xl opacity-10 -z-10"></div>
      </section>
      {/* Features Carousel Section */}
      <section ref={featuresRef} id="features" className="py-20 relative bg-ocean-deep/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how AquaSure is transforming the fishing industry with
              innovative technology designed for the modern fisher.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Feature 1 */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-xl rounded-full"></div>
                  <div className="relative bg-ocean-navy/60 border border-aqua-500/30 backdrop-blur-md rounded-xl overflow-hidden p-4 aspect-square flex items-center justify-center">
                    <AlertTriangleIcon className="h-16 w-16 text-aqua-500" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Emergency SOS</h3>
                <p className="text-gray-300 mb-4">
                  One-touch emergency alert system that sends your exact
                  location to nearby vessels and coast guard services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    GPS Tracking
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Emergency Response
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    24/7 Support
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Feature 2 */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-xl rounded-full"></div>
                  <div className="relative bg-ocean-navy/60 border border-aqua-500/30 backdrop-blur-md rounded-xl overflow-hidden p-4 aspect-square flex items-center justify-center">
                    <CloudLightningIcon className="h-16 w-16 text-aqua-500" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Weather Alerts</h3>
                <p className="text-gray-300 mb-4">
                  Real-time weather forecasting with storm warnings and sea
                  condition updates specific to your location.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Storm Tracking
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Sea Conditions
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Satellite Data
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Feature 3 */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-xl rounded-full"></div>
                  <div className="relative bg-ocean-navy/60 border border-aqua-500/30 backdrop-blur-md rounded-xl overflow-hidden p-4 aspect-square flex items-center justify-center">
                    <FishIcon className="h-16 w-16 text-aqua-500" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Fish Hub</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive database of fish species with identification
                  guides, seasonal information, and market prices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Species Database
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Market Prices
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Fishing Guides
                  </span>
                </div>
              </div>
            </motion.div>
            {/* Feature 4 */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-xl rounded-full"></div>
                  <div className="relative bg-ocean-navy/60 border border-aqua-500/30 backdrop-blur-md rounded-xl overflow-hidden p-4 aspect-square flex items-center justify-center">
                    <UsersIcon className="h-16 w-16 text-aqua-500" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-2">Community</h3>
                <p className="text-gray-300 mb-4">
                  Connect with other fishers to share insights, experiences, and
                  support through our dedicated community platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Chat Groups
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Knowledge Sharing
                  </span>
                  <span className="px-3 py-1 bg-aqua-500/20 text-aqua-300 rounded-full text-xs">
                    Local Events
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="mt-16 text-center">
            <a href="#pricing" onClick={e => {
            e.preventDefault();
            scrollToSection(pricingRef);
          }} className="inline-flex items-center px-6 py-3 bg-gradient-accent rounded-full text-white font-medium shadow-glow hover:shadow-glow-lg transition-all">
              View Pricing
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
        {/* Wave effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div className="wave-animation h-full opacity-30"></div>
          <div className="wave-animation-reverse h-full opacity-20"></div>
        </div>
      </section>
      {/* Pricing Carousel Section */}
      <section ref={pricingRef} id="pricing" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              AquaBites <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Fuel your pet fish's growth with AquaBites – the essential food
              that powers your insurance coverage.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pricing Card 1 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl overflow-hidden hover:shadow-glow transition-all">
              <div className="h-2 bg-aqua-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Starter Pack</h3>
                <div className="flex items-center mb-4">
                  <CoinsIcon className="h-6 w-6 text-aqua-500 mr-2" />
                  <span className="text-3xl font-bold">100</span>
                  <span className="text-gray-300 ml-2">AquaBites</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">
                  Perfect for new fishers getting started with AquaSure.
                </p>
                <div className="text-2xl font-bold mb-6">₱500</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Basic insurance coverage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Feed pet fish for 10 days</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">1-2 level-ups</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-aqua-500/30 rounded-md text-white font-medium hover:bg-aqua-500/20 transition-all">
                  Purchase
                </button>
              </div>
            </motion.div>
            {/* Pricing Card 2 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl overflow-hidden hover:shadow-glow transition-all">
              <div className="h-2 bg-aqua-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium Pack</h3>
                <div className="flex items-center mb-4">
                  <CoinsIcon className="h-6 w-6 text-aqua-500 mr-2" />
                  <span className="text-3xl font-bold">250</span>
                  <span className="text-gray-300 ml-2">AquaBites</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">
                  Great value for regular fishers with 10% savings.
                </p>
                <div className="text-2xl font-bold mb-6">
                  ₱1,000{' '}
                  <span className="text-sm text-gray-400 line-through">
                    ₱1,110
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Enhanced insurance coverage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Feed pet fish for 25 days</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">3-4 level-ups</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-aqua-500/30 rounded-md text-white font-medium hover:bg-aqua-500/20 transition-all">
                  Purchase
                </button>
              </div>
            </motion.div>
            {/* Pricing Card 3 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl overflow-hidden hover:shadow-glow transition-all relative">
              {/* Popular badge */}
              <div className="absolute top-0 right-0 mt-4 mr-4 bg-gradient-accent px-3 py-1 rounded-full text-white text-xs font-medium">
                Most Popular
              </div>
              <div className="h-2 bg-gradient-accent"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Pro Pack</h3>
                <div className="flex items-center mb-4">
                  <CoinsIcon className="h-6 w-6 text-aqua-500 mr-2" />
                  <span className="text-3xl font-bold">500</span>
                  <span className="text-gray-300 ml-2">AquaBites</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">
                  Best value with 15% savings for dedicated fishers.
                </p>
                <div className="text-2xl font-bold mb-6">
                  ₱1,800{' '}
                  <span className="text-sm text-gray-400 line-through">
                    ₱2,120
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Premium insurance coverage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Feed pet fish for 50 days</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">5-7 level-ups</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 bg-gradient-accent rounded-md text-white font-medium hover:shadow-glow transition-all">
                  Purchase
                </button>
              </div>
            </motion.div>
            {/* Pricing Card 4 */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl overflow-hidden hover:shadow-glow transition-all">
              <div className="h-2 bg-aqua-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ultimate Pack</h3>
                <div className="flex items-center mb-4">
                  <CoinsIcon className="h-6 w-6 text-aqua-500 mr-2" />
                  <span className="text-3xl font-bold">1000</span>
                  <span className="text-gray-300 ml-2">AquaBites</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm">
                  Maximum value with 25% savings for professional fishers.
                </p>
                <div className="text-2xl font-bold mb-6">
                  ₱3,000{' '}
                  <span className="text-sm text-gray-400 line-through">
                    ₱4,000
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Maximum insurance coverage</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Feed pet fish for 100 days</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-aqua-500/20 flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-aqua-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">10+ level-ups</span>
                  </li>
                </ul>
                <button className="w-full px-4 py-2 bg-white/10 backdrop-blur-md border border-aqua-500/30 rounded-md text-white font-medium hover:bg-aqua-500/20 transition-all">
                  Purchase
                </button>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} viewport={{
          once: true
        }} className="mt-16 text-center">
            <a href="#contact" onClick={e => {
            e.preventDefault();
            scrollToSection(contactRef);
          }} className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all">
              Contact Us
              <ChevronDownIcon className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-aqua-500 rounded-full filter blur-3xl opacity-10 -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-ocean-teal rounded-full filter blur-3xl opacity-10 -z-10"></div>
      </section>
      {/* Contact Carousel Section */}
      <section ref={contactRef} id="contact" className="py-20 relative bg-ocean-deep/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Have questions or need support? We're here to help you navigate
              the waters of AquaSure.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }} className="bg-ocean-navy/40 backdrop-blur-md border border-aqua-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" id="name" className="block w-full pl-10 pr-3 py-3 border border-aqua-500/30 rounded-lg bg-ocean-navy/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 focus:border-transparent transition-all" placeholder="Your name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MailIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="email" id="email" className="block w-full pl-10 pr-3 py-3 border border-aqua-500/30 rounded-lg bg-ocean-navy/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 focus:border-transparent transition-all" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                      <MessageSquareIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea id="message" rows={5} className="block w-full pl-10 pr-3 py-3 border border-aqua-500/30 rounded-lg bg-ocean-navy/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua-500/50 focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full px-6 py-3 bg-gradient-accent rounded-lg text-white font-medium hover:shadow-glow transition-all flex items-center justify-center">
                    Send Message
                    <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
            {/* Contact Information */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-aqua-500/20 flex items-center justify-center mr-4">
                      <MapPinIcon className="h-5 w-5 text-aqua-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Our Location</h4>
                      <p className="text-gray-300 mt-1">
                        123 Ocean Drive, Manila Bay
                        <br />
                        Philippines, 1000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-aqua-500/20 flex items-center justify-center mr-4">
                      <PhoneIcon className="h-5 w-5 text-aqua-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Phone Number</h4>
                      <p className="text-gray-300 mt-1">+63 (2) 8123 4567</p>
                      <p className="text-gray-400 text-sm">
                        Mon-Fri from 8am to 5pm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-aqua-500/20 flex items-center justify-center mr-4">
                      <MailIcon className="h-5 w-5 text-aqua-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email Address</h4>
                      <p className="text-gray-300 mt-1">support@aquasure.ph</p>
                      <p className="text-gray-400 text-sm">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-12 w-12 rounded-full bg-ocean-navy/80 border border-aqua-500/30 flex items-center justify-center text-aqua-500 hover:bg-aqua-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                  <a href="#" className="h-12 w-12 rounded-full bg-ocean-navy/80 border border-aqua-500/30 flex items-center justify-center text-aqua-500 hover:bg-aqua-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                  <a href="#" className="h-12 w-12 rounded-full bg-ocean-navy/80 border border-aqua-500/30 flex items-center justify-center text-aqua-500 hover:bg-aqua-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a href="#" className="h-12 w-12 rounded-full bg-ocean-navy/80 border border-aqua-500/30 flex items-center justify-center text-aqua-500 hover:bg-aqua-500/20 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Wave effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div className="wave-animation h-full opacity-30"></div>
          <div className="wave-animation-reverse h-full opacity-20"></div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-10 mt-20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="/AQUA.png" alt="AquaSure Logo" className="h-10 w-10 mr-3" />
              <span className="text-xl font-bold text-white">AquaSure</span>
            </div>
            <div className="flex space-x-8 mb-6 md:mb-0">
              <a href="#about" className="text-gray-300 hover:text-aqua-500 transition-colors" onClick={e => {
              e.preventDefault();
              scrollToSection(aboutRef);
            }}>
                About
              </a>
              <a href="#features" className="text-gray-300 hover:text-aqua-500 transition-colors" onClick={e => {
              e.preventDefault();
              scrollToSection(featuresRef);
            }}>
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-aqua-500 transition-colors" onClick={e => {
              e.preventDefault();
              scrollToSection(pricingRef);
            }}>
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:text-aqua-500 transition-colors" onClick={e => {
              e.preventDefault();
              scrollToSection(contactRef);
            }}>
                Contact
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-ocean-navy/80 border border-aqua-500/30 flex items-center justify-center text-aqua-500 hover:bg-aqua-500/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-ocean-navy/80 border border-aqua-500/30 flex items-center justify-center text-aqua-500 hover:bg-aqua-500/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-ocean-navy/80 border border-aqua-500/30 flex items-center justify-center text-aqua-500 hover:bg-aqua-500/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} AquaSure. All rights reserved.</p>
          </div>
        </div>
        {/* Bottom wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <div className="wave-animation h-full opacity-30"></div>
          <div className="wave-animation-reverse h-full opacity-20"></div>
        </div>
      </footer>
    </div>;
}