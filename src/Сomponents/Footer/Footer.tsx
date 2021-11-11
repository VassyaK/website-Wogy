import wogyLogoDark from '../../pictures/wogyDark.png'
import wogyText3 from '../../pictures/wogy-text-3.png'
const Footer=()=>(
  <footer>
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
            <div>Магазин Чюрлениса</div>
          </div>  
          <div> 
          <a
          
          href="https://www.instagram.com/wogy.by/?hl=ru"
          target="wogy"
          rel="noopener noreferrer"
              >
          иконка инстаграм
              </a>
            <div>Магазин Дзержинского</div>
        </div>      
        <div>
          <img src={wogyLogoDark} alt="" />
          <img src={wogyText3} alt="" />

        </div>
      </footer>
)
export default Footer