import '../styles/visit-styles.scss';
import picOne from '../assets/img_07.png';

function Visit (){
   return (
      <div className='visit-wrapper'>
         <div className='visit-picture'>
            <img src={picOne} alt='piece of art' />
         </div>
         <div className='visit-info-container'>
            <div className='visit-info'>
               <div className='visit-title'>Сплануйте візит до музею</div>
               <div className='visit-description'>Оберіть зручний день, зареєструйтесь на події, що цікавлять, купіть квиток заздалегідь, щоб ніщо не завадило вам насолоджуватись мистецтвом</div>
               <div className='visit-button'>Почати</div>
            </div>
         </div>
      </div>
   );
};

export default Visit;