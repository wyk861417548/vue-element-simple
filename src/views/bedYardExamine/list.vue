<template>
  <div class='j-full-curbox j-flex-col'>
    <SeachGroup className="床位管理" @change="search" @resetMessage="reset">
      <template slot="content">
        <searchGroupSearchInput ref="cw" title="床位"></searchGroupSearchInput>

        <SearchGroupSelect ref="cc" title="审核状态" :option="[]"></SearchGroupSelect>
      </template>
    </SeachGroup>

    <el-card class="box-card-tabel flex-adapt" shadow="never" style="margin:0 20px 20px 20px;">

      <Table v-loading="loading" :tableHeadConfig="tableHead" :tableLoadData="tableData" :total="data.total" @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange">
        <el-table-column label="操作"  width="200px">
          <template slot-scope="scope">
            <el-button type="text" @click="openFullScreen2(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </Table>
    </el-card>

  </div>

</template>

<script>
import * as $http from '@src/api/bedYardExamine.js'
import {getChoiceData} from "@src/utils/data.js";
export default {
  data () {
    return {
      loading:false,

      searchData: {
        cw: '',
      },
      
      data:{
        // 每页数量
        limit:10,

        // 页码
        page:1,

        // 数据总量
        total:0,

        fkYlYljg: "1316568906946580480",
        
        newbedState: '',
      },

      // 表单每项配置 机构报名
      tableHead: [
        {prop:'name',label:"姓名",},
        {prop:'projectName',label:"项目"},
        {prop:'idCardNo',label:"身份证"},
        {prop:'phone',label:"手机号"},
        {prop:'state',label:"状态",value:{1:'待业中',2:'在职中',3:"已离职",4:"已辞退",5:"提交面试",6:'面试通过',7:'未到面',8:'面试未通过'}},
      ],

      // 表单数据
      tableData: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
    };
  },

  created(){
    this.getTableData();
  },

  computed: {
    choice() {
      return getChoiceData()
    }
  },

  methods: {
    // 查询机构人员列表
    getTableData(){
      this.loading = true
      $http.list(this.data).then(res=>{
        // this.tableData = res.data.list;
        this.data.total = res.data.total;
        this.loading = false
      }).catch(() => {
        this.loading = false
      });
    },

    

    handleDetail(){
      
    },

    // -----------------------------seach组件事件-----------------------
    // 搜索
    search(){
      this.data = {
        // 每页数量
        limit:10,
        // 页码
        page:1,
        // 数据总量
        total:0,
        fkYlYljg: "1316568906946580480",
      }

      Object.keys(this.searchData).forEach(item => {
        this.data[item] = this.$refs[item].data
      })

      this.getTableData();

    },
    // 重置数据
    reset() {
      Object.keys(this.searchData).forEach(item => {
        this.$refs[item].reset()
      })

      this.data = {
        // 每页数量
        limit:10,
        // 页码
        page:1,
        // 数据总量
        total:0,
        fkYlYljg: "1316568906946580480",
      }
    
      this.getTableData()
    },

     //-----------------------------分页监听-------------------------------
    // 每页数量更改
    handleSizeChange(val){
      this.data = {limit:val,page:1};
      this.getTableData();
    },

    // 页码更改
    handleCurrentChange(val){
      this.data.page = val;

      this.getTableData();
    },
  }
}
</script>
<style lang='scss' scoped>
  .header{}

  .container{}

  .footer{}

</style>