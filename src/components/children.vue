<template>
  <div>
    <p>{{ alertMessage }}</p>
    <p>
      {{ parentMessage }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheChildren",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { ref, Ref, withDefaults, defineProps, watch } from "vue";

interface IProps {
  parentMessage?: string | number;
}

const props = withDefaults(defineProps<IProps>(), {
  parentMessage: "",
});

const propsRef = ref(props);
const alertMessage: Ref<string> = ref("");

watch(
  () => propsRef.value.parentMessage,
  (newVal, oldVal) => {
    console.log("watch!!");
    alertMessage.value = `메시지가 {${oldVal}}에서 {${newVal}}로 업데이트 되었습니다.`;
  }
);
</script>
