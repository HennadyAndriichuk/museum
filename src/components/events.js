import '../styles/events-styles.scss';
import buttonArrow from '../assets/button-arrow.png';
import picOne from '../assets/img_05.png';
import picTwo from '../assets/img_06.png';

function Events () {
   return (
      <div className='events-wrapper'>
         <div className='events-container'>
            <div className='events-title-container'>
               <div className='title'>Найближчі події</div>
               <div className='archive-button'>
                  Календар подій
                  <img src={buttonArrow} alt='arrow' />
               </div>
            </div>
            <div className='event-items'>
               <div className='event-item'>
                  <div className='event-picture'>
                     <img src={picOne} alt='piece of art' />
                  </div>
                  <div className='event-data-container'>
                     <div className='event-date'>14.08 о 13:00</div>
                     <div className='event-title'>Кураторські екскурсії від Павла Гудімова </div>
                     <div className='event-description'>Таємниці підготовки, історії експонатів, магія дійства до і в момент вашої присутності – розгортатиметься...</div>
                     <div className='event-check-button'>Зареєструватись</div>
                  </div>
               </div>
               <div className='event-item'>
                  <div className='event-picture'>
                     <img src={picTwo} alt='piece of art' />
                  </div>
                  <div className='event-data-container'>
                     <div className='event-date'>16.08 о 13:00</div>
                     <div className='event-title'>Майстер-клас “Подорож до Австралії”</div>
                     <div className='event-description'>Цієї неділі о 14:00 на арт-мандрівників чекає останній пункт кругосвітньої подорожі - Австралія.</div>
                     <div className='event-check-button'>Зареєструватись</div>
                  </div>
               </div>
            </div>
            <div className='archive-button-under'>
               Календар подій
               <img src={buttonArrow} alt='arrow' />
            </div>
         </div>
      </div>
   );
};
export default Events;