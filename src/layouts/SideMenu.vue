<template>
  <el-scrollbar>
    <el-menu router unique-opened>
      <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">
        <el-icon :icon="route.meta.icon"></el-icon>
        <span slot="title">{{ route.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script setup>
import router from "~/routes/index.js";

let routes = filterRouter(router.getRoutes())

function filterRouter(routes) {
  return routes.filter(route => {
    if (route.redirect) {
      return false
    }
    if (route.meta && route.meta.hidden) {
      return false
    }
    if (route.children && route.children.length) {
      route.children = filterRouter(route.children)
    }
    return true
  })
}
</script>