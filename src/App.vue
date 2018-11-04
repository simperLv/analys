<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

(function(document, window, width) {
  var scale = window.screen.width / width,
    viewPort = '<meta name = "viewport" content = "';
  viewPort +=
    "target-densitydpi = device-dpi, width = " +
    width +
    ", initial-scale = " +
    scale;
  viewPort +=
    ",minimum-scale = " +
    scale +
    ", maximum-scale = " +
    scale +
    ", user-scalable = no";
  document.write(viewPort + '">');
})(document, window, 360);
export default {
  computed: {
    direction() {
      const viewDir = this.$store.state.viewDirection;
      let tranName = "";

      if (viewDir === "left") {
        tranName = "view-out";
      } else if (viewDir === "right") {
        tranName = "view-in";
      } else {
        tranName = "fade";
      }

      return tranName;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
