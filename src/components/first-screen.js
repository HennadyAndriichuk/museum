import '../styles/first-screen.scss';
import picOne from '../assets/img_01.png';
import arrow from '../assets/arrow.png';
import logo from '../assets/logo.png';
import burger from '../assets/burger.png';

function FirstScreen ({setModalActive}) {
   return (
      <div className="first-screen-wrapper">
         <div className='header-wrapper'>
            <div className='header-container'>
               <div className='header-title'>
                  <img src={logo} alt='logo' />
               </div>
               <div className='burger-dropdown-container'>
                  <div className='burger' onClick={()=> setModalActive(true)}>
                     <img src={burger} alt='burger' />
                  </div>
                  <div className='dropdown'>
                     <div className='language'>UA</div>
                     <div className='arrow-down'>
                        <img src={arrow} alt='arrow' />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='content-wrapper'>
            <div className='content-container'>
               <div className='title-tickets-wrapper'>
                  <div className='event-date'>10 серпня - 10 листопада</div>
                  <div className='event-title'>Мистецтво ХІХ - ХХ ст.</div>
                  <div className='event-context'>Внесок українських митців у світову культуру 19-20ст</div>
                  <div className='buy-tickets-button'>Купити квиток</div>
                  <div className='date-line'>
                     <div className='date'>10.08 - 10.10</div>
                     <hr />
                  </div>
               </div>
               <div className='picture-container'>
                  <img src={picOne} alt='piece of art' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FirstScreen;