import Sidebar from "./components/Sidebar";
import Headers from "./components/Headers";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="whole-page">
        <Sidebar />
        <div className="main-container">
          <div className="main-image"></div>
          <Headers />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
