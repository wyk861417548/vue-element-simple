<template>
  <el-cascader ref="cascader"  :props='props' :options="options" clearable style="width:100%;"  v-model="name" @change="change" ></el-cascader>
</template>

<script>
import city from "@static/json/city.min.json"
export default {
  props:{
    // 默认是
    defalutValue:{
      type:Array,
      default:()=>[]
    },

    // 配置
    props:{
      type:Object,
      default:()=>{
        return {multiple:false}
      }
    },

    // 联动数据  默认省市区
    options:{
      type:Array,
      default:()=>[...city]
    }
  },

  data () {
    return {
      name:[],
    };
  },

  created(){
    this.name = this.defalutValue;
  },


  methods: {
    // 如果不是多选 name：所选地区名称  value:所选（省市区）值
    change(value){
      if(this.props.multiple){
        this.changeMultiple(value);
        return;
      }

      let label = this.$refs['cascader'].getCheckedNodes()[0];
      if(label){
        label = label.pathLabels.join('');
      }
      this.$emit("change",{name:label,value:value})
    },

    // 如果是开启多选
    changeMultiple(value){
      let label = this.$refs['cascader'].getCheckedNodes('leafOnly');
      this.$emit("change",{name:label,value:value})
    }
  }
}
</script>
<style lang='scss' scoped>
</style>