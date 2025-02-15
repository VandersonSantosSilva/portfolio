import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from '../Componets.modules.css/Destaques.module.css'
import { Link } from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyAKp7JuUeKn1H6X5laKbNfmWOidIqHWMw0",
  authDomain: "projetos-portfolio-4dc44.firebaseapp.com",
  projectId: "projetos-portfolio-4dc44",
  storageBucket: "projetos-portfolio-4dc44.firebasestorage.app",
  messagingSenderId: "808984400804",
  appId: "1:808984400804:web:5f4e4806b2605b0f4a2731",
  measurementId: "G-5V2JSSVQND"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


function Projetos(){

    const widthTela = useSelector((state) => state.widthTela)
    const fechamento = useSelector((state) => state.closed)
    const [mouseStates, SetmouseStates] = useState(false)
    const [clickDados, setClickDados] = useState([])
    const dispatch = useDispatch()


    const handleMouseTrue = () =>{
      SetmouseStates(true)
    }

    const handleMouseFalse = () =>{
      SetmouseStates(false)
    }


    function ClickContainer(dados){
      setClickDados(dados)
      dispatch({
        type: "CLOSED",
        payload: true
      })
    }

    function Closed() {
      dispatch({
        type: "CLOSED",
        payload: false 
      });
    }

    const [dados, setDados] = useState([])
    async function getProjects() {

      try {
          const getItens = await getDocs(collection(db, "PROJECTS"));
          const itens = []
          getItens.forEach((doc)=>{
            itens.push(doc.data())
          })
          setDados(itens)
      } catch (error) {
        console.error("Erro ao enviar ao receber o arquivo", error)
      }
    }

    useEffect(()=>{
      getProjects()
    }, [])

  return(

    <div className={Styles.ContainerGeneral}>

        {dados.map((item, index) =>{
          return(

            <div key={index} className={Styles.ContainerDados} onClick={()=> ClickContainer(item)}>
              <div className={Styles.ContainerImagem}><img src={item.Imagee} alt="imagem" onMouseEnter={handleMouseTrue} onMouseLeave={handleMouseFalse}/></div>
              <h4 className={`${Styles.anime} ${mouseStates ? Styles.show : ''}`}>{item.Nome}</h4>
              <span className={`${Styles.anime} ${mouseStates ? Styles.show : ''}`}>Click para maiores informações</span>
              <div className={mouseStates || widthTela ? Styles.divline : Styles.ContainerDadosh4}></div>
            </div>

          )
        })}


        <div className={fechamento ? Styles.Modal : Styles.Closeed}> 
          <div className={Styles.ContainerModal}>
            <button className={Styles.Closed} onClick={()=>Closed()}>X</button>

            <div className={Styles.ContainerVT}>

                <iframe  allow="fullscreen" allowFullScreen height="644" className={Styles.Video} src={clickDados.Video}></iframe>

                <div className={Styles.Text}>
                  <h4>{clickDados.Techs}</h4>
                  <p>{clickDados.Descricao}</p>
                </div>

                <div className={Styles.ContainerLinks}>
                  <a className={Styles.links} href={clickDados.Linkedin} target="_blank">Projeto no Linkedin</a>
                  <a className={Styles.links} href={clickDados.Github} target="_blank">Projeto no Github</a>
                  <a className={Styles.links} href={clickDados.Site} target="_blank">Site do Projeto</a>
                  <Link className={Styles.links} to="/Contatos"> Contatos </Link>
                </div>

            </div>

          </div>
        </div>
    </div>
     
  )

}

export default Projetos