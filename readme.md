# OpenLayers + Sentinel Hub WMS

Created by following instructions at https://openlayers.org/doc/quickstart.html

This example demonstrates the use of Sentinel Hub WMS with OpenLayers.

It contains 2 examples of how to limit the extent of the data
- using `extent` parameter for `TileLayer` (`shLayer1` in `main.js`)
- using `geometry` parameter for Sentinel Hub WMS request (`shLayer2` in `main.js`) 

When zoomed to Rome, the map should display 2 rectangles with your data.

Example image:

![screenshot](./screenshot.png)

## Development
- run `npm install`
- run `npm run start`
- set correct **instance id** and **layer id** in `main.js`
