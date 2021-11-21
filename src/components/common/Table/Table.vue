<template>
  <!-- j-full-curbox 当前元素占满全屏  j-flex-col flex垂直布局 -->
  <div ref="tableWrapper" style="width:100%;height:100%;">
 
    <el-table @selection-change="handleSelectionChange" :data="tableData" :height="height || tableH==0?150:tableH">
      <el-table-column
        v-if="selection"
        type="selection"
        width="70"
        fixed="left"
        :selectable="selectable"
        >
      </el-table-column>

      <!--mode:是否开启编辑模式   checked:表格某列是否能够点击  value:后端穿过来的值所对应的名称 -->
      <el-table-column :prop="item.prop" :label="item.label" :width="item.width" :fixed='item.fixed' v-for='(item,index) in tableHead' :key='index'>
        <template slot-scope="scope">
          <div v-if="scope.row[item.prop] == 0 || scope.row[item.prop] ">
            <p v-if="!item.checked">
              <span v-if="!item.value">{{scope.row[item.prop]}}</span>
              <span v-if="item.value">{{item.value[scope.row[item.prop]]}}</span>
            </p>
            <p v-if="item.checked" :class="{'active':item.checked}" type="text"  @click="handleChecked(scope.row)">{{scope.row[item.prop]}} </p>
          </div>

          <div v-if="!scope.row[item.prop] && scope.row[item.prop] !== 0">/</div>
          
        </template>
      </el-table-column>

      <!-- 按钮插槽 -->
      <slot></slot>
      
    </el-table>

    <div class="block" style="text-align:center;padding-top:20px;box-sizing:border-box;" ref="pagination" v-if="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,20,30,40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>

</template>

<script>
export default {
  props:{
    // 表头配置
    tableHeadConfig:{
      type:Array,
      default:()=>[]
    },
    
    // 数据
    tableLoadData:{
      type:Array,
      default:()=>[]
    },

    // 是否显示分页  默认显示
    pagination:{
      type:Boolean,
      default:true
    },

    // 勾选框  默认不选中
    selection:{
      type:Boolean,
      default:false
    },

    total:{
      type:Number,
      default:0
    },

    topHight:{
      type:Number,
      default:0
    },

    // 
    height:{
      type:String,
      default:''
    }
  },
  data () {
    return {
      currentPage:0,

      tableH:0
    };
  },

  created(){
    this.fetTableHeight();
  },

  computed:{
    tableData(){
      return this.tableLoadData;
    },

    // 头部配置
    tableHead(){
      return this.tableHeadConfig;
    }
  },
  mounted(){
   
  },

  methods: {
    resetHeight() {
      return new Promise((resolve) => {
        this.tableH = 0
        resolve()
      })
    },
    // 设置table高度
    fetTableHeight() {
      this.resetHeight().then(() => {
        if(this.$refs.tableWrapper.getBoundingClientRect().height != 0){
          let pagination =this.pagination?this.$refs.pagination.getBoundingClientRect().height:0;
          this.tableH = this.$refs.tableWrapper.getBoundingClientRect().height -pagination-this.topHight;
        }
      })
    },

     // 监听勾选的行
    handleSelectionChange(data){
      this.$emit('handleSelectionChange',data)
    },

     // 监听当前行是否可选  show:true 禁止
    selectable(row){
      return !row.show;
    },

    // -----------------------------分页---------------------
    // 分页每页数更改
    handleSizeChange(val) {
      this.$emit('handleSizeChange',val)
    },
    // 分页页数更改
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange',val)
    },

    // 表单上 的某列数据可以点击 
    handleChecked(row) {
      this.$emit('change',row)
    },
  },

  watch:{
    tableLoadData(){
      this.fetTableHeight();
    }
  }
}
</script>
<style lang='scss' scoped>
  .active{
    color:#409EFF;
    cursor: pointer
  }

  /deep/ .el-table__body-wrapper{
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 2px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      background: #999;
    }

    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      border-radius: 10px;
      background: #ededed;
    }
  }
</style>