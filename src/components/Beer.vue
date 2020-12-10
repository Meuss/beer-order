<template>
  <div class="beer-container">
    <div class="waves">
      <svg
        width="481px"
        height="21px"
        viewBox="0 0 481 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        id="wave-dark"
      >
        <path
          d="M420.875,18.9955256 C390.561979,18.9955256 360.75,9.54552558 360.75,9.54552558 C360.75,9.54552558 331.564323,0 300.625,0 C269.685677,0 240.5,9.45 240.5,9.45 C240.5,9.45 210.688021,18.9955256 180.375,18.9955256 C150.061979,18.9955256 120.25,9.54552558 120.25,9.54552558 C120.25,9.54552558 91.0643229,0 60.125,0 C29.1856771,0 0,9.45 0,9.45 L0,21 L240.5,21 L481,21 L481,9.45 C481,9.45 451.188021,18.9955256 420.875,18.9955256 Z"
          fill="#D38037"
        ></path>
      </svg>
      <svg
        width="481px"
        height="21px"
        viewBox="0 0 481 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        id="wave-light"
      >
        <path
          d="M420.875,18.9955256 C390.561979,18.9955256 360.75,9.54552558 360.75,9.54552558 C360.75,9.54552558 331.564323,0 300.625,0 C269.685677,0 240.5,9.45 240.5,9.45 C240.5,9.45 210.688021,18.9955256 180.375,18.9955256 C150.061979,18.9955256 120.25,9.54552558 120.25,9.54552558 C120.25,9.54552558 91.0643229,0 60.125,0 C29.1856771,0 0,9.45 0,9.45 L0,21 L240.5,21 L481,21 L481,9.45 C481,9.45 451.188021,18.9955256 420.875,18.9955256 Z"
          fill="#F2994A"
        ></path>
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
    gsap.to('#wave-light', { xPercent: -50, duration: 0.3, repeat: -1, ease: 'none' });
    gsap.to('#wave-dark', { xPercent: -50, duration: 0.28, repeat: -1, ease: 'none' });
  },
  methods: {
    animateBeer(x) {
      gsap.to('.beer-container', {
        yPercent: -x * 10,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    },
    animateWaves(x, y) {
      // find difference (stronger animation if large change)
      console.log(x);
      console.log(y);
      const tl = new gsap.timeline();
      tl.set('.waves', { y: 40 });
      tl.to('.waves', { y: 0, duration: 0.2 });
      tl.to('.waves', { autoAlpha: 1 }, 0);
      tl.to('#waves-dark', { autoAlpha: 0 }, 0.3);
      tl.to('.waves', { y: 40, duration: 0.3 }, 0.4);
      tl.to('.waves', { autoAlpha: 0 }, 0.6);
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
  opacity: 0;
  visibility: hidden;
}
svg {
  z-index: -3;
  position: absolute;
  width: 200%;
  height: 50px;
  top: -40px;
  left: 0;
  &#wave-light {
    top: -39px;
  }
}
</style>
