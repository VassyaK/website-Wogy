import wogyLogo from '../../resources/pictures/wogyDark.png'
import wogyText11 from '../../resources/pictures/wogy-text-black-11.png'
import s from './Header.module.scss';



const Header =()=>(
  <header className={s.header}>
    <div className={s.flexConteiner}>
      <div ><img className={s.hederLogo} src={wogyLogo} alt=""/></div>
      <div className={s.hederTextConteiner}><img className={s.hederText} src={wogyText11} alt="" /></div>
    </div>
    
    <div className={s.hederNav}>
      <div className={s.headerContainer}>
        <div>Главная</div>
        <div>Магазины</div>
        <div>Информация</div>
        <a
        
        href="https://www.instagram.com/wogy_malinovka/"
        target="wogy"
        rel="noopener noreferrer"
            >
                
        Магазин на Чюрлёниса 4
            </a>
            <a
        
        href="https://www.instagram.com/wogy.by/?hl=ru"
        target="wogy"
        rel="noopener noreferrer"
            >
        Магазин на пр. Дзержинского 94
            </a>
      </div>
    </div>
  </header>
)
export default Header;