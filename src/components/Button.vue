<script setup>
const emit = defineEmits(["click"]);

defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "positive",
  },
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: [String, Object],
    default: null,
  },
  btnClass: {
    type: String,
    default: "",
  },
  noCaps: {
    type: Boolean,
    default: false,
  },
  unelevated: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
});

const emitClick = () => {
  emit("click");
};
</script>

<template>
  <q-btn
    :label="label"
    :type="type"
    :color="color"
    :to="to"
    :unelevated="unelevated"
    :noCaps="noCaps"
    :outline="outline"
    :class="[btnClass]"
    v-bind="$attrs"
    @click="emitClick"
  />
</template>
