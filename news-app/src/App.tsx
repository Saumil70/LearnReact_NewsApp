import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<News pageSize={22} category="General" />} />
        <Route
          path="/general"
          element={<News pageSize={22} category="General" key="General" />}
        />
        <Route
          path="/business"
          element={<News pageSize={22} category="Business" key="Business" />}
        />
        <Route
          path="/entertainment"
          element={
            <News pageSize={22} category="Entertainment" key="Entertainment" />
          }
        />
        <Route
          path="/health"
          element={<News pageSize={22} category="Health" key="Health" />}
        />
        <Route
          path="/science"
          element={<News pageSize={22} category="Science" key="Science" />}
        />
        <Route
          path="/technology"
          element={
            <News pageSize={22} category="Technology" key="Technology" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
