<template>
  <div>
    <div>hello</div>
    <baidu-map class="map" center="北京" style="width: 100%;height: 300px;"></baidu-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    };
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    }
  }
};
</script>
<style lang="scss">
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
