<template>
  <div class="mb-2 card">
    <div class="card-body">
      <h5 class="card-title text-primary text-start">
        {{ title }}
      </h5>
    </div>
    <p class="text-start p-3">
      {{ text }}
    </p>
    <p class="card-text text-start p-3">
      <small class="text-muted">
        {{ authorName }}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  name: "VCard",
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    text: {
      type: String,
      default() {
        return ''
      }
    },
    authorName: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
