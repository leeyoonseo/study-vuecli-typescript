<template>
  <div class="home">
    <h1>{{ state.title }}</h1>
    <ProviderChildren />

    <button @click="handleDebounceTest">Debounce 테스트</button>

    <button v-click-outside="() => handleClickOutside()">
      directive 테스트 버튼
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch, readonly, reactive } from "vue";
import ProviderChildren from "@/components/providerChildren";
// import log from "@/utils/log";
import { storeAuth } from "@/store/auth";

const store = storeAuth();
console.log("store", store);
// store.$patch({
//   name: "rename",
// });

// watch(
//   () => store,
//   (state) => {
//     console.log("watch!!", state.name);
//   },
//   { deep: true }
// );

const state = reactive({
  title: "타이틀",
});
const message = ref("메세지다.");
provide("message", readonly(message));

// log();
function handleClickOutside() {
  //
}

function handleDebounceTest() {
  store.handleClick();
}
</script>

<!-- 참고: https://vueschool.io/articles/vuejs-tutorials/pinia-an-alternative-vue-js-store/ -->
