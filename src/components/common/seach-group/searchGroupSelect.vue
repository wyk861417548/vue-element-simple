<template>
  <el-col :span="span">
    <p v-if="useTitle" class="mb-10">{{title}}:</p>
    <el-select style="width: 100%"  v-model="data" :placeholder="placeholder" :multiple='multiple' filterable>
      <el-option
        v-for="item in options"
        :key="item[custom.value]"
        :label="item[custom.label]"
        :value="item[custom.value]">
      </el-option>
    </el-select>
  </el-col>
</template>

<script>
export default {
  name: 'searchGroupSelect',
  props:{
    // 使用标题
    useTitle: {
      type: Boolean,
      default: true
    },
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
      data: ''
    };
  },

  created(){
    this.data = this.default;
  },

  computed:{
    options(){
      return this.option;
    }
  },

  methods: {
    reset() {
      this.data = ''
    }
  }

}
</script>
<style lang='scss' scoped>

</style>