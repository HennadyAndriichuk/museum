import '../styles/exibitions-styles.scss';
import buttonArrow from '../assets/button-arrow.png';
import picOne from '../assets/img_02.png';
import picTwo from '../assets/img_3.png';

function Exibitions (){
   return(
      <div className='exibitions-wrapper'>
         <div className='exibitions-container'>
            <div className='exibitions-title-container'>
               <div className='title'>Актуальні виставки</div>
               <div className='archive-button'>
                  Архів виставок
                  <img src={buttonArrow} alt='arrow' />
               </div>
            </div>
            <div className='exibitions-items'>
               <div className='exibition-item'>
                  <div className='exibition-picture'>
                     <img src={picOne} alt='piece of art' />
                  </div>
                  <div className='exibition-date'>11.07 - 22.09</div>
                  <div className='exibition-title'>Кураторська виставка “Ангели”</div>
                  <div className='exibition-description'>Виставковий проект «Ангели» – знакова подія для української культури і водночас наймасштабніший...</div>
                  <div className='buy-tickets-button'>Купити квиток</div>
               </div>
               <div className='exibition-item'>
                  <div className='exibition-picture'>
                     <img src={picTwo} alt='piece of art' />
                  </div>
                  <div className='exibition-date'>Діє постійно</div>
                  <div className='exibition-title'>Мистецтво ХХ ст. — XXI ст.</div>
                  <div className='exibition-description'>Знакові роботи Алли Горської, Миколи Самокиша, Федора Кричевського та інших митців.</div>
                  <div className='buy-tickets-button'>Купити квиток</div>
               </div>
            </div>
            <div className='archive-button-under'>
               Архів виставок
               <img src={buttonArrow} alt='arrow' />
            </div>
         </div>
      </div>
   );
};

export default Exibitions;