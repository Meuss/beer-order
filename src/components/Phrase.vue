<template>
  <h3>{{ setPhrase }}</h3>
</template>

<script>
import { gsap } from 'gsap';
export default {
  name: 'Phrase',
  data() {
    return {
      setPhrase: "None, it's only nine!",
    };
  },
  computed: {
    phrase() {
      return this.$store.state.currentPhrase;
    },
  },
  watch: {
    // phrase animation
    phrase(newValue) {
      const that = this;
      const tl = gsap.timeline();
      // fade out to top
      tl.fromTo(
        'h3',
        {
          y: 0,
        },
        {
          y: -20,
          autoAlpha: 0,
          duration: 0.3,
          ease: 'power1.inOut',
        },
      );
      // change phrase in the middle of timeline
      tl.add(function() {
        that.setPhrase = newValue;
      }, '>');
      // fade in from bottom
      tl.fromTo(
        'h3',
        {
          y: 10,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: 'power1.inOut',
        },
        '>',
      );
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 70px;
  font-weight: 400;
  font-size: 24px;
}
</style>
