<template>
  <el-footer class="site-footer">
    <el-row
      :gutter="40"
      class="footer-container"
      type="flex"
      justify="space-between"
      align="top"
    >
      <!-- Left: Logo / Brand -->
      <el-col :span="6" class="footer-section">
        <img src="/logov12.png" alt="Logo" class="footer-logo" />
        <p class="footer-text">© 2025 Jhansyuan. All rights reserved.</p>
      </el-col>

      <!-- Middle: Quick Links -->
      <el-col :span="6" class="footer-section">
        <h4>快速連結</h4>
        <el-link type="primary" underline @click="$router.push('/shop')"
          >澳洲代購</el-link
        ><br />
        <el-link type="primary" underline @click="$router.push('/process')"
          >購物流程</el-link
        ><br />
        <el-link type="primary" underline @click="$router.push('/contact')"
          >聯絡我們</el-link
        >
      </el-col>

      <!-- Right: Contact -->
      <el-col :span="6" class="footer-section">
        <h4>聯絡資訊</h4>
        <p>Email: support@example.com</p>
        <p>LINE: @example</p>
        <el-button type="primary" size="small" @click="$router.push('/contact')"
          >聯絡我們</el-button
        >
      </el-col>
    </el-row>
  </el-footer>
</template>

<script setup lang="ts">
import { ElFooter, ElRow, ElCol, ElLink, ElButton } from "element-plus";
</script>

<style scoped>
.site-footer {
  background-color: #000;
  color: #fff;
  padding: 2.5rem 3rem;
  width: 100%;
}

.footer-container {
  max-width: 1920px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.footer-logo {
  width: 120px;
  margin-bottom: 1rem;
}

.footer-text {
  font-size: 14px;
  color: #ccc;
}

.el-link {
  color: #fff;
  font-size: 15px;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.el-link:hover {
  text-decoration: underline;
}

p {
  margin: 0.25rem 0;
  font-size: 14px;
  color: #ccc;
}
</style>
