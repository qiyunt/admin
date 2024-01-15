<template>
  <div class="common-layout">
    <el-container>

      <el-header style="background-color:skyblue;display: flex;justify-content: space-between;align-items: center;">

        <h3 style="line-height: 60px;color: #ffffff">水果商城商家端</h3>

        <el-dropdown split-button type="primary">
          欢迎zs
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>充值</el-dropdown-item>
              <el-dropdown-item>注销</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>


      </el-header>

      <el-container>
        <el-aside width="180px" style="background-color: #545C64">

          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"

              :default-active="$route.path"
              :router="true"
              text-color="#fff">

            <el-menu-item index="/data/list">
              <el-icon><setting /></el-icon>
              <span>数据中心</span>
            </el-menu-item>

            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>水果中心</span>
              </template>

                <el-menu-item index="/type/list">分类管理</el-menu-item>
                <el-menu-item index="/fruit/list">水果管理</el-menu-item>
            </el-sub-menu>

            <el-menu-item index="2">
              <el-icon><setting /></el-icon>
              <span>注销</span>
            </el-menu-item>
          </el-menu>

        </el-aside>


        <el-main>
          <!--舞台-->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

  .common-layout{
    height: 100%;
  }

  .common-layout .el-container{
    height: 100%;
  }



</style>