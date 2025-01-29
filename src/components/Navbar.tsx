"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "@/config/contract";
import { Search, User } from "lucide-react";
import UsernameRegistrationModal from "./UsernameRegistrationModal";
import { Menu, X, Rocket, Droplets } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  // Fetch user profile from contract
  const fetchUserProfile = async (signer: ethers.Signer) => {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    const profile = await contract.getUserProfile(await signer.getAddress());
    return profile;
  };

  // Check if wallet is connected
  const checkConnection = async () => {
    if (!window.ethereum) return;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        const signer = provider.getSigner();
        const userAddress = accounts[0];
        setAddress(userAddress);
        setIsConnected(true);

        const profile = await fetchUserProfile(signer);
        profile.username ? setUsername(profile.username) : setShowModal(true);
      }
    } catch (error) {
      console.error("Error checking wallet connection:", error);
    }
  };

  // Connect wallet to MetaMask
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
      return;
    }

    try {
      // Request access to MetaMask accounts
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      setAddress(userAddress);
      setIsConnected(true);

      const profile = await fetchUserProfile(signer);
      profile.username ? setUsername(profile.username) : setShowModal(true);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Failed to connect wallet. Please try again.");
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-purple-500/20 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              Festivo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition">
              Dashboard
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-purple-400 transition">
              Docs
            </Link>
            <Link href="/create-event" className="text-gray-300 hover:text-purple-400 transition">
              Create Event
            </Link>
            <Link href="/events" className="text-gray-300 hover:text-purple-400 transition">
              Explore Events
            </Link>

            {/* Wallet Button */}
            <button
              onClick={connectWallet}
              className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition"
            >
              <Droplets className="h-4 w-4" />
              <span>{isConnected ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-purple-400 transition">
                Dashboard
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-purple-400 transition">
                Docs
              </Link>
              <Link href="/create-event" className="text-gray-300 hover:text-purple-400 transition">
                Create Event
              </Link>
              <Link href="/events" className="text-gray-300 hover:text-purple-400 transition">
                Explore Events
              </Link>

              {/* Mobile Wallet Button */}
              <button
                onClick={connectWallet}
                className="flex items-center space-x-1 text-gray-300 hover:text-purple-400 transition"
              >
                <Droplets className="h-4 w-4" />
                <span>{isConnected ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : "Connect Wallet"}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
