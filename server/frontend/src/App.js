// import LoginPanel from "./components/Login/Login"
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPanel />} />
//     </Routes>
//   );
// }
// export default App;
import LoginPanel from "./components/Login/Login";
import Register from "./components/Register/Register";  // Add this import
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />  {/* Added Register route */}
    </Routes>
  );
}

export default App;