<template>
  <input type="checkbox" :checked="checked" @change="handleChange" />
</template>
<script lang="ts">
export default {
  name: "MyCheckbox",
};
</script>
<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults } from "vue";

interface IProps {
  checked?: boolean;
}

const emit = defineEmits(["change"]);

withDefaults(defineProps<IProps>(), {
  checked: false,
});

const handleChange = (e: Event) => {
  emit("change", (e.target as HTMLInputElement).checked);
};
</script>
