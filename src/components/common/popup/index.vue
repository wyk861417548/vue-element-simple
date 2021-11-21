<template>
  <!-- j-full-curbox 当前元素占满全屏  j-flex-col flex垂直布局 -->
  <div v-if="show">
    <!-- 新增平台订单弹窗 -->
    <el-dialog :title="title" :visible.sync="show" :fullscreen="fullscreen" :close-on-click-modal="close">
      <el-tabs v-model="activeName" style="position:relative;" @tab-click="changeTab">
        <slot name="Step1">
          <el-tab-pane label="需求信息" name="first">
            我是内容一
          </el-tab-pane>
        </slot>

        <slot name="Step2">
          <el-tab-pane label="出价管理" name="second">
            我是内容二
          </el-tab-pane>
        </slot>

        <slot name="Step3">
          <el-tab-pane label="招聘管理" name="third">
            我是内容三
          </el-tab-pane>
        </slot>
      </el-tabs>

      <div class="footer" v-if="operation">
        <el-button   @click="change('prev')" v-show="count!=0">上一步</el-button>
        <el-button type="primary"  @click="change('next')" v-show="count!=2">下一步</el-button>
        <div v-show="count==2" style="display:inline-block;">
          <slot name="btn">
            <el-button type="primary"  @click="onSubmit">下发</el-button>
          </slot>
        </div>
       
        
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "我是标题",
    },

    operation:{
      type:Boolean,
      default:true
    },

     // 是否允许点击阴影关闭弹窗
    close:{
      type:Boolean,
      default:false
    }
  },

  data() {
    return {
      show: false,
      // 是否全屏
      fullscreen: false,

      activeName: "first",

      count:0,

      name:{
        0:"first",

        1:"second",

        2:'third'
      },

       // 招聘需求
      content:"是否确定下发",
    };
  },

  created() {},

  methods: {
    // 上一步下一步监听
    change(value) {
      value == 'prev'?this.count--:this.count++;

      this.activeName = this.name[this.count];
    },

    // 点击选项卡
    changeTab(data){
      this.count = data.index;
    },

    // 下发
    onSubmit(){
      this.$config.confirm({text:this.content}).then(()=>{
        this.$emit("submit")
      })
    },
  },
};
</script>
<style lang='scss' scoped>

  /deep/ .el-dialog {
    width: 800px;
    .el-dialog__body{
      padding:0px 20px 20px;
    }
    .el-tabs__content{
      height: 500px !important;
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
        background: #006667 !important;
      }

      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        border-radius: 10px;
        background: #ededed;
      }
    }
  }
  
  .footer{
    border-top:2px solid #E4E7ED;
    padding-top: 20px;
    text-align: center;
    .el-button{
      margin: 0 20px;
    }
  }
</style>
