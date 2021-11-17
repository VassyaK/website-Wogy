import wogyLogo from '../../resources/pictures/wogyDark.png'
import wogyText11 from '../../resources/pictures/wogy-text-black-11.png'
import s from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import BasicMenu from './HeaderMenu/HeaderMenu';
import BasicButtons from '../Button/Button';



const Header =()=>(
  <header className={s.header}>
    <div className={s.flexConteiner}>
      {/* <div ><img className={s.hederLogo} src={wogyLogo} alt=""/></div>
      <div className={s.hederTextConteiner}><img className={s.hederText} src={wogyText11} alt="" /></div> */}
    </div>
    
    <div className={s.hederNav}>
      <div className={s.headerContainer}>
        <div>
        <NavLink to='/'><BasicButtons className={s.headerLink} text='Главная'/></NavLink>
        </div>
        
        <BasicMenu />        
        <div><NavLink to='/inform'><BasicButtons text='Информация'/></NavLink></div>
        <a className={s.headerLink}
        
        href="https://www.instagram.com/wogy_malinovka/"
        target="wogy"
        rel="noopener noreferrer"
            >
                
        Магазин на Чюрлёниса 4
            </a>
            <a className={s.headerLink}
        
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