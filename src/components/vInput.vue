<template>
  <label for="input"></label>
  <input
    class="input"
    id="input"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
  >
</template>

<script>
export default {
  name: "vInput",
  props: {
    modelValue: {
      type: String,
      default (){
        return ' '
      }
    },
    placeholder: {
      type: String,
      default (){
        return ' '
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 25px;

  border: 1px solid grey;
  border-radius: 5px;
}

.input:focus {
  outline: 1px solid #0080FF;
}

.input:hover {
  border-color: #0080FF;
}

</style>
