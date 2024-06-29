import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="container-content content">
          <h2 className="header">404</h2>
          <h4>Sorry! page not found</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos inventore, libero ex, id reprehenderit et ab aliquid repellendus quia facilis suscipit consectetur adipisci esse optio eligendi dignissimos. Eos, officia nostrum!</p>
          <div className="btns">
            <NavLink to='/'>return home</NavLink>
            <NavLink to='/contact'>report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
