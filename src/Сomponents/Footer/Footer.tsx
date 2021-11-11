import wogyLogoDark from '../../resources/pictures/wogyDark.png'
import wogyText3 from '../../resources/pictures/wogy-text-3.png'
import s from './Footer.module.scss';

const Footer=()=>(
  <footer className={s.footer}>
        <div>Присоединяйтесь</div>
        <div>
          <a
          
          href="https://www.instagram.com/wogy_malinovka/"
          target="wogy"
          rel="noopener noreferrer"
              >
                  <img src="" alt="" />
          иконка инстаграм
              </a>
            <div className= {s.FooterText}>Магазин Чюрлениса</div>
          </div>  
          <div> 
          <a
          
          href="https://www.instagram.com/wogy.by/?hl=ru"
          target="wogy"
          rel="noopener noreferrer"
              >
          иконка инстаграм
              </a>
            <div className={s.FooterText}>Магазин Дзержинского</div>
        </div>      
        <div>
          {/* <img src={wogyLogoDark} alt="" /> */}
          {/* <img src={wogyText3} alt="" /> */}

        </div>
      </footer>
)
export default Footer