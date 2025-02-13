import styles from "../Componets.modules.css/Navbar.module.css"
import { BsMenuUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const night = useSelector((state) => state.night);
  const menu = useSelector((state) => state.menu);
  const widthTela = useSelector((state) => state.widthTela)
  const closed = useSelector((state) => state.closed)
  const dispatch = useDispatch();

  function toggleMenu() {
    dispatch({
      type: "MENU",
      payload: !menu,
    });
  }

  return (
    <div className={widthTela && !closed ? styles.General : styles.hamburgueOC}>
      <button
        onClick={toggleMenu}
        className={night ? styles.buttonMenu2 : styles.buttonMenu}
      >
        <BsMenuUp />
      </button>

      <div
        className={`${menu && widthTela ? styles.ContainerTwo : styles.Container} ${
          night ? styles.darkNav : ""
        }`}
      >
        <ul className={styles.ulList}>
          <li key={0}>
            <Link to="/" className={styles.liList} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li key={2}>
            <Link to="/Projetos" className={styles.liList}  onClick={toggleMenu}>
              Todos os Projetos
            </Link>
          </li>
          <li key={3}>
            <Link to="/Contatos" className={styles.liList}  onClick={toggleMenu}>
              Contatos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;