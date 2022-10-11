<template>

  <button class = "btn btn-primary" @click="increment">in {{counter}}</button>
  <p :class="counter % 2 === 0 ? 'blue-text' : 'red-text'">finalPrice : {{finalPrice}}</p>

</template>

<script lang="ts">  
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data: function () {
    return {
      productCostBreakdown: {
        basePrice: 100,
        taxRate: 10,
        discountRate: 5
      },
      counter:0
    } 
  },
  computed: {
    finalPrice: function () {
      return this.productCostBreakdown.basePrice
        + (this.productCostBreakdown.basePrice * this.productCostBreakdown.taxRate) / 100
        + (this.productCostBreakdown.basePrice * this.productCostBreakdown.discountRate) / 100;
    }
  },
  methods: {
    increment() {
      ++this.counter;
    }
  }
});
</script>

<style scoped>
.red-text {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: red;
    font-size: 5rem;
  }

  .blue-text {
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color: blue;
      font-size: 5rem;
    }
</style>
