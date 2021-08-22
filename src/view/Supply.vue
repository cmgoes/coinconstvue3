<template>
  <div>
    <div class="container">
      <div class="max-w-xxs pt-24">
        <div class="flex items-center mb-4">
          <i class="text-red-400 mr-1.5 fas fa-star"></i>
          <span
            class="text-red-500 mr-2.5 text-12 font-SF"
          >
            ETC
          </span>
          <button 
            class="text-green-darken green-gradient rounded text-11 font-SF py-1.5 px-2"
          >
            BTC
          </button>
        </div>
        <div class="mb-60">
          <div class="flex items-center justify-between mb-4">
            <div class="relative">
              <input 
                type="text" 
                name="search" 
                placeholder="Search"
                class="bg-gray-light py-2 pl-8 pr-2 text-11 text-gray-darken outline-none w-32 h-7"
              />
              <i 
                class="absolute top-1/2 left-2 fas fa-search text-11"
                style="transform: translateY(-50%)"
              ></i>
            </div>
            <div
              class="flex items-center"
            >
              <input
                id="change"
                type="checkbox"
                name="change"
                class="mr-2"
              />
              <label 
                for="change"
                class="text-12 text-gray-darken font-SF"
              >
                Change
              </label>
            </div>
            <div
              class="flex items-center"
            >
              <input
                id="volume"
                type="checkbox"
                name="volume"
                class="mr-2"
              />
              <label 
                for="volume"
                class="text-12 text-gray-darken font-SF"
              >
                Volume
              </label>
            </div>
          </div>
          <table width="100%">
            <thead>
              <tr class="text-center">
                <th class="text-10 text-gray-darken pb-3 font-SF">
                  Pair
                </th>
                <th class="text-10 text-gray-darken pb-3 font-SF">
                  Last Price
                </th>
                <th class="text-10 text-gray-darken pb-3 font-SF">
                  Change
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(pair, index) in state.pairs"
                :key="index"
                class="text-center"
              >
                <td
                  class="text-gray-darken text-11 font-SF py-2 font-SF"
                >
                  <i class="text-gray-darken text-14 mr-1.5 fas fa-star"></i>
                  {{ pair.pair }}
                </td>
                <td
                  class="text-green-darken text-11 py-2 font-SF"
                >
                  {{ pair.lastPrice }}
                </td>
                <td
                  class="text-green-darken text-11 py-2 font-SF"
                >
                  {{ pair.change }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div
            class="flex items-center justify-between mb-4"
          >
            <img 
              src="/assets/cryptocurrency.svg" 
              alt="" 
              class="w-4 h-4 mr-14"
            />
            <p
              class="text-gray-darken text-10 font-SF mb-0 flex-grow"
            >
              BTC
            </p>
            <p
              class="text-gray-darken text-10 font-SF mb-0"
            >
              No.1
            </p>
          </div>
          <ul class="pl-0 mb-0">
            <li
              class="text-gray-darken text-11 font-SF mb-2.5"
            >
              Market Cap
            </li>
            <li
              class="text-gray-darken text-11 font-SF mb-2.5"
            >
              Circulation Supply
            </li>
            <li
              class="text-gray-darken text-11 font-SF mb-2.5"
            >
              Max Supply
            </li>
            <li
              class="text-gray-darken text-11 font-SF"
            >
              Today Supply
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      pairs: [
        {
          pair: 'ETH/BTC',
          lastPrice: 0.00001556,
          change: '+1.45%',
        },
        {
          pair: 'BTC/ETH',
          lastPrice: '',
          change: '+120.45%',
        },
      ]
    })
    return { 
      state
    }
  },
};
</script>