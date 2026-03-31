import { useState, useCallback } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import IntroLoader from "./components/IntroLoader";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/Homepage";
import TrainingList from "./pages/TrainingList";
import TrainingDetail from "./pages/TrainingDetail";
import About from "./pages/About";
import AboutManagement from "./pages/AboutManagement";
import AboutExperts from "./pages/AboutExperts";
import Portfolio from "./pages/Portfolio";
import Consultancies from "./pages/Consultancies";
import OtherServices from "./pages/OtherServices";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showLoader && <IntroLoader onComplete={handleLoaderComplete} />}
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/management" element={<AboutManagement />} />
              <Route path="/about/experts" element={<AboutExperts />} />
              <Route path="/services/training" element={<TrainingList />} />
              <Route path="/services/training/:id" element={<TrainingDetail />} />
              <Route path="/services/consultancies" element={<Consultancies />} />
              <Route path="/services/consultancies/:id" element={<TrainingDetail />} />
              <Route path="/services/other" element={<OtherServices />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
