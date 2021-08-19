<template>
  <div class="pl-7 pr-7 2xl:pr-4 border-b 2xl:border-none border-solid border-white-light">
    <div class="flex justify-between mb-4">
      <div class="flex">
        <div
          class="text-white text-12 font-SF py-4 px-2 border-t-2 border-solid border-green-darken"
        >
          Open Orders
          <span
            class="text-gray-darken ml-2"
          >
            0
          </span>
        </div>
        <div
          class="text-white text-12 font-SF py-4 px-3 border-t-2 border-solid border-transparent"
        >
          Open History
        </div>
        <div
          class="text-white text-12 font-SF py-4 px-3 border-t-2 border-solid border-transparent"
        >
          Trade History
        </div>
        <div
          class="text-white text-12 font-SF py-4 px-3 border-t-2 border-solid border-transparent"
        >
          Funds
        </div>
        <div
          class="text-white text-12 font-SF py-4 px-3 border-t-2 border-solid border-transparent"
        >
          Staking Vault
        </div>
        <div
          class="text-white text-12 font-SF py-4 px-3 border-t-2 border-solid border-transparent"
        >
          Activity
        </div>
      </div>
      <div class="flex items-center">
        <input
          id="hideotherpair"
          type="checkbox"
          class="mr-1"
        />
        <label 
          for="hideotherpair"
          class="text-gray-darken text-10"
        >
          Hide Other Pairs
        </label>
      </div>
    </div>
    <div class="pb-5">
      <table width="100%">
        <thead>
          <tr class="text-center">
            <th class="text-10 text-gray-darken font-SF">
              Date
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Pair
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Type
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Side
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Price
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Amount
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Filled
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Total
            </th>
            <th class="text-10 text-gray-darken font-SF">
              Trgger Conditions
            </th>
            <th class="text-10 text-yellow-darken font-SF">
              Cancel All
            </th>
          </tr>
        </thead>
        <tbody
          v-for="(history, index) in state.historys"
          :key="index"
        >
          <tr class="text-center">
            <td
              class="text-10 text-gray-darken font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.date }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.pair }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.type }}
            </td>
            <td
              class="text-10 text-green-darken font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.side }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.price }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.amount }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.filled }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.total }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              {{ history.condition }}
            </td>
            <td
              class="text-10 text-white font-SF border-b border-solid py-4"
              :class="index == state.historys.length-1 ? 'border-transparent' : 'border-white-light'"
            >
              Cancel
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
      historys: [
        {
          date: '06-23 10:25:15',
          pair: 'BTC/USD',
          type: 'Limit',
          side: 'Buy',
          price: '9,620.00',
          amount: '0.005270',
          filled: '0.005270',
          total: '51.88',
          condition: '-'
        },
        {
          date: '06-23 10:25:15',
          pair: 'ETH/USD',
          type: 'Limit',
          side: 'Buy',
          price: '19,620.00',
          amount: '0.005270',
          filled: '0.005270',
          total: '51.88',
          condition: '-'
        }
      ]
    })
    return { 
      state
    }
  },
};
</script>