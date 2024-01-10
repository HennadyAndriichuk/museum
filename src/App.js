import FirstScreen from "./components/first-screen";
import ModalMenu from './components/modal-menu';
import Exibitions from './components/exibitions';
import Events from './components/events';
import Visit from './components/visit';
import News from './components/news';
import Subscribe from "./components/subscribe";
import Footer from './components/footer';
import { useState } from 'react';
import './styles/app-styles.scss';

function App () {
   const [modalActive, setModalActive] = useState(false);
   return(
      <div className="main">
         <ModalMenu modalActive={modalActive} setModalActive={setModalActive} />
         <div className="mainflow">
            <FirstScreen modalActive={modalActive} setModalActive={setModalActive} />
            <Exibitions />
            <Events />
            <Visit />
            <News />
            <Subscribe />
            <Footer />
         </div>
      </div>
   );
};

export default App;