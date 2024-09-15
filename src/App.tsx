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
      </main>
    </>
  );
}

export default App;
