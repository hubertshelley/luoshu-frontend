<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>服务列表</span>
        <el-button @click="get_data" type="primary">刷新</el-button>
      </div>
    </template>
    <el-table
        :data="tableData"
        style="width: 100%"
        border
        :row-class-name="tableRowClassName"
    >
      <el-table-column type="expand">
        <template #default="props">
          <el-card class="box-card" style="width: 250px;margin-left: 4rem;">
            <template #header>
              <div class="card-header">
                <span>Service</span>
              </div>
            </template>
            <el-table :data="props.row.services" border>
              <el-table-column label="Host" prop="host"/>
              <el-table-column label="Port" prop="port"/>
            </el-table>
          </el-card>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID" width="180"/>
      <el-table-column prop="name" label="Name" width="180"/>
      <el-table-column prop="namespace" label="Namespace"/>
    </el-table>
  </el-card>
</template>

<script setup>

import {getServices} from "~/api/servicesApi.js";
import {ref} from "vue";

const tableRowClassName = (
    {
      row,
      rowIndex,
    }
) => {
  if (row.services.length === 0) {
    return 'warning-row'
  } else {
    return 'success-row'
  }
}
let tableData = ref([]);
const get_data = () => {
  getServices().then(
      (data) => {
        tableData.value = data
      }
  );
}
get_data()
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success);
}
</style>
