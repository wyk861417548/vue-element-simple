<template>
  <!-- j-full-curbox 当前元素占满全屏  j-flex-col flex垂直布局 -->
  <div @click="$back" class="back"><i class="iconfont icon-goutongye_zuojiantou_fanhui"></i> 返回</div>

</template>

<script>
export default {
  data () {
    return {};
  },

  created(){},


  methods: {
    get(){}
  }
}
</script>
<style lang='scss' scoped>
  .back{
    display: inline-block;
    cursor: pointer;
    font-size:20px;
    color: #5C6275;
    margin-bottom: 10px;
    i{
      font-size: 20px !important;
    }
  }
</style>