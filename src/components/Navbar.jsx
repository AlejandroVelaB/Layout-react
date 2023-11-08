import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Eleventh navbar example"
      >
        <div className="container-fluid">
          <NavLink to="/" className="btn btn-outline-primary">
            Inicio
          </NavLink>
          <NavLink to="/nosotros" className="btn btn-outline-primary">
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className="btn btn-outline-primary">
            Contacto
          </NavLink>
          <NavLink to="/blog" className="btn btn-outline-primary">
            Blog
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
