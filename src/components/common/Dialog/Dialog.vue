<template>
 <div v-if="show">
  <el-dialog :title="title" :visible.sync="show" :width="width" :top="top" :close-on-click-modal="close" :append-to-body="appendToBody">
    <slot>

    </slot>
  </el-dialog>
 </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:"提示"
    },
    width:{
      type:String,
      default:'50%'
    },
    top:{
      type:String,
      default:'15vh'
    },

    // 是否允许点击阴影关闭弹窗
    close:{
      type:Boolean,
      default:false
    },

    //是否允许将 Dialog 自身是否插入至 body 元素上。
    appendToBody:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      show:false
    };
  },
}
</script>
<style lang='scss' scoped>
  /deep/ .el-dialog {
    width: 800px;
    .el-dialog__header{
      display: flex;
      align-items: center;
      padding: 15px 20px;
    }
    .el-dialog__body{
      padding-top:10px;
      max-height: 600px !important;
      overflow: auto;
      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 2px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      }
      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        background: #006667;
      }

      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 10px;
        background: #ededed;
      }
    }
  }

</style>