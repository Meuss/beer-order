<template>
  <div>
    <vue-slider :value="count" v-bind="options" @change="changeValue"></vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
export default {
  name: 'Slider',
  data() {
    return {
      options: {
        dotSize: 26,
        width: 'auto',
        height: 2,
        contained: false,
        direction: 'ltr',
        data: null,
        dataLabel: 'label',
        dataValue: 'value',
        min: 0,
        max: 10,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.5,
        adsorb: false,
        lazy: true,
        tooltip: 'none',
        useKeyboard: false,
        keydownHook: null,
        dragOnClick: false,
        enableCross: true,
        fixed: false,
        minRange: void 0,
        maxRange: void 0,
        order: true,
        marks: false,
        dotOptions: void 0,
        dotAttrs: void 0,
        process: true,
        dotStyle: void 0,
        railStyle: void 0,
        processStyle: void 0,
        tooltipStyle: void 0,
        stepStyle: void 0,
        stepActiveStyle: void 0,
        labelStyle: void 0,
        labelActiveStyle: void 0,
      },
    };
  },
  methods: {
    changeValue(newValue) {
      this.$store.commit('changeCount', newValue);
    },
  },
  mounted() {
    this.$store.commit('changeCount', 0);
  },
  components: {
    VueSlider,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="scss">
$themeColor: #000;
$dotShadow: 0px 0px 0px 3px #000;
$dotShadowFocus: 0px 0px 0px 3px #000;
@import '~vue-slider-component/lib/theme/default.scss';
</style>
