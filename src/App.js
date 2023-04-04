import Sidebar from "./components/Sidebar"
import Headers from "./components/Headers"

function App() {
  return (
    <>
      <div className="whole-page">
        <Sidebar />
        <div className="main-container">
          <div className="main-image"></div>
          <Headers />
        </div>
      </div>
    </>
  );
}

export default App;
