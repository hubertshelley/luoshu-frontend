<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>配置列表</span>
        <el-button @click="get_data" type="primary">刷新</el-button>
      </div>
    </template>
    <el-table
        :data="tableData"
        style="width: 100%"
        border
    >
      <el-table-column type="expand">
        <template #default="props">
          <el-card class="box-card" style="width: 250px;margin-left: 4rem;">
            <template #header>
              <div class="card-header">
                <span>Configuration</span>
                <!--                <el-button class="button" text>Edit</el-button>-->
              </div>
            </template>
            {{ props.row.config }}
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

import {ref} from "vue";
import {getConfigurations} from "~/api/configurationsApi.js";

let tableData = ref([]);
const get_data = () => {
  getConfigurations().then(
      (data) => {
        let configs = []
        data.map(
            (item) => {
              for (const i in item.configuration) {
                configs.push({
                  id: item.id,
                  name: i,
                  namespace: item.namespace,
                  config: item.configuration[i]
                })
              }
              return item
            }
        )
        tableData.value = configs
      }
  );
}
get_data()
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
