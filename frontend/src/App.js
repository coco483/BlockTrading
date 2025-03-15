import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/Nav";
import Input from "./routes/Input";
import NextPage from "./routes/NextPage";


function App() {
  return (
    <>
    <Router>
      <h1>App</h1>
      <Nav/>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
