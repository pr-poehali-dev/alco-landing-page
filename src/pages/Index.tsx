import { useState } from "react";
import AgeVerification from "@/components/AgeVerification";
import Hero from "@/components/Hero";
import ServiceInfo from "@/components/ServiceInfo";
import Footer from "@/components/Footer";

const Index = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const handleAgeVerified = () => {
    setIsAgeVerified(true);
  };

  return (
    <div className="min-h-screen">
      {!isAgeVerified && <AgeVerification onVerified={handleAgeVerified} />}
      <Hero />
      <ServiceInfo />
      <Footer />
    </div>
  );
};

export default Index;
