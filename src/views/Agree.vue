<template>
  <div>Agree</div>
  <p>
    <MyCheckbox id="myCheckbox" v-model="checked" @change="handleChange" />
    <label for="myCheckbox">{{ label }}</label>
  </p>
</template>
<script lang="ts">
export default {
  name: "PageAgree",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import MyCheckbox from "@/components/MyCheckbox.vue";

const checked = ref(false);
const label = ref("동의하지않습니다.");

const handleChange = (isChecked: boolean) => {
  checked.value = isChecked;
  label.value = isChecked ? "동의합니다." : "동의하지않습니다.";
};
</script>
