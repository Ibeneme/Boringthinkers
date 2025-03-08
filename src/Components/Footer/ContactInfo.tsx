// import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { LatLngExpression } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "./ContactInfo.css";

// const position: LatLngExpression = [4.8149, 7.0498];

// const ContactInfo: React.FC = () => {
//   const openGoogleMapsDirections = () => {
//     const destination = encodeURIComponent("181-A Odili Road, Trans Amadi, Port Harcourt, Rivers State");
//     window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, "_blank");
//   };

//   return (
//     <div className="contact-info">
//       <div className="map-container">
//         <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//           <Marker position={position}>
//             <Popup>
//               West Hova Integrated Solutions
//               <br />
//               <button onClick={openGoogleMapsDirections} className="directions-button">
//                 Get Directions
//               </button>
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//     </div>
//   );
// };

// export default ContactInfo;