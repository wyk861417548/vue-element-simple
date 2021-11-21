<template>
  <el-dropdown :trigger='trigger'>
   
    <span class="el-dropdown-link">
      <slot name="title">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </slot>
    </span>
    
    
    <el-dropdown-menu slot="dropdown">
      <slot name="menu">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </slot>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props:{
    trigger:{
      type:String,
      default:'hover'
    }
  },
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
<style lang='scss' scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
  text-align: center;
}

.el-dropdown-menu{
  text-align: center;
}
</style>