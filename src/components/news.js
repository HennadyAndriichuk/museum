import '../styles/news-styles.scss';
import arrow from '../assets/button-arrow.png';
import picOne from '../assets/img_08.png';
import picTwo from '../assets/img_09.png';

function News (){
   return(
      <div className="news-wrapper">
         <div className='news-container'>
            <div className='news-title-container'>
               <div className='title'>Новини</div>
               <div className='news-button'>
                  Усі новини
                  <img src={arrow} alt='arrow' />
               </div>
            </div>
            <div className='news-items'>
               <div className='news-item'>
                  <div className='news-item-image'>
                     <img src={picOne} alt='piece of art' />
                  </div>
                  <div className='news-date'>9 серпня 2019</div>
                  <div className='news-title'>Оголошення переможця</div>
                  <div className='news-description'>Друзі, сьогодні п'ятниця! А це означає, що час оголосити переможця розіграшу...</div>
               </div>
               <div className='news-item'>
                  <div className='news-item-image'>
                     <img src={picTwo} alt='piece of art' />
                  </div>
                  <div className='news-date'>9 серпня 2019</div>
                  <div className='news-title'>Міжнародний день котів</div>
                  <div className='news-description'>Музей з левами не може просто так взяти і пропустити Міжнародний день котів!</div>
               </div>
            </div>
            <div className='news-button-under'>
               Усі новини
               <img src={arrow} alt='arrow' />
            </div>
         </div>
      </div>
   );
};

export default News;