<template>
  <div>children:{{ parentMessage }}</div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  parentMessage: String,
});
</script>
<style lang=""></style>
