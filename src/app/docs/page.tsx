import React from "react";
import { Book, Shield, Rocket, Coins } from "lucide-react";

const Docs = () => {
  return (
    <div className="max-w-4xl mx-auto my-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Festivo Documentation
        </h1>
        <p className="text-gray-400">Learn how to use the Festivo platform</p>
      </div>

      <div className="space-y-8">
        <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Rocket className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-semibold">Getting Started</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Festivo is a decentralized event ticketing platform built on the NeoX blockchain. Follow these steps to get started:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li>Connect your NeoX-compatible wallet to the Festivo platform</li>
              <li>Create your user profile with social media integration</li>
              <li>Explore upcoming events or create your own</li>
              <li>Buy event tickets using GAS tokens</li>
              <li>Attend events and manage your tickets directly through the platform</li>
            </ol>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-semibold">Security Features</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">
              Festivo ensures top-level security through the use of smart contracts and the robust NeoX blockchain:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>Smart contracts to guarantee ticket authenticity</li>
              <li>No intermediaries, making transactions more secure and efficient</li>
              <li>Enhanced security features to protect user data and funds</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Coins className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-semibold">Key Features</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li><strong>🎫 Decentralized Ticketing:</strong> Event tickets are minted as unique digital assets on the blockchain, ensuring authenticity and ease of transfer or resale.</li>
              <li><strong>🔒 Secure Transactions:</strong> Powered by the NeoX blockchain, Festivo uses smart contracts to eliminate intermediaries and protect user data.</li>
              <li><strong>👤 User Profiles:</strong> Build a customizable profile, track tickets, and attend events with social media integration.</li>
              <li><strong>📅 Event Management:</strong> Event organizers can create, sell, and manage events with real-time tracking of ticket sales and attendees.</li>
              <li><strong>💸 Instant Settlements:</strong> Funds from ticket sales are transferred immediately to event organizers, eliminating long payout delays.</li>
              <li><strong>🌐 NeoX Powered:</strong> With low transaction fees and fast confirmation times, Festivo leverages the speed and efficiency of the NeoX blockchain.</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Book className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-semibold">FAQ</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">How do I create an event?</h3>
              <p className="text-gray-300">
                Use the "Create Event" feature on the platform to fill in your event details, set ticket prices, and manage your attendees.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">How can I purchase tickets?</h3>
              <p className="text-gray-300">
                Simply connect your NeoX-compatible wallet, browse upcoming events, and buy tickets using GAS tokens.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">How do I transfer tickets?</h3>
              <p className="text-gray-300">
                You can transfer tickets directly to other users within the platform using the built-in ticket management system.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Rocket className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-semibold">Future Roadmap</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>Integration with additional blockchain networks for greater accessibility</li>
              <li>Launch of a loyalty program for frequent event-goers</li>
              <li>Advanced analytics tools for event organizers to track ticket sales and attendee behavior</li>
              <li>Development of a mobile app for easier ticket management and validation</li>
              <li>Strategic partnerships with major event venues and promoters to expand the platform's reach</li>
            </ul>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-md rounded-2xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Book className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-semibold">Instructions to Run Festivo</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300">Follow these steps to run the Festivo project locally:</p>
            <pre className="text-gray-300 bg-gray-800 p-4 rounded-lg">
              <code>
                git clone https://github.com/username/festivo.git
                <br />
                cd festivo
                <br />
                npm install
                <br />
                npm start
                <br />
                Open your browser and visit http://localhost:3000
              </code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Docs;
