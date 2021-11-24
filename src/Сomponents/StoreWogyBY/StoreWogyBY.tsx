import Carousel from '../Carousel/Carousel';
import Maps from '../Maps/Maps';
import s from './StoreWogyBY.module.scss';
import { imagesWB } from "../Carousel/constants";


const StoreWogyBY= () =>(
  <div className={s.storeWogyBY}>
    <h1 className={s.headingSWB}>Магазин одежды пр. Дзержинского 94</h1>
    <Carousel images={imagesWB}/>
  </div>
)
export default StoreWogyBY