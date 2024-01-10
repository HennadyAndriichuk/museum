import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import instagram from '../assets/instagram.png';
import arrow from '../assets/scroll_up.png';
import '../styles/footer-styles.scss';

function Footer () {
   return (
      <div className='footer-wrapper'>
         <div className='footer-items'>
            <div className='footer-item'>
               <div className='footer-item-title'>Контакти</div>
               <div className='address-container'>Київ,<br/> 
                  вул. М. Грушевського, 6<br/>
                  тел. 278-13-57, 278-74-54<br/>
                  info@namu.kiev.ua
               </div>
               <div className='socials-container'>
                  <img src={facebook} alt='facebook' />
                  <img src={twitter} alt='twitter' />
                  <img src={telegram} alt='telegram' />
                  <img src={instagram} alt='instagram' />
               </div>
            </div>
            <div className='footer-item'>
               <div className='footer-item-title'>Розклад роботи</div>
               <div className='schedule-container'>
                  <div className='schedule-item'>ПН: вихідний</div>
                  <div className='schedule-item'>ВТ: вихідний</div>
                  <div className='schedule-item'>СР: 10:00 - 17:00</div>
                  <div className='schedule-item'>ЧТ: 10:00 - 17:00</div>
                  <div className='schedule-item'>ПТ: 12:00 - 19:00</div>
                  <div className='schedule-item'>СБ: 11:00 - 18:00</div>
                  <div className='schedule-item'>НД: 10:00 - 17:00</div>
               </div>
            </div>
            <div className='footer-item'>
               <div className='footer-item-title'>Головна</div>
               <div className='events-container'>
                  <div className='events-item'>Виставки</div>
                  <div className='events-item'>Події</div>
                  <div className='events-item'>Новини</div>
               </div>
            </div>
         </div>
         <div className='copyright-container'>
            <div className='copyright-block'>
               <div className='date'>© 2010 — 2020</div>
               <div className='terms'>Privacy — Terms</div>
            </div>
            <img src={arrow} alt='scroll up' />
         </div>
      </div>
   );
};

export default Footer;