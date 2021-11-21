<template>
  <el-col :span="span">
    <p class="mb-10">{{title}}:</p>
    <div class="flex-align">
      <el-input v-model="data[0]" placeholder="请输入内容"></el-input>
      <span class="iconfont icon-fuhao pl-10 pr-10"></span>
      <el-input v-model="data[1]" placeholder="请输入内容"></el-input>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "rangeInput",
  props: {
    // 组件宽度
    span: {
      type: Number,
      default: 7
    },
    // 标题名称
    title: {
      type: String,
      default: ''
    },
    // 默认数据
    defaultValue: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      data: []
    }
  },
  created() {
    this.data = this.defaultValue
  },
  methods:{
    reset() {
      this.data = []
    }
  }
}
</script>

<style scoped>

</style>