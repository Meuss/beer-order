<template>
  <div class="beer-container">
    <div class="waves">
      <svg
        width="542px"
        height="22px"
        viewBox="0 0 542 22"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g id="waves">
          <g id="dark" fill="#D38037">
            <path
              d="M0,21 L0,9.45 C0,9.45 16.4434896,0 33.875,0 C51.3065104,0 67.75,9.54552558 67.75,9.54552558 C68.0859553,9.73358058 84.7171406,18.9955256 101.625,18.9955256 C118.703646,18.9955256 135.5,9.45 135.5,9.45 C135.5,9.45 151.94349,0 169.375,0 C186.80651,0 203.25,9.54552558 203.25,9.54552558 C203.585955,9.73358058 220.217141,18.9955256 237.125,18.9955256 C254.203646,18.9955256 271,9.45 271,9.45 L271,9.45 C271.328969,9.261945 287.617805,0 304.875,0 C322.30651,0 338.75,9.54552558 338.75,9.54552558 C339.085955,9.73358058 355.717141,18.9955256 372.625,18.9955256 C389.703646,18.9955256 406.5,9.45 406.5,9.45 C406.5,9.45 422.94349,0 440.375,0 C457.80651,0 474.25,9.54552558 474.25,9.54552558 C474.585955,9.73358058 491.217141,18.9955256 508.125,18.9955256 C525.203646,18.9955256 542,9.45 542,9.45 L542,9.45 L542,21 L0,21 Z"
              id="wave-dark"
              fill-rule="nonzero"
            ></path>
          </g>
          <g id="light" transform="translate(0.000000, 1.000000)" fill="#F2994A">
            <path
              d="M0,21 L0,9.45 C0,9.45 16.4434896,0 33.875,0 C51.3065104,0 67.75,9.54552558 67.75,9.54552558 C68.0859553,9.73358058 84.7171406,18.9955256 101.625,18.9955256 C118.703646,18.9955256 135.5,9.45 135.5,9.45 C135.5,9.45 151.94349,0 169.375,0 C186.80651,0 203.25,9.54552558 203.25,9.54552558 C203.585955,9.73358058 220.217141,18.9955256 237.125,18.9955256 C254.203646,18.9955256 271,9.45 271,9.45 L271,9.45 C271.328969,9.261945 287.617805,0 304.875,0 C322.30651,0 338.75,9.54552558 338.75,9.54552558 C339.085955,9.73358058 355.717141,18.9955256 372.625,18.9955256 C389.703646,18.9955256 406.5,9.45 406.5,9.45 C406.5,9.45 422.94349,0 440.375,0 C457.80651,0 474.25,9.54552558 474.25,9.54552558 C474.585955,9.73358058 491.217141,18.9955256 508.125,18.9955256 C525.203646,18.9955256 542,9.45 542,9.45 L542,9.45 L542,21 L0,21 Z"
              id="wave-light"
              fill-rule="nonzero"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
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
  // beer filling simple tween when count change
  watch: {
    count(newValue, oldValue) {
      this.animateBeer(newValue);
      this.animateWaves(newValue, oldValue);
    },
  },
  mounted() {
    gsap.to('#wave-light', { xPercent: -50, duration: 0.4, repeat: -1, ease: 'none' });
    gsap.to('#wave-dark', { xPercent: -50, duration: 0.4, repeat: -1, ease: 'none', delay: 0.1 });
    gsap.set('.waves', { scaleY: 0 });
  },
  methods: {
    animateBeer(x) {
      gsap.to('.beer-container', {
        yPercent: -x * 10,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    },
    animateWaves(newValue, oldValue) {
      // for smaller/bigger waves depending on beer count change
      const diff = Math.abs(newValue - oldValue);
      // min 1 max 10 => 0.1 to 1
      const scaleAmount = diff / 10;
      const tl = new gsap.timeline();
      tl.to('.waves', { scaleY: scaleAmount, ease: 'power1.inOut', duration: 0.2 });
      tl.to('.waves', { scaleY: 0, ease: 'power1.inOut', duration: 0.2, delay: 0.3 });
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
.waves {
  position: relative;
}
svg {
  z-index: -3;
  position: absolute;
  width: 200%;
  height: 50px;
  top: -40px;
  left: 0;
}
</style>
