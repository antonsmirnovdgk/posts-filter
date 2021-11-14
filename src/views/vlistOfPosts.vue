<template>
  <div class="container">
    <div class="search-input">
      <vInput
        v-model="search"
        :placeholder="placeholder"
      />
    </div>
    <ul class="list">
      <vItemList
        v-for="post in postsByAuthor"
        :key="post.id"
        :title="post.title"
        :description="post.body"
        :author="post.name"
      />
    </ul>
  </div>
</template>

<script>
import { getList, getUsers } from "../boot/api"
import vItemList from "../components/vItemList"
import vInput from "../components/vInput"

export default {
  name: 'listOfPosts',
  components: {
    vItemList,
    vInput
  },
  data () {
    return {
      arrayOfPosts: [],
      arrayOfAuthors: [],
      arrayOfObjects: [],
      search: '',
      placeholder: 'Filter by author...'
    }
  },
  methods: {
    async getData () {
      try {
        this.arrayOfPosts = await getList()
        this.arrayOfAuthors = await getUsers()
        this.joinObjectsByAuthor()
      } catch (err) {
        console.log(err)
      }
    },
    joinObjectsByAuthor () {
      this.arrayOfPosts.forEach((post) => {
        this.arrayOfAuthors.find((author) => {
          if (author.id === post.userId) {
            return this.arrayOfObjects.push(Object.assign(post, author))
          }
        })
      })
      return this.arrayOfObjects
    }
  },
  computed: {
    postsByAuthor () {
      return this.arrayOfObjects.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  margin: 0 auto;
  max-width: 375px;
}
</style>
