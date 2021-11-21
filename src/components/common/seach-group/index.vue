<template>
  <el-card class="box-card" shadow="never" style="margin:-1px 20px 20px 20px;">
    <div class="mb-20 j-flex">
      <slot name="header">
        <p>{{className}} - {{title}}</p>
      </slot>
    </div>
    
    <el-row :gutter="20">
      <slot name="content"></slot>
    </el-row>

    <div class="search">
      <el-button :loading="loading" size="medium" type="primary" @click="search">搜索</el-button>
      <el-button :loading="loading" size="medium" class="" @click="reset">重置</el-button>
    </div>


  </el-card>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '订单管理'
    },
    // 是否展示金额
    showMoney: {
      type: Boolean,
      default: false
    },
    // 金额
    billSum: {
      type: Number,
      default: 0
    },

    loading:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
       //页面内容标题
      title:"",
    }
  },

  created(){
    this.title = sessionStorage.title;
  },

  methods:{
    // 重置
    reset(){
      this.$emit('resetMessage')
    },

    // 搜索
    search(){
      this.$emit("change")
    },
  }
}
</script>

<style lang="scss" scoped>
  .search{
    margin-top: 10px;
    text-align: right;
  }

  // input 和select 嵌套导致select 背景显示灰色
  /deep/ .el-input-group__prepend{
    background: #fff !important;
  }

</style>