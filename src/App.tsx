import Header from "./Header";
import Footer from "./Footer";
import Button from "./Button";

function App() {
  return (
    <>
      <div className="app-container">
        <div>
          <Header />
        </div>
        <div>
          <Button />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
