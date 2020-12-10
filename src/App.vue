<template>
  <div id="app">
    <Foam />
    <div>
      <svg
        class="icon"
        @click="reloadPage"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512.001 512.001"
        style="enable-background:new 0 0 512.001 512.001;"
        xml:space="preserve"
      >
        <path
          d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
			L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
			c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
			l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
			L284.286,256.002z"
        />
      </svg>
      <h1>Beer order</h1>
      <h2>How much beer do you want?</h2>
      <Slider />
      <Phrase />
    </div>
    <PlaceOrder />
    <Beer />
  </div>
</template>

<script>
import Foam from './components/Foam.vue';
import Slider from './components/Slider.vue';
import Phrase from './components/Phrase.vue';
import PlaceOrder from './components/PlaceOrder.vue';
import Beer from './components/Beer.vue';

export default {
  name: 'App',
  components: {
    Foam,
    Slider,
    Phrase,
    PlaceOrder,
    Beer,
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;500&display=swap');
html,
body {
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#app {
  border: 2px solid #000;
  border-radius: 20px;
  width: 300px;
  height: 60vh;
  font-family: 'Lato', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
}
.icon {
  position: absolute;
  left: 30px;
  width: 13px;
  height: 13px;
  cursor: pointer;
}
h1 {
  margin: 0;
  font-size: 15px;
  font-weight: 400;
}
h2 {
  margin: 40px auto 50px;
  font-size: 30px;
}
</style>
