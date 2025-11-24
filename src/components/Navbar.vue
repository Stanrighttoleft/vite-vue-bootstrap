<template>
  <div class="bg-carousel">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="true"
      @select="handleSelect"
      background-color="transparent"
      text-color="white"
      style="border: none"
    >
      <el-menu-item index="0">
        <img />

        <el-button type="primary" :icon="Search" style="margin-left: 2rem"
          >人才招募</el-button
        >
      </el-menu-item>
      <el-menu-item index="1">規則介紹</el-menu-item>
      <el-menu-item index="2">找案子</el-menu-item>
      <el-menu-item index="3">找幫手</el-menu-item>
      <el-menu-item index="4">會員登入</el-menu-item>
      <el-sub-menu index="5" popper-class="custom-dropdown">
        <template #title>會員專區</template>
        <el-menu-item index="5-1" popper-class="custom-dropdown"
          >手上案件</el-menu-item
        >
        <el-menu-item popper-class="custom-dropdown" index="5-2"
          >好幫手</el-menu-item
        >
        <el-menu-item index="5-3">帳戶資料</el-menu-item>
        <el-sub-menu index="5-4">
          <template #title>帳戶資料明細</template>
          <el-menu-item index="2-4-1">更新聯絡資料</el-menu-item>
          <el-menu-item index="2-4-2">更新收付款資訊</el-menu-item>
          <el-menu-item index="2-4-3">密碼更新</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { Delete, Edit, Search, Share, Upload } from "@element-plus/icons-vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
