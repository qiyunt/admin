<template>

  <div style="margin-bottom: 10px;">
    <el-button v-on:click="hanleAdd" type="primary" size="small">添加</el-button>
  </div>


  <el-table :data="tableData" border stripe  style="width: 100%" >
    <el-table-column prop="name" label="名称" width="180" />

    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>



  <el-dialog v-model="dialogFormVisible" :title="type.id?'编辑':'添加'">
    {{type}}
    <el-form :model="type">
      <el-form-item label="名称">
        <el-input v-model="type.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </span>
    </template>
  </el-dialog>




</template>

<script>
export default {
  name: "ListView",
  data(){
    return{

      dialogFormVisible:false,

      type:{
        id:null,
        name:null
      },

      tableData : [
        {
          id:1,
          name: 'Tom'
        },
        {
          id:2,
          name: 'Tom'
        }
      ]
    }
  },
  methods:{

    //打开添加对话框
    hanleAdd(row){
      this.dialogFormVisible = true;
      this.type = {
        id:null,
        name:null
      }
    },

    //打开编辑对话框
    handleEdit(row){
      this.dialogFormVisible = true;
      this.type = row;
    },

    //删除分类信息
    handleDelete(id){

    },

    //保存分类信息
    handleSave(){

    }


  }
}
</script>

<style scoped>

</style>