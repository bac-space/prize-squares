<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style scoped>
button {
  font: inherit;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  border: 0;
  border-style: none;
  border-radius: 0.55rem;
  background-color: var(--btn-light-color);
  color: #000000;
  line-height: 1.2;
  white-space: nowrap;
  padding: 1rem 3rem;
  margin: 0.45rem;
  cursor: pointer;
}
</style>
