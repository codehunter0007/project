<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑</el-button>
    <el-button type="danger" size="smdefaultall" :icon="Delete">
      删除按钮
    </el-button>
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    ></el-pagination>
  </div>
  <div class="box">
    <h1>str</h1>
  </div>
</template>

<script setup lang="ts">
//引入图标组件
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
</script>

<style scoped>
.box {
  width:600px;
  height:400px;
  background: black;
  h1{
    color: white;
  }
}
</style>
