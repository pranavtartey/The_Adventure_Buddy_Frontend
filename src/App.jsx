import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Suspense } from "react";
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
