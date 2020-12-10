<template>
  <div v-if="bubbles.length" id="bubbles">
    <div
      v-for="(bubble, index) in bubbles"
      :key="index"
      :class="`bubble bubble-${index}`"
      :style="bubble.style"
    ></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  name: 'Bubbles',
  data() {
    return {
      bubbles: [],
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  watch: {
    count(value) {
      this.manageBubbles(value);
    },
  },
  mounted() {},
  methods: {
    manageBubbles() {
      // animate out any previous bubbles
      this.hideBubbles();
      // animate in new bubbles
      this.animateBubbles();
    },
    createRandomBubbles() {
      // remove previous bubbles
      this.bubbles = [];
      // create 10 random bubbles
      for (let i = 0; i < 10; i++) {
        // set values for top, left, width, height
        const top = Math.floor(this.getRandomNumber(40, 95));
        const left = Math.floor(this.getRandomNumber(5, 95));
        const width = Math.floor(this.getRandomNumber(5, 25));
        const newBubble = {
          style: {
            top: `${top}%`,
            left: `${left}%`,
            width: `${width}px`,
            height: `${width}px`,
          },
        };
        // push into the array of bubbles
        this.bubbles.push(newBubble);
      }
    },
    // bubbles animation in
    animateBubbles() {
      const bubbles = gsap.utils.toArray('.bubble');
      if (this.count != 0) {
        bubbles.forEach((bubble, index) => {
          const moveAmount = -Math.floor(this.getRandomNumber(40, 100));
          const duration = Math.round((this.getRandomNumber(1, 50) / 10) * 100) / 100;
          gsap.fromTo(
            `.bubble-${index}`,
            { y: 0 },
            { y: moveAmount, duration: duration, ease: 'power1.Out' },
          );
          gsap.fromTo(
            `.bubble-${index}`,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.3, ease: 'power1.Out' },
          );
          if (Math.random() < 0.5) {
            gsap.to(`.bubble-${index}`, {
              autoAlpha: 0,
              duration: 0.3,
              ease: 'power1.Out',
              delay: duration + 0.1,
            });
          }
        });
      }
    },
    // bubbles animate out
    hideBubbles() {
      const bubbles = gsap.utils.toArray('.bubble');
      if (bubbles.length) {
        gsap.to(bubbles, { y: 10, autoAlpha: 0, stagger: 0.01, duration: 0.2 });
      }
      this.createRandomBubbles();
      // empty previous bubbles
      // this.bubbles = [];
    },
    // utility function
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
  },
};
</script>

<style lang="scss" scoped>
#bubbles {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
}
.bubble {
  position: absolute;
  background-color: #fad6b7;
  border-radius: 50%;
  z-index: -1;
  visibility: hidden;
  border: 1px solid #f2994a;
  // &.bubble-0 {
  //   background-color: blue;
  // }
  // &.bubble-1 {
  //   background-color: red;
  // }
  // &.bubble-2 {
  //   background-color: green;
  // }
  // &.bubble-3 {
  //   background-color: yellow;
  // }
  // &.bubble-4 {
  //   background-color: pink;
  // }
  // &.bubble-5 {
  //   background-color: black;
  // }
}
</style>
