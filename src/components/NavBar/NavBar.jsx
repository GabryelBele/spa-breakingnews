import logo from "../../images/Logo.png";
import "./NavBar.css"

export default function NavBar() {
  const logobn = logo;

  return (
    <>
      <nav>
        <div className="input-search-space">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título"/>
        </div>
        <img src={logobn} alt="Logo" />

        <button>Entrar</button>
      </nav>
    </>
  );
}
