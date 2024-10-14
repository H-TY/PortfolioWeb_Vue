import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes)
})

// router.afterEach ( (要去哪裡, 從哪裡來) => {} ) 每次進入頁面"後"，執行指定動作
router.afterEach((to, from) => {
  // 標籤名稱擷取
  document.title = to.meta.title
})

export default router
