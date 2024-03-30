import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div className="font-primary bg-gray-50 w-full h-full">
      <Header />
      <main className="h-full w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
