<template>
  <input type="text" :value="props.message" @input="handleInput" />
  <div>{{ props.message }}</div>
</template>
<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from "vue";

interface IProps {
  message?: string | number;
}

const props = withDefaults(defineProps<IProps>(), {
  message: "(내부) 메세지를 입력해주세요.",
});

// const emit = defineEmits(["update:input"]);
const emit = defineEmits<{
  (e: "update:input", value: string | number): void;
}>();

const handleInput = (event: Event) => {
  emit("update:input", (event.target as HTMLInputElement).value);
};
</script>
<style lang=""></style>
