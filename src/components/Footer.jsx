import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <NavLink to="/" className="nav-link px-2 text-body-secondary">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/nosotros"
                className="nav-link px-2 text-body-secondary"
              >
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contacto"
                className="nav-link px-2 text-body-secondary"
              >
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Blog" className="nav-link px-2 text-body-secondary">
                Blog
              </NavLink>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
        </footer>
      </div>
    </>
  );
};
export default Footer;
