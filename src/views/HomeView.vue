<template>
  <div class="home">
    <h1>{{ state.title }}</h1>
    <ProviderChildren />

    <button v-click-outside="() => handleClickOutside()">
      directive 테스트 버튼
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, readonly, reactive } from "vue";
import ProviderChildren from "@/components/providerChildren";
// import log from "@/utils/log";

const state = reactive({
  title: "타이틀",
});
const message = ref("메세지다.");
provide("message", readonly(message));

// log();
function handleClickOutside() {
  console.log("handleClickOutside");
}
</script>
