<template>
  <div>
    <h1>Counter</h1>
    <div>{{ store.counter }}</div>
    <button @click="handleIncrement">증가</button>
    <button @click="handleDecrement">감소</button>
  </div>
</template>
<script setup lang="ts">
import {} from "vue";
import { storeCounter } from "@/store/counter";

const store = storeCounter();
const handleIncrement = () => {
  store.increment();
};
const handleDecrement = () => {
  if (store.counter === 0) {
    alert("0입니다.");
    return;
  }
  store.decrement();
};
</script>
