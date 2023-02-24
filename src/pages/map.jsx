// import { useState } from "react";
// import axios from "axios";
// import { ActionButton } from "../components/ActionButton.jsx";

// const success = async (position) => {

    
  // const latitude = position.coords.latitude;
 // const longitude = position.coords.longitude;
 // setGeoLocation({
 //   latitude: latitude,
 //   longitude: longitude,
 // });
 // 本来はこれ↑全部書かないといけないけど、分割代入を使うと下{ latitude, longitude } の書き方のみでいける↓
 
//      const { latitude, longitude } = position.coords;
//      setGeoLocation({ latitude, longitude });
//      const placeData = await axios.get(
//        `https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=`
//      );
//      console.log(placeData.data);
//      setPlace(placeData.data.display_name);
// }
// -------------------------------

import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const SimpleLeaflet = () => {
  const [position, setPosition] = useState({
    lat: 35.544183970713334,
    lng: 134.81330869397715,
  });
  const [zoom, setZoom] = useState(13);

  return (
    <div>
      <MapContainer center={position} zoom={zoom} style={{ height: "50vh" }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright";>OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default SimpleLeaflet;

// export const InlineStyle = () => {

//   const contaierStyle = {
//     border: "solid 2px #329eff",
//     borderRadius: "20px",
//     // padding: "8px",
//     // margin: "8px"
//       /* display: inline-block; */
//       /* text-align: left; */
//       width: "80%",
//       height: "100%"
//     }
  

//   return (
//     <div style={contaierStyle}>
//       <p>マップ</p>
      
//     </div>



//   )};
// -------------------------------


// import * as React from 'react';
// // import MapView from 'react-bingmap';
// // import { StyleSheet, Text, View, Dimensions } from 'react-bingmap';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map} />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });