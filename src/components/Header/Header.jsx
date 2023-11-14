import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Index from "../../pages/index";
import "../Header/header.css";
import Registro from "../../pages/registro";
import NotificationList from "../../pages/notifications";
import Export from "../../pages/full";
import Filtered from "../../pages/filtered";
import IssueForm from "../Issueform/Issueform";

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="logo">
        <Link to="/home">
      <img src="/images/logo-ces.png" alt="Logo" style={{ maxWidth: "100%", maxHeight: "123px" }} />
      </Link>
        </div>
        <div className="options">
          <ul>
            <div>
              <Link to="/registro">Registrar profesional</Link>
            </div>
            <div>
              <Link to="/notifications">Enviar notificación</Link>
            </div>
            <div>
              <Link to="/export">Lista de notificaciones</Link>
            </div>
            <div>
              <Link to="/problemas">Reportar problema</Link>
            </div>

          </ul>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Index />} />
        <Route exact path="/registro" element={<Registro />} />
        <Route exact path="/notifications" element={<NotificationList />} />
        <Route exact path="/export" element={<Export />} />
        <Route exact path="/filtered" element={<Filtered />} />
        <Route exact path="/problemas" element={<IssueForm />} />
      </Routes>
    </Router>
  );
};

export default Header;
