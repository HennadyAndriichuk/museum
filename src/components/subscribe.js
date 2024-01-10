import '../styles/subscribe-styles.scss';

function Subscribe () {
   return(
      <div className="subscribe-wrapper">
         <div className='subscribe-container'>
            <div className='subscribe-block'>
               <div className='subscribe-title'>Підпишіться на дайджест</div>
               <div className='subscribe-description-under'>Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів</div>
               <div className='email'>
                  email
                  <hr/>
               </div>
               <div className='subscribe-button'>Підписатись</div>
            </div>
            <div className='description-block'>
               <div className='subscribe-description'>Першими дізнавайтесь про новини музею та розіграші, отримуйте запрошення на події та читайте статті від кураторів</div>
            </div>
         </div>
      </div>
   );
};

export default Subscribe;