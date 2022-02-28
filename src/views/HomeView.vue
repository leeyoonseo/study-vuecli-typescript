<template>
  <div class="home">
    <Children :parent-message="message" />
    <button @click="changeParentMessage">메시지를 바꾼다.</button>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import Children from "@/components/children.vue";

interface IData {
  message: string | number;
}

const message: Ref<IData["message"]> = ref("어서오세요.");

const changeParentMessage = () => {
  message.value = "안녕히가세요.";
};
</script>
