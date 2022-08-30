<template>
  <div class="container">
    <VInput
        class="mb-md-5 w-25 mx-auto"
        v-model="search"
        placeholder="Filter by author..."
    />
    <VListOfPosts :posts="postsByAuthor"/>
  </div>
</template>

<script>
import VInput from "../components/VInput";
import VListOfPosts from "../components/VListOfPosts";
import {getList, getUsers} from "../api/api";

export default {
  name: "VPublications",
  components: {
    VInput,
    VListOfPosts
  },
  data() {
    return {
      posts: [],
      search: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      try {
        const posts = await getList();
        const authors = await getUsers();
        this.joinObjectsByAuthor(posts, authors)
      } catch (err) {
        console.log(err)
      }
    },
    joinObjectsByAuthor (posts, authors) {
      this.posts = posts.map((post) => ({
        ...post,...authors.find((author) => author.id === post.userId)}))
    }
  },
  computed: {
    postsByAuthor () {
      return this.posts.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
}
</script>

<style scoped>

</style>
