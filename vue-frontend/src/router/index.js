import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "@/components/HomePage";
import DepartmentPage from "@/components/DepartmentPage";
import EmployeePage from "@/components/EmployeePage";

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/department',
    component: DepartmentPage
  },
  {
    path: '/employee',
    component: EmployeePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
