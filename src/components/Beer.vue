<template>
  <div class="beer-container"></div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  name: 'Beer',
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  // beer filling simple tween
  watch: {
    count() {
      gsap.to('.beer-container', {
        yPercent: -this.count * 10,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.beer-container {
  position: absolute;
  top: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: #f2994a;
  z-index: -2;
}
</style>
