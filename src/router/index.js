import { createRouter, createWebHistory } from 'vue-router'

//导入
import LoginView from "@/views/LoginView";
import IndexView from "@/views/IndexView";

import TypeList from "@/views/type/ListView"
import FruitList from "@/views/fruit/ListView"
import DataList from "@/views/data/ListView"

//就是路由的配置信息
//这里面配置的是地址和视图【界面的映射关系】
const routes = [
  {
    path:"/",
    redirect:"/index"
  },
  {
    path:"/login",
    component:LoginView
  },
  {
    path:"/index",
    component: IndexView,
    children:[
      {
        path:"/index",
        redirect:"/data/list"
      },
      {
        path:"/data/list",
        component: DataList
      },
      {
        path:"/type/list",
        component: TypeList
      },
      {
        path:"/fruit/list",
        component: FruitList
      }]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
