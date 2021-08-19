<template>
  <div class="area-height border-b border-solid border-white-light p-4 pr-7">
    <div class="flex items-center justify-between mb-4">
      <p
        class="mb-0 text-white text-14"
      >
        Purchase
      </p>
      <div class="flex items-center">
        <p class="mb-0 text-green-darken underline text-10 mr-4">VIP 0</p>
        <a href="#">
          <i class="text-white fas fa-ellipsis-v"></i>
        </a>
      </div>
    </div>
    <div class="pb-4 border-white-light border-b border-solid">
      <div class="flex border border-solid border-green-light rounded">
        <button
          class="w-1/2 bg-green-lighten text-green-darken py-2 text-10 uppercase rounded-l"
        >
          Buy
        </button>
        <button
          class="w-1/2 text-green-darken py-2 text-10 rounded-r"
        >
          Sell
        </button>
      </div>
    </div>
    <div class="flex justify-between items-center mb-3 -mt-px">
      <div
        class="text-green-darken border-t-2 border-green-darken border-solid text-12 px-2 py-3"
      >
        Market
      </div>
      <div
        class="flex justify-between items-center"
      >
        <div
          class="text-gray-darken text-12 mr-5"
        >
          Limit
        </div>
        <div
          class="flex items-center"
        >
          <img 
            width="20px" 
            class="mr-1"
            src="/assets/error.svg" 
            alt=""
          />
          <select class="bg-transparent text-gray-darken text-12">
            <option>OCO</option>
            <option>OCO</option>
            <option>OCO</option>
          </select>
        </div>
      </div>
    </div>
    <div>
      <p class="text-gray-darken font-SF text-12 mb-4">
        <i class="text-gray-darken fas fa-wallet mr-1"></i>
        0.00623252 USDT
      </p>
      <form>
        <div
          class="border border-solid border-gray-lighter rounded py-2 px-4 flex mb-3"
        >
          <p class="text-gray-darken text-10 font-SF">
            Price
          </p>
          <input
            type="text"
            required
            value="9425.00"
            class="w-full text-white bg-transparent text-10 font-SF text-right outline-none"
          />
          <p class="text-gray-darken text-10 font-SF text-right ml-2">
            USDT
          </p>
        </div>
        <div
          class="border border-solid border-gray-lighter rounded py-2 px-4 flex mb-4"
        >
          <p class="text-gray-darken text-10 font-SF">
            Amount
          </p>
          <input
            type="text"
            required
            value=""
            class="w-full text-white bg-transparent text-10 font-SF text-right outline-none"
          />
          <p class="text-gray-darken text-10 font-SF text-right ml-4">
            BTC
          </p>
        </div>
        <div class="flex items-center mb-4">
          <div 
            class="w-2 h-2 rounded-full border border-solid border-green-darken"
          ></div>
          <div
            class="h-0.5 flex-grow"
            style="backgroundImage: linear-gradient(to right, #92CB5A , #6E87A5);"
          ></div>
          <div 
            class="w-2 h-2 rounded-full bg-gray-darken"
          ></div>
          <div
            class="h-0.5 bg-gray-lighter flex-grow"
          ></div>
          <div 
            class="w-2 h-2 rounded-full bg-gray-darken"
          ></div>
          <div
            class="h-0.5 bg-gray-lighter flex-grow"
          ></div>
          <div 
            class="w-2 h-2 rounded-full bg-gray-darken"
          ></div>
          <div
            class="h-0.5 bg-gray-lighter flex-grow"
          ></div>
          <div 
            class="w-2 h-2 rounded-full bg-gray-darken"
          ></div>
        </div>     
        <div
          class="border border-solid border-gray-lighter rounded py-2 px-4 flex mb-6"
        >
          <p class="text-gray-darken text-10 font-SF">
            Price
          </p>
          <input
            type="text"
            required
            value="9425.00"
            class="w-full text-white bg-transparent text-10 font-SF text-right outline-none"
          />
          <p class="text-gray-darken text-10 font-SF text-right ml-2">
            USDT
          </p>
        </div>
        <div
          class="pr-4 flex mb-6"
        >
          <p class="text-gray-darken text-10 font-SF whitespace-nowrap">
            Commision (0.2%)
          </p>
          <p class="text-gray-darken text-10 font-SF text-right w-full">
            0.000004
          </p>
          <p class="text-gray-darken text-10 font-SF text-right ml-2">
            USDT
          </p>
        </div>
        <div>
          <button
            class="w-full py-2 rounded text-green-darken text-10 bg-green-lighten"
          >
            Buy BTC
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import { reactive, computed } from "vue";
export default {
  watch: {
  },
  setup() {
  },
};
</script>