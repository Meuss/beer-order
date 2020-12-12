<template>
  <div v-if="bubbles.length" id="bubbles">
    <div
      v-for="(bubble, key) in bubbles"
      :key="key"
      :class="`bubble bubble-${bubble.key}`"
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
      key: 0,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  watch: {
    count() {
      this.hideBubbles();
    },
  },
  mounted() {},
  methods: {
    // animate out any previous bubbles
    hideBubbles() {
      const bubbles = gsap.utils.toArray('.bubble');
      // if bubbles exist, hide them
      if (this.bubbles.length) {
        gsap.to(bubbles, {
          y: '-=10',
          autoAlpha: 0,
          stagger: 0.01,
          duration: 0.2,
          onComplete: removePreviousBubbles,
        });
      } else {
        removePreviousBubbles();
      }
      // after animation, remove the previous bubbles
      const that = this;
      function removePreviousBubbles() {
        setTimeout(() => {
          that.bubbles = [];
          // trigger new bubbles afterwards
          that.createRandomBubbles();
        }, 100);
      }
    },
    // create new random bubbles
    createRandomBubbles() {
      let randomAmount;
      // don't create bubbles if beer count = 0
      if (this.count === 0) {
        randomAmount = 0;
      } else if (this.count < 5) {
        randomAmount = Math.floor(this.getRandomNumber(2, 5));
      } else {
        // more bubbles if more beer!
        randomAmount = Math.floor(this.getRandomNumber(5, 10));
      }
      for (let i = 0; i < randomAmount; i++) {
        // set random values for top, left, width, height of new bubbles
        const top = Math.floor(this.getRandomNumber(40, 95));
        const left = Math.floor(this.getRandomNumber(5, 95));
        const width = Math.floor(this.getRandomNumber(5, 25));
        const newBubble = {
          key: this.key,
          style: {
            top: `${top}%`,
            left: `${left}%`,
            width: `${width}px`,
            height: `${width}px`,
          },
        };
        // key is to keep track of individual bubbles (for gsap animation)
        this.key++;
        // push into the array of bubbles
        this.bubbles.push(newBubble);
      }
      // animate in new bubbles
      this.animateBubbles();
    },
    // bubbles animation in method
    animateBubbles() {
      const bubbles = gsap.utils.toArray('.bubble');
      // no animation if no bubbles
      if (this.count != 0) {
        // animate each existing bubble
        bubbles.forEach(bubble => {
          // get the bubble key from DOM
          const domKey = bubble.classList[1];
          const moveAmount = -Math.floor(this.getRandomNumber(40, 100));
          const duration = Math.round((this.getRandomNumber(10, 50) / 10) * 100) / 100;
          gsap.fromTo(
            `.${domKey}`,
            { y: 0 },
            { y: moveAmount, duration: duration, ease: 'power4.Out' },
          );
          gsap.fromTo(
            `.${domKey}`,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.3, ease: 'none' },
          );
          // randomly fade some bubbles out
          if (Math.random() < 0.3) {
            gsap.to(`.${domKey}`, {
              scale: 0,
              duration: 0.2,
              ease: 'power1.Out',
              delay: duration + 0.2,
            });
          }
          if (Math.random() < 0.5) {
            gsap.to(`.${domKey}`, {
              scale: 0,
              duration: 0.2,
              ease: 'power1.Out',
              delay: duration + 1.2,
            });
          }
        });
      }
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
  height: 300px;
}
.bubble {
  position: absolute;
  background-color: #fad6b7;
  border-radius: 50%;
  z-index: -1;
  visibility: hidden;
  border: 1px solid #f2994a;
}
</style>
