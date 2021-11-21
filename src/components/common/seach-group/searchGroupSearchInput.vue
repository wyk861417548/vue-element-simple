<template>
  <el-col :span="span">
    <p class="mb-10" v-if="title">{{title}}:</p>
    <el-input :placeholder="placeholder"  v-model="data" class="input-with-select" style="width:100%;"></el-input>
  </el-col>
</template>

<script>
export default {
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
    // 占位文字
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data() {
    return {
      data: ''
    }
  },
  methods: {
    reset() {
      this.data = ''
    }
  }
}
</script>

<style scoped>

</style>