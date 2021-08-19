<template>
  <div class="border-b border-solid border-white-light">
    <div 
      class="container flex flex-col lg:flex-row justify-between items-center py-6"
    >
      <div
        class="flex flex-col md:flex-row items-center mb-5 lg:mb-0"
      >
        <div
          class="text-white text-20 font-SFBold mb-4 md:mr-20 md:mb-0"
        >
          Logo
        </div>
        <div 
          class="flex items-center md:mr-16 mb-4 md:mb-0"
        >
          <p 
            class="text-white text-14 font-SFBold mb-0 mr-3"
          >
            BTC/USD
          </p>
          <div 
            class="border-solid border-green-darken border rounded w-5 h-4 text-center"
          >
            <p
              class="text-green-darken text-10 mb-0"
            >
              5x
            </p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row">
          <div class="xs:mb-2 sm:mr-6">
            <p
              class="text-red-darken text-12 font-SF mb-1"
            >
              9,495.48
            </p>
            <p
              class="text-gray-darken text-12 font-SF mb-1"
            >
              $9,495.48
            </p>
          </div>
          <div class="xs:mb-2 sm:mr-6">
            <p
              class="text-gray-darken text-12 font-SF mb-1"
            >
              24h Change
            </p>
            <p
              class="text-green-darken text-12 font-SF mb-1"
            >
              3.16+0.03%
            </p>
          </div>
          <div class="xs:mb-2 sm:mr-6">
            <p
              class="text-gray-darken text-12 font-SF mb-1"
            >
              24h High
            </p>
            <p
              class="text-white text-12 font-SF mb-1"
            >
              9,589.00
            </p>
          </div>
          <div class="xs:mb-2 sm:mr-6">
            <p
              class="text-gray-darken text-12 font-SF mb-1"
            >
              24h Low
            </p>
            <p
              class="text-white text-12 font-SF mb-1"
            >
              9,400.00
            </p>
          </div>
          <div>
            <p
              class="text-gray-darken text-12 font-SF mb-1"
            >
              24h Volume
            </p>
            <p
              class="text-white text-12 font-SF mb-1"
            >
              398,250,846.06 USDT
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <a 
          class="mr-2"
          href="#"
        >
          <img src="/assets/help.svg" alt=""/>
        </a>
        <a 
          class="mr-2"
          href="#"
        >
          <img src="/assets/notification.svg" alt=""/>
        </a>
        <a href="#">
          <img src="/assets/settings.svg" alt=""/>
        </a>
      </div>
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