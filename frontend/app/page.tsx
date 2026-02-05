import Link from "next/link";

import Header from'./components/Header';
import Hero from './components/Hero';
import FeatureCard1 from './components/FeatureCard1';
import FeatureCard2 from './components/FeatureCard2';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 text-gray-900">

      {/* Header */}

      <Header />


      {/* Hero */}
      <Hero />

      {/* How It Works */}
      <FeatureCard1 />


      {/* Capabilities */}
      <FeatureCard2/>
      

      {/* Footer */}
      <Footer/>
      

    </main>
  );
}
