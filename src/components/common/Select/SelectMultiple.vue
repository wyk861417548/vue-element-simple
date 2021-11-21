<template>
  <el-select  v-model="value" :placeholder="placeholder" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
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

    placeholder:{
      type:String,
      default:"请选择"
    },

    // 是否默认显示第一个
    default:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      value:'',
    };
  },

  created(){
    // if(this.default != 'false'){
    //   this.value = this.option[0].value
    // }
    this.value = this.default;
  },

  computed:{
    options(){
      return this.option;
    }
  },

  methods: {
    get(){}
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
