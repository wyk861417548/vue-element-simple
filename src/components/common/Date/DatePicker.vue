<template>
  <el-date-picker
    style="width:100%;"
    v-model="date"
    :type="type"
    :picker-options="type=='daterange'?pickerOptions:''"
    :value-format="format"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    align="right"
    @change='change'>
  </el-date-picker>

</template>

<script>
export default {
  props:{
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
      date:"",
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
    change(value){
      this.$emit("change",{name:this.name,value:value})
    }
  }
}
</script>
<style lang='scss' scoped>

</style>