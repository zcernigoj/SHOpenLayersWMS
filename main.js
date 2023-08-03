import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS.js';
import OSM from 'ol/source/OSM';

const baseLayerOSM = new TileLayer({ source: new OSM() });

const shLayerId = "<layer-id>";
const shLayerWmsUrl = "https://services.sentinel-hub.com/ogc/wms/<instance-id>";
const time = "2023-02-01/2023-08-03";

// minimal parameters needed for Sentinel Hub WMS request
const shLayerParams = {
  "layers": shLayerId,
  "time": time
};

// limiting spatial extent via `extent` parameter for TileLayer
// https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html
const shLayer1 = new TileLayer({
  extent: [
    1385585.909539,
    5141536.685675,
    1396057.845357,
    5148568.905287
  ],
  source: new TileWMS({
    url: shLayerWmsUrl,
    params: shLayerParams,
    serverType: 'geoserver',
    transition: 0
  })
});

// limiting spatial extent via `geometry` parameter for Sentinel Hub WMS request
// https://docs.sentinel-hub.com/api/latest/api/ogc/additional-request-parameters/#additional-request-parameters
const geometry = `POLYGON ((1400824.991231 5140695.839717,1410987.458865 5140695.839717,1410987.458865 5147804.477836,1400824.991231 5147804.477836,1400824.991231 5140695.839717))`;
const shLayer2 = new TileLayer({
  source: new TileWMS({
    url: shLayerWmsUrl,
    params: {...shLayerParams, geometry},
    serverType: 'geoserver',
    transition: 0
  })
});

const map = new Map({
  target: 'map',
  layers: [
    baseLayerOSM,
    shLayer1,
    shLayer2,
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
