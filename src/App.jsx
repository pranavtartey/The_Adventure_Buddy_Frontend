import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1>Hi</h1>
    </>
  );
}

export default App;
