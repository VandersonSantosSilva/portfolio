import Information from './ComponentsJSX/Information';
import Navbar from './ComponentsJSX/Navbar';
import Footer from './ComponentsJSX/Footer';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import Reducers from './Reducers/Reducers';
import { Routes, Route } from 'react-router-dom';
import Projetos from './ComponentsJSX/Projetos';
import Contatos from './ComponentsJSX/Contatos';

function App() {

    const story = legacy_createStore(Reducers)

    return(
        <Provider store={story}>
            <Navbar />

            <Routes>
                <Route exact path='/' element={<Information />} />
                <Route path='/Projetos' element={<Projetos />} />
                <Route path='/Contatos' element={<Contatos />} />
            </Routes>

            <Footer />
        </Provider>
    )

}

export default App;
