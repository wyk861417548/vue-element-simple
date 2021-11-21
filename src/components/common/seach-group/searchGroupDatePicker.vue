<template>
  <el-col :span="span">
    <p class="mb-10">{{title}}:</p>
    <el-date-picker
      style="width:100%;"
      v-model="data"
      :type="type"
      :picker-options="type=='daterange'?pickerOptions:''"
      :value-format="format"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
      >
    </el-date-picker>
  </el-col>
</template>

<script>
export default {
  name: 'searchGroupDatePicker',
  props:{
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
    // 通过名字 区分哪个select组件
    name:{
      type:String,
      default:'name',
    },

    type:{
      type:String,
      default:"date"
    },

    format:{
      type:String,
      default:"yyyy-MM-dd"
    }
  },
  data () {
    return {
      data:[],
      // 日期选择 带带快捷选项 配置
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
    };
  },

  created(){
  },


  methods: {
    reset() {
      this.data = []
    }
  }
}
</script>
<style lang='scss' scoped>

</style>