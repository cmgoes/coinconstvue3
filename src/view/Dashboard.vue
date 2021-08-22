<template>
  <div class="bg-black-light">
    <Header />
    <div class="border-b border-solid border-white-light">
      <div class="flex flex-col 2xl:flex-row">
        <div class="w-full 2xl:w-2/3 2xl:border-r border-solid border-white-light">
          <Chart />
          <History />
        </div>
        <div class="w-full 2xl:w-1/3 flex">
          <div class="w-1/2 border-r border-solid border-white-light ">
            <Calculate />
            <Price />
          </div>
          <div class="w-1/2 bg-gradient">
            <Purchase />
            <Balance />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from "vue";
import Header from '../components/Header.vue'
import Chart from '../components/Chart.vue'
import Calculate from '../components/Calculate.vue'
import Purchase from '../components/Purchase.vue'
import History from '../components/History.vue'
import Price from '../components/Price.vue'
import Balance from '../components/Balance.vue'
export default {
  created () {
  },
  methods: {
  },
  components: {
    Header,
    Chart,
    Calculate,
    Purchase,
    History,
    Price,
    Balance
  },
  setup() {
  },
};
</script>