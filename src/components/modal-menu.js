import '../styles/modal-styles.scss';
import logo from '../assets/logo.png';
import cross from '../assets/cross.png';
import arrow from '../assets/arrow.png';
import picTwo from '../assets/img_menu.png';

function ModalMenu ({modalActive, setModalActive}){
   return (
      <div className={modalActive ? 'modal active' : 'modal'} onClick={()=>setModalActive(false)}>
         <div className="modal-grey"></div>
         <div className="modal-menu-container" onClick={(e)=> e.stopPropagation()}>
            <div className='header-wrapper'>
               <div className='header-container'>
                  <div className='header-title'>
                     <img src={logo} alt='logo' />
                  </div>
                  <div className='burger-dropdown-container'>
                     <div className='cross' onClick={()=> setModalActive(false)}>
                        <img src={cross} alt='cross' />
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
                     <div className='event-date'>
                        <div className="schedule-container">
                           <div className="data-type">Розклад сьогодні:</div>
                           <div className='data'>12:00 - 19:00</div>
                        </div>
                        <div className='address-container'>
                           <div className="data-type">Адреса:</div>
                           <div className='data'>Київ, вул. М. Грушевського, 6</div>
                        </div>
                     </div>
                     <div className='actual-events'>Актуальні виставки</div>
                     <div className='closest-events'>Найближчі події</div>
                     <div className='news'>Новини</div>
                        <hr />
                     <div className='buy-tickets-button'>Купити квиток</div>
                  </div>
                  <div className='picture-container'>
                     <img src={picTwo} alt='piece of art' />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ModalMenu;