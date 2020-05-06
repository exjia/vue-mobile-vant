<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-cell :value="1111"></van-cell>
    <van-button type="primary">默认按钮</van-button>
    <div v-for="(item,index) in taskList" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'example',
  components: {
    HelloWorld
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      taskList: ({ example }) => example.taskList
    })
  },
  methods: {
    ...mapActions(['handleQueryBygetTaskList'])
  },
  mounted() {
    this.handleQueryBygetTaskList()
  }
}
</script>
