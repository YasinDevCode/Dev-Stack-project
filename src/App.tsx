import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechnologySection from "./components/TechnologySection/TechnologySection";
import Footer from "./components/Footer/Footer";

import type { Technology } from "./types/technology";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const getTechnologies = async ()=>{
      try {
        const response = await fetch("/data/technologies.json");

        if (!response.ok){
          throw new Error("Technology data could not be loaded.");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error){
        console.error(error);
        toast.error("Failed to load technologies.");
      } finally{
        setLoading(false);
      }
    };

    getTechnologies();
  }, []);

  const handleAddToStack = (technology: Technology)=>{
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded){
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedStack((currentStack)=>[
      ...currentStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string)=>{
    const technology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (technology){
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = ()=>{
    if (selectedStack.length === 0){
      return;
    }

    setSelectedStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center gap-4">
            <span className="loading loading-spinner loading-lg text-pink-500" />

            <p className="text-sm text-gray-500">
              Loading technologies...
            </p>
          </div>
        ) : (
          <TechnologySection
            technologies={technologies}
            selectedStack={selectedStack}
            onAdd={handleAddToStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        )}
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;