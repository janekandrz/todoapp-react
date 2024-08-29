import Header from "./Header";
import Footer from "./Footer";
import List from "./List"

function App() {
  return (
    <>
      <div className="app-container">
        <div><Header /></div>
        <div><List /></div>
        <div><Footer /></div>
      </div>
    </>
  )
}

export default App;