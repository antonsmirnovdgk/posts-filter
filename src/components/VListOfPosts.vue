<template>
  <ul class="posts-list row">
    <li
        class="posts-list__item col-sm-12 col-md-6 col-xl-3 gy-3"
        v-for="(post, index) in posts"
        :key="index"
    >
      <VCard
          :title="post.title"
          :text="post.body"
          :author-name="post.name"
      />
    </li>
  </ul>
</template>

<script>
import VCard from "./VCard";

export default {
  name: "VListOfPosts",
  components: {
    VCard
  },
  props: {
    posts: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style  scoped>

</style>
