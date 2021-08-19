<template>
  <div class="pt-4 pr-5 pl-7 2xl:pr-5 pb-14">
    <div>
      <table width="100%">
        <thead>
          <tr class="text-center">
            <th class="text-10 text-gray-darken font-SF pb-3">
              Price(USD)
            </th>
            <th class="text-10 text-gray-darken font-SF pb-3">
              Amount(BTC)
            </th>
            <th class="text-10 text-gray-darken font-SF pb-3">
              Time
            </th>
          </tr>
        </thead>
        <tbody
          v-for="(price, index) in state.prices"
          :key="index"
        >
          <tr class="text-center">
            <td 
              class="text-10 font-SF py-1.5"
              :class="index == 3 || index == 8 || index == 9 || index == 10 ? 'text-red-darken' : 'text-green-darken'"
            >
              {{ price.price }}
            </td>
            <td class="text-10 text-white font-SF py-1.5">
              {{ price.amount }}
            </td>
            <td class="text-10 text-white font-SF py-1.5">
              {{ price.time }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      prices: [
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
        {
          price: '6,200.41',
          amount: '1,700000',
          time: '05:35:20',
        },
      ]
    })
    return { 
      state
    }
  },
};
</script>