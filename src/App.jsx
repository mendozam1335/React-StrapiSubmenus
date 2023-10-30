import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Submenu from "./Components/Submenu";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
