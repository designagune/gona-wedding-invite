export default function KakaoMap() {
  return (
    <iframe
      title="KakaoMap"
      srcDoc={`
        <div id="daumRoughmapContainer1757944387795" class="root_daum_roughmap root_daum_roughmap_landing" style="width:100%;"></div>
        <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
        <script>
         new daum.roughmap.Lander({
		"timestamp" : "1757944387795",
		"key" : "977hd6o3q2m",
		"mapHeight" : "260"
	}).render();
        </script>
      `}
      style={{
        width: "100%",
        height: "310px",
        border: "none",
        overflow: "hidden",
      }}
    />
  );
}
