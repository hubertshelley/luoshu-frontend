import {createApp} from "vue";
import App from "./App.vue";


import ElementPlus from "element-plus";
// import all element css, uncommented next line
import "element-plus/dist/index.css";

// or use cdn, uncomment cdn link in `index.html`

// If you want to use ElMessage, import it.
import 'element-plus/es/components/message/style/css'
import router from "~/routes/index.js";

const app = createApp(App);
app.use(router)
app.use(ElementPlus);
app.mount("#app");
