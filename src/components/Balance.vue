<template>
  <div class="p-4 pr-7">
    <p
      class="text-white text-14 font-SF mb-4"
    >
      Balance
    </p>
    <div class="flex mb-5">
      <button
        class="w-1/2 py-2 text-green-darken border-solid border border-green-darken text-10 mr-2 rounded hover:bg-green-lighten"
      >
        Deposit
      </button>
      <button
        class="w-1/2 py-2 text-green-darken border-solid border border-green-darken text-10 rounded hover:bg-green-lighten"
      >
        Withdraw
      </button>
    </div>
    <div>
      <div class="flex justify-between mb-3">
        <p class="text-10 text-white mb-0">
          BTC
          <span
            class="text-green-darken"
          >
            Available
          </span>
        </p>
        <p class="text-10 text-white mb-0">
          0.006547489
        </p>
      </div>
      <div class="flex justify-between mb-3">
        <p class="text-10 text-white mb-0">
          ETH
          <span
            class="text-green-darken"
          >
            Available
          </span>
        </p>
        <p class="text-10 text-white mb-0">
          13.0584655
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>