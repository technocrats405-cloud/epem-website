import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// import your pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Counseling from "./Pages/Counseling";
import New from "./Pages/New";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Members from "./Pages/Members";
import Testy from "./Pages/Testy";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* pushes content below fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default Home */}
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Counseling" element={<Counseling />} />
          <Route path="/New" element={<New />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/members" element={<Members />} />
          <Route path="/Testy" element={<Testy />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
