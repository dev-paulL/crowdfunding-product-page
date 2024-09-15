import AboutProjectSection from "./components/AboutProjectSection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MasterCraftSection from "./components/MasterCraftSection";
import ProjectStatsSection from "./components/ProjectStatsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MasterCraftSection />
        <ProjectStatsSection />
        <AboutProjectSection />
      </main>
    </>
  );
}

export default App;
