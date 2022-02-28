<template>
  <div class="home">
    <ProviderChildren />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import ProviderChildren from "@/components/providerChildren";

const message = ref("메세지다.");
provide("message", message);
</script>
