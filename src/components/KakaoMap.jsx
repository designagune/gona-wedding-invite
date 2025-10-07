import { Map, MapMarker } from "react-kakao-maps-sdk";
import marker from "../assets/images/marker.png";

export default function KakaoMap() {
  return (
    <Map
      center={{ lat: 37.308349, lng: 126.828879 }}
      style={{ width: "100%", height: "360px" }}
      draggable={false}
    >
      <MapMarker
        position={{ lat: 37.308349, lng: 126.828879 }}
        image={{
          src: marker,
          size: {
            width: 56,
            height: 68,
          },
          options: {
            offset: {
              x: 30,
              y: 57,
            },
          },
        }}
      ></MapMarker>
    </Map>
  );
}
