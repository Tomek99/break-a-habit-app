import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      <Routes></Routes>
      <Footer />
    </>
  );
}

export default App;
