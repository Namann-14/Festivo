import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from 'framer-motion';


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

export function HeroSection() {
  return (
    <BackgroundLines className="flex items-center justify-center flex-col px-4">
      <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-4xl lg:text-8xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Welcome to Festivo
      </h1>
      <p className="max-w-xl mx-auto text-sm md:text-lg from-neutral-600 to-white text-center">
        Experience the future of event ticketing with blockchain technology.
        Secure, transparent, and seamless.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-16 mt-10">
        <Link
          href="/events"
          className="gradient-button group px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center"
        >
          Explore Events
          <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/create-event"
          className="gradient-button group px-8 py-3 rounded-full text-lg font-semibold flex items-center justify-center"
        >
          Create Event
        </Link>
      </div>
      <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
    </motion.div>
    </BackgroundLines>
  );
}
