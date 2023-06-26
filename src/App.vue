<template>
  <el-config-provider :locale="locale">
    <layout/>
  </el-config-provider>
</template>

<script>
import {defineComponent} from 'vue'
import {ElConfigProvider} from 'element-plus'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Layout from "~/layouts/layout.vue";

export default defineComponent({
  components: {
    Layout,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  },
})
</script>