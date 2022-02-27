<template>
  <input type="text" v-model="message" />
  <div>{{ message }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheMessage",
  data() {
    return {
      message: "메세지를 입력해주세요.",
    };
  },
});
</script>
<style lang=""></style>
