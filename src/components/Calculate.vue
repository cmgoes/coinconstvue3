<template>
  <div 
    class="area-height p-4 pl-7 2xl:pl-4 border-b border-solid border-white-light"
  >
    <div 
      class="flex justify-between items-center mb-5"
    >
      <div>
        <button
          class="w-6 h-6 button-gradient rounded mr-3"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
        <button
          class="w-6 h-6 rounded mr-3"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
        <button
          class="w-6 h-6 rounded"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
      </div>
      <div>
        <select
          class="w-11 button-gradient rounded text-gray-darken text-11 font-SF py-1"
        >
          <option value="0.01">0.01</option>
          <option value="0.02">0.02</option>
          <option value="0.03">0.03</option>
          <option value="0.04">0.04</option>
          <option value="0.05">0.05</option>
        </select>
      </div>
    </div>
    <div class="mb-44">
      <table width="100%">
        <thead>
          <tr class="text-center">
            <th class="text-gray-darken text-10 font-SF py-2.5">Price(USD)</th>
            <th class="text-gray-darken text-10 font-SF py-2.5">Amount(BTC)</th>
            <th class="text-gray-darken text-10 font-SF py-2.5">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-red-lighten text-center">
            <td class="text-red-darken text-12 font-SF py-1.5 rounded-l">
              9453.3
            </td>
            <td class="text-white text-12 font-SF py-1.5">
              0.025476
            </td>
            <td class="text-white text-12 font-SF py-1.5 rounded-r">
              0.025476
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <table width="100%">
        <thead>
          <tr class="text-center">
            <th
              class="text-14 py-2 text-green-darken flex items-center justify-center"
            >
              <p class="mb-0 mr-1">9,325.50</p>
              <i class="text-11 fas fa-arrow-up"></i>
            </th>
            <th
              class="text-14 text-white py-2"
            >
              9,325.23
            </th>
            <th
              class="text-10 text-green-darken py-2"
            >
              More
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td
              class="text-10 text-green-darken"
            >
              9425.65
            </td>
            <td
              class="text-10 text-white"
            >
              1.7000
            </td>
            <td class="text-10 text-white">
              <div class="bg-green-lighten py-1 px-1.5 rounded">
                995,16201
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from "vue";
export default {
  setup() {
  },
};
</script>