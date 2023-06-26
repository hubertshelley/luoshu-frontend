<template>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
  >
    <el-table-column prop="date" label="Date" width="180"/>
    <el-table-column prop="name" label="Name" width="180"/>
    <el-table-column prop="address" label="Address"/>
  </el-table>
</template>

<script setup>

import {getServices} from "~/api/servicesApi.js";

const tableRowClassName = (
    row,
    rowIndex,
) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
let tableData = []
getServices().then(
    (response) => {
      console.log(response)
    },
    (error) => {
      console.log(error)
    },
)
</script>

<style>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning);
}

.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success);
}
</style>
