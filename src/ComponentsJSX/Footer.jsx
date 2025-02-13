import styles from "../Componets.modules.css/Footer.module.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"


function Footer(){
    const downloadFile = () => {
        const urlFile = "https://drive.google.com/uc?export=download&id=16Bwr1dNNhTi36d_b36itXoZyhgP776_q"
        const link = document.createElement("a")
        link.href = urlFile
        link.download = "cv-vandersonsantos.pdf"
        link.click()
    }

    const dispatch = useDispatch()

    const menu = useSelector((state) => state.menu);

      function toggleMenu() {
        dispatch({
          type: "MENU",
          payload: !menu,
        });
      }

    return (
      <div className={styles.footer} onClick={menu ? toggleMenu : undefined}>
        <Link to="./Projetos">
          <button className={styles.buttonDW}>Projetos</button>
        </Link>
        <button className={styles.buttonDW} onClick={downloadFile}>Download CV</button>
        <Link to="./Contatos">
          <button className={styles.buttonDW}>Contato</button>
        </Link>
        
        <div className={styles.divSpanFooter}>
          <span className={styles.containerFooter}>
            Transformando ideias em código e código em soluções
          </span>
          <span className={styles.containerFooter}>
            &copy; 2025 todos os direitos reservados | Vanderson Santos
          </span>
        </div>
      </div>
    );

}

export default Footer