<template>
  <div class="home">
    <HelloWorld msg="메세지다." />
    <Message
      :message="message"
      @update:input="(value) => handleInputMessage(value)"
    ></Message>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Message from "@/components/Message.vue";

interface IData {
  message: string | number;
}

const message: Ref<IData["message"]> = ref("HomeView에서 보내는 메시지");
const handleInputMessage = (value: IData["message"]) => {
  message.value = value;
};
</script>
