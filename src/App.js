import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Navbar from "./components/NavBar"; // Importez le composant Navbar
import { Container } from "react-bootstrap"; // Ajout de Container pour centrer le contenu

const App = () => {
  return (
    <div>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
