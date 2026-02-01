import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Sprout,
  Building2,
  ArrowRight,
  Target,
  Globe,
  TrendingUp,
  ShieldCheck,
  Award,
  ChevronDown,
} from 'lucide-react'
import Brands from '../components/Brands'
import PostPage from '../components/PostPage'

/* -------------------- Animated Element -------------------- */

const AnimatedElement = ({
  children,
  className = '',
  delay = 0,
  animation = 'fade-up',
}) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('is-visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    'fade-in': 'opacity-0 transition-opacity duration-1000',
    'slide-in-right': 'opacity-0 translate-x-10 transition-all duration-1000',
    'scale-up': 'opacity-0 scale-95 transition-all duration-1000',
    'fade-up': 'opacity-0 translate-y-8 transition-all duration-1000',
  }[animation]

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
      {children}
    </div>
  )
}

/* -------------------- Parallax Image -------------------- */

const ParallaxImage = ({ src, alt, className = '', speed = 0.3 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const progress =
        (window.innerHeight - rect.top) /
        (window.innerHeight + rect.height)

      if (progress >= 0 && progress <= 1) {
        ref.current.style.setProperty(
          '--y',
          `${(progress - 0.5) * 100 * speed}px`
        )
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-[120%] -mt-[10%] object-cover"
        style={{ transform: 'translateY(var(--y,0))' }}
      />
    </div>
  )
}

/* -------------------- Home Page -------------------- */

export default function HomePage() {
  const divisions = [
    {
      id: 'education',
      title: 'Education',
      subtitle: 'Empowering Minds',
      description:
        'Shaping the future through world-class educational programs.',
      icon: GraduationCap,
      image:
        'https://static.wixstatic.com/media/a3674d_6bbf529ffb664ca79b2dc04136eb1565~mv2.png',
      link: '/education',
      stats: ['5+ Institutions', '10k+ Students', 'Global Partners'],
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      subtitle: 'Cultivating Sustainability',
      description:
        'Revolutionizing food security with sustainable farming.',
      icon: Sprout,
      image:
        'https://static.wixstatic.com/media/a3674d_04bf5c6cc53846a0aa82b40f4d5b8d23~mv2.png',
      link: '/agriculture',
      stats: ['1000+ Acres', 'Organic Certified', 'Smart Tech'],
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      subtitle: 'Building Legacies',
      description:
        'Creating premium residential and commercial infrastructure.',
      icon: Building2,
      image:
        'https://static.wixstatic.com/media/a3674d_86a0d83817fb42b7bcacbe736441d951~mv2.png',
      link: '/realestate',
      stats: ['2M+ Sq Ft', 'Premium Locations', 'Award Winning'],
    },
  ]

  const values = [
    {
      icon: Target,
      title: 'Mission',
      text: 'Deliver exceptional value with innovation.',
    },
    {
      icon: ShieldCheck,
      title: 'Integrity',
      text: 'Highest standards of governance & ethics.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      text: 'Sustainable expansion for communities.',
    },
    {
      icon: Globe,
      title: 'Impact',
      text: 'Positive social & environmental change.',
    },
  ]

  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen flex items-center">
        <ParallaxImage
          src="https://static.wixstatic.com/media/a3674d_c0632a10dfe54526a97d1eed04a5f738~mv2.png"
          alt="Hero"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />

        <div className="relative z-10 px-6 max-w-6xl">
          <AnimatedElement delay={200}>
            <h1 className="text-7xl md:text-9xl font-bold text-white">
              Diversified <br />
              <span className="italic font-light">Excellence.</span>
            </h1>
          </AnimatedElement>

          <AnimatedElement delay={400}>
            <p className="text-white/80 mt-6 max-w-xl">
              Education, Agriculture & Real Estate driven by innovation.
            </p>
          </AnimatedElement>

          <AnimatedElement delay={600}>
            <div className="mt-8 flex gap-6">
              <Link to="/aboutus">
                <button className="h-14 px-8 bg-white text-black">
                  Discover Our Vision
                </button>
              </Link>
              <Link to="/contactus">
                <button className="h-14 px-8 border border-white text-white">
                  Partner With Us
                </button>
              </Link>
            </div>
          </AnimatedElement>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown />
        </motion.div>
      </section>
       <section className="py-32 px-6 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10" />
        <div className="absolute top-20 left-20 w-64 h-64 border border-gray-100 rounded-full opacity-50" />
        
        <div className="max-w-[100rem] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <AnimatedElement animation="slide-in-right">
                <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-8">
                  The Margam <br />
                  <span className="text-blue-800 italic">Standard</span>
                </h2>
                <div className="w-24 h-1 bg-foreground mb-8" />
                <p className="text-gray-500 text-lg leading-relaxed">
                  We don't just operate businesses; we cultivate ecosystems. Our diversified portfolio is unified by a single thread: the relentless pursuit of quality.
                </p>
              </AnimatedElement>
            </div>

            {/* Right Column: Values Grid */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                {values.map((value, index) => (
                  <AnimatedElement key={index} delay={index * 100} className="group">
                    <div className="flex flex-col gap-4">
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gold-accent/10 transition-colors duration-500">
                        <value.icon className="w-8 h-8 text-foreground group-hover:text-gold-accent transition-colors duration-500" />
                      </div>
                      <h3 className="font-heading text-3xl text-foreground group-hover:translate-x-2 transition-transform duration-300">
                        {value.title}
                      </h3>
                      <div className="h-px w-full bg-gray-200 group-hover:bg-gold-accent/50 transition-colors duration-500" />
                      <p className="text-gray-600 leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DIVISIONS */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {divisions.map((d, i) => (
            <AnimatedElement key={d.id} delay={i * 150}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src={d.image} alt={d.title} className="rounded-2xl" />
                <div>
                  <d.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-5xl font-bold">{d.subtitle}</h3>
                  <p className="text-gray-600 mt-4">{d.description}</p>
                  <Link to={d.link}>
                    <button className="mt-6 flex items-center gap-2">
                      Explore {d.title}
                      <ArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </section>
      <Brands />
      <PostPage />
      {/* CALL TO ACTION */}

     <section className="relative py-32 px-6 overflow-hidden bg-foreground text-black">
        <div className="absolute inset-0 opacity-20">
           <img 
             src="https://static.wixstatic.com/media/a3674d_7d35e08f87d9465ca2ef41d84b9bda1d~mv2.png?originWidth=1600&originHeight=896"
             alt="Background Pattern"
             className="w-full h-full object-cover"
           />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedElement animation="scale-up">
            <div className="w-20 h-20 mx-auto bg-gold-accent/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-md border border-gold-accent/30">
              <Award className="w-10 h-10 text-gold-accent" />
            </div>
            <h2 className="font-heading text-5xl md:text-7xl mb-8">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-black mb-12 leading-relaxed">
              Whether you're looking for educational excellence, sustainable agricultural solutions, or premium real estate, Margam Group is your trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <button className="h-16 px-10 bg-blue-800 text-white hover:bg-blue-800 hover:text-white text-lg font-medium rounded-none transition-all duration-300 min-w-[200px]">
                  Get in Touch
                </button>
              </Link>
              <Link to="/aboutus">
                <button variant="outline" className="h-16 px-10 border-white/30 text-black hover:bg-blue-800 hover:text-foreground text-lg font-medium rounded-none transition-all duration-300 min-w-[200px] bg-transparent">
                  Learn More About Us
                </button>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
