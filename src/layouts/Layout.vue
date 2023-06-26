<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container class="layout-container-demo" style="height: 100%">
      <el-aside width="200px">
        <SideMenu></SideMenu>
      </el-aside>

      <el-container>
        <el-main style="padding: 2rem">
          <router-view></router-view>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import {ref} from 'vue'
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import SideMenu from "~/layouts/SideMenu.vue";


const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({length: 20}).fill(item))
</script>
