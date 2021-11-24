
import Carousel from '../Carousel/Carousel';
import Maps from '../Maps/Maps';
import s from './StoreWogyMalinovka.module.scss';
import { imagesWM } from "../Carousel/constants";

const StoreWogyMalinovka=()=>(
  <div className={s.storeWogyMalinovka}>
    <h1 className={s.headingSWM}>Магазин одежды ул. Черлёниса, 4</h1>
    <Carousel images={imagesWM}/>
  </div>
)
export default StoreWogyMalinovka