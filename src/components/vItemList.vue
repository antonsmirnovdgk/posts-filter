<template>
  <li class="list__item">
    <h2 class="list__title">
      {{ title }}
    </h2>
    <p class="list__description">
      {{ description }}
    </p>
    <span class="list__author">
      {{ author }}
    </span>
  </li>
</template>

<script>
export default {
  name: "vItemList",
  props: {
    title: {
      type: String,
      default (){
        return ''
      }
    },
    description: {
      type: String,
      default (){
        return ''
      }
    },
    author: {
      type: String,
      default (){
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
