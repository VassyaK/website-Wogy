import Carousel from '../Carousel/Carousel';
import Maps from '../Maps/Maps';
import s from './Main.module.scss';

const Main=()=>(
  <main className={s.main}>   
    <Carousel/>
    <Maps/>
  </main>
)
export default Main