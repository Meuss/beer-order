<template>
  <button>
    <span>Place your order</span>
    <div>{{ count }}</div>
  </button>
</template>

<script>
export default {
  name: 'PlaceOrder',
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  border: 0;
  border-radius: 7px;
  color: white;
  padding: 8px;
  cursor: pointer;
  span {
    margin-left: 5px;
    font-size: 18px;
  }
  div {
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    color: #d38037;
    background-color: #fff;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
}
</style>
