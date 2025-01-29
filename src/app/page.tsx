'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { FeatureSection } from '@/components/FeatureSection';
import { Working } from '@/components/Working';
import { GetStarted } from '@/components/GetStarted';
import { 
  Ticket, 
  Calendar, 
  Shield, 
  Users, 
  Zap, 
  Globe,
  ChevronRight,
  Clock,
  Wallet,
  CheckCircle2
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const stats = [
  { label: 'Active Events', value: '100+' },
  { label: 'Tickets Sold', value: '10k+' },
  { label: 'Users', value: '5000+' },
  { label: 'Countries', value: '30+' },
];

const howItWorks = [
  {
    icon: <Wallet className="text-purple-400" size={24} />,
    title: 'Connect Wallet',
    description: 'Link your Web3 wallet to get started'
  },
  {
    icon: <Calendar className="text-purple-400" size={24} />,
    title: 'Choose Event',
    description: 'Browse and select from various events'
  },
  {
    icon: <Ticket className="text-purple-400" size={24} />,
    title: 'Buy Tickets',
    description: 'Purchase tickets securely with crypto'
  },
  {
    icon: <CheckCircle2 className="text-purple-400" size={24} />,
    title: 'Attend Event',
    description: 'Show your NFT ticket at the venue'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />
      <motion.section
        className="px-4 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature 
            icon={<Shield size={40} />}
            title="Secure Ticketing"
            description="NFT-based tickets ensure authenticity and prevent fraud. Each ticket is unique and verifiable on the blockchain."
          />
          <Feature 
            icon={<Zap size={40} />}
            title="Instant Transfers"
            description="Seamlessly transfer or resell tickets with smart contract technology. No more complicated paperwork or trust issues."
          />
          <Feature 
            icon={<Globe size={40} />}
            title="Global Access"
            description="Join events from anywhere in the world. Our platform connects event organizers with a global audience."
          />
          <Feature 
            icon={<Users size={40} />}
            title="Community Driven"
            description="Be part of a vibrant community of event organizers and attendees. Share experiences and grow together."
          />
          <Feature 
            icon={<Calendar size={40} />}
            title="Easy Management"
            description="Create and manage events effortlessly. Our intuitive interface makes event organization a breeze."
          />
          <Feature 
            icon={<Clock size={40} />}
            title="Real-Time Updates"
            description="Get instant notifications about event changes, ticket sales, and more. Stay informed and never miss an update."
          />
        </div>
      </motion.section>


      {/* How It Works Section */}
      <motion.section
        className="py-36 px-4 bg-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <Working />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-900/50 border border-purple-500/50 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Get started section  */}
      <GetStarted />
    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div 
    className="flex flex-col items-center text-center"
    variants={itemVariants}
  >
    <div className="mb-4 text-purple-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);