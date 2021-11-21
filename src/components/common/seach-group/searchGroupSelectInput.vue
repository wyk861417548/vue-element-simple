<template>
  <el-col :span="span">
    <p class="mb-10">{{title}}:</p>
    <el-input placeholder="请输入内容"  v-model="data.input" class="input-with-select" style="wdith:100%;">
      <el-select v-model="data.value" value-key="value"  slot="prepend" placeholder="请选择" style="width:130px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-input>
  </el-col>
</template>

<script>
export default {
  name: "selectInput",
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
    // select选择框数据
    options: {
      type: Array,
      default: () => {
        return [{value: 'projectName',label: '项目名称'},{value: 'companyName',label: '企业'},{value: 'jobType',label: '职位类型'}]
      }
    }
  },
  data() {
    return {
      // select和input值
      data: {
        input: '',
        value: this.options[0].value
      }
    }
  },
  methods: {
    reset() {
      this.data = {
        input: '',
        value: this.options[0].value
      }
    }
  }
}
</script>

<style scoped>

</style>