<template>
  <button class="my-button" @click="$emit('click', $event)">{{ label }}</button>
</template>

<script setup>

defineProps({
  label: {
    type: String,
    required: true
  }
})

defineEmits(['click'])
</script>

<style lang="scss">
.my-button {
  background: #1411ba;
  color: white;
  padding: .5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
}
</style>
