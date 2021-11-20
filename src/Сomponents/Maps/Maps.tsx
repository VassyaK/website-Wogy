import s from './Maps.module.scss';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapData = {
  center: [53.855, 27.487],
  zoom: 14,
};

const coordinates = [
  [53.85496, 27.479648],
  [53.86558, 27.485698]
];

const Maps = () => (
  <YMaps>
    <Map className={s.map} defaultState={mapData}>
      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
);

export default Maps
  
