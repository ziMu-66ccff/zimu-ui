<script setup lang="ts">
defineOptions({
  name: "ZMInput",
});

const props = withDefaults(defineProps<{ prop: string }>(), {
  prop: "ZMInput",
});
// const emit = defineEmits<{ event: [id: number, name?: string] }>();
</script>

<template>
  <div class="ZMInput">
    <h4>{{ props.prop }}</h4>
    <input type="text" />
  </div>
</template>

<style scoped lang="less">
.ZMInput {
}
</style>
