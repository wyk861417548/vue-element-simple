<template>
  <el-select  v-model="value" :placeholder="placeholder" :multiple='multiple' filterable>
    <el-option
      v-for="item in options"
      :key="item[custom.value]"
      :label="item[custom.label]"
      :value="item[custom.value]">
    </el-option>
  </el-select>

</template>

<script>
export default {
  props:{
    // 选择框内容
    option:{
      type:Array,
      default:()=>[]
    },
    // 通过名字 区分哪个select组件
    name:{
      type:String,
      default:'name',
    },

    // 提示语
    placeholder:{
      type:String,
      default:"请选择"
    },

    // 默认值
    default:{
      type:String,
      default:''
    },

    // 是否支持多选
    multiple:{
      type:Boolean,
      default:false
    },

    // 自定义 名字 值 字段
    custom:{
      type:Object,
      default:()=>{
        return {
          label:'label',
          value:'value'
        }
      }
    }
  },
  data () {
    return {
      value:'',
    };
  },

  created(){
    this.value = this.default;
  },

  computed:{
    options(){
      return this.option;
    }
  },

  methods: {
  },

  watch: {
    value(newVal){
      this.$emit("change",{name:this.name,value:newVal})
    }
  }
}
</script>
<style lang='scss' scoped>
  
</style>
