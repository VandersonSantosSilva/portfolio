import {IoLogoWhatsapp} from "react-icons/io"
import {BsTelegram, BsLinkedin} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import Styles from "../Componets.modules.css/Contacts.module.css"
import { useSelector, useDispatch } from "react-redux";

function Contatos(){

  const menu = useSelector((state) => state.menu);  
  const night = useSelector((state) => state.night)
  const dispatch = useDispatch()
  const contacts = [
        {
            Nome: "WhatsApp",
            Link: "https://wa.me/5582996003781",
            ico: <IoLogoWhatsapp />,
            classIco: "Whats",
            description: "Inicie uma conversa comigo diretamente do WhatsApp"
        },

        {
            Nome: "Telegram",
            Link: "https://t.me/VandersoonSantos",
            ico: <BsTelegram />,
            classIco: "Tel",
            description: "Inicie uma conversa comigo diretamente do Telegram"
        },

        {
          Nome: "Instagram",
          Link: "https://www.instagram.com/vandersoon.santoos/",
          ico: <FaInstagramSquare />,
          classIco: "Insta",
          description: "Me conheça e a me acompanhe um pouco mais através do instagram"
        },

        {
          Nome: "Linkdin",
          Link: "https://www.linkedin.com/in/vanderson-santos-silva/",
          ico: <BsLinkedin />,
          classIco: "Link",
          description: "Atraves da maior rede social profissional do mundo você também pode me encontrar"
        },

    ]

    const contatos = contacts.map((contact, index) => {

          function toggleMenu() {
            dispatch({
              type: "MENU",
              payload: !menu,
            });
          }

        return (
          <div onClick={menu ? toggleMenu : undefined} className={Styles.Container}>
            <li key={index} className={!night ? Styles.ContainerList : Styles.Dark}>
              <a href={contact.Link} target="_blank" rel="external">
                  <h2>{contact.Nome}</h2>
                  <i className={Styles.ico}>{contact.ico}</i>
                  <p>{contact.description}</p>
              </a>

            </li>
          </div>
        );
      });
    
      return <div><ul className={Styles.ul}>{contatos}</ul>;</div>
    }
    
    export default Contatos;