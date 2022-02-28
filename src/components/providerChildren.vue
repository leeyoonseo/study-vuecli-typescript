<template>
  <div>
    <p>ProviderChildren</p>
    <p>inject: {{ message }}</p>
  </div>
</template>
<script lang="ts">
export default {
  name: "ProviderChildren",
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { inject } from "vue";

const message = inject("message");
</script>
