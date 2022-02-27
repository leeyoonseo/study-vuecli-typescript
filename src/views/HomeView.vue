<template>
  <div class="home">
    <message></message>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Message from "@/components/Message.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    Message,
  },
});
</script>
