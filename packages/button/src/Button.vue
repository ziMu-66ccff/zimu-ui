<script setup lang="ts">
import { hello } from "@zimu-ui/shared";

defineOptions({
  name: "ZMButton",
});

const props = withDefaults(defineProps<{ prop: string }>(), { prop: "" });
// const emit = defineEmits<{ event: [id: number, name?: string] }>();

function clickHander() {
  hello(props.prop);
}
</script>

<template>
  <h4>ZMButton</h4>
  <button class="ZMButton" @click="clickHander">ZMButton</button>
</template>

<style scoped lang="less">
.ZMButton {
}
</style>
