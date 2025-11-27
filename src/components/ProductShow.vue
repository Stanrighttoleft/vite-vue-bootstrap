<template>
  <div style="position: relative">
    <!-- Navigation Arrows -->
    <div class="nav-wrap">
      <el-button
        class="nav-btn nav-left"
        @mousedown="startScroll('prev')"
        @mouseup="stopScroll"
        @mouseleave="stopScroll"
        text
      >
        <img :src="prevBun" class="nav-img" />
      </el-button>

      <el-button
        class="nav-btn nav-right"
        @mousedown="startScroll('next')"
        @mouseup="stopScroll"
        @mouseleave="stopScroll"
        text
      >
        <img :src="nextBun" class="nav-img" />
      </el-button>
    </div>
    <div class="product-container">
      <!-- Scroll Row -->
      <div ref="productDiv" class="product-row">
        <Motion
          class="product-card"
          :initial="{ opacity: 1 }"
          :while-hover="{ opacity: 0.6, transition: { duration: 1 } }"
          v-for="(item, index) in tryImage"
          :key="index"
        >
          <div class="img-wrap">
            <img :src="item.image" alt="product" class="product-img" />
          </div>

          <div class="text-wrap">
            <p class="info">{{ item.name }}</p>
            <p class="sub-info">{{ item.info }}</p>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { RouterLink, useRoute } from "vue-router";
import { Motion } from "motion-v";

const prevBun = ref("/left.png");
const nextBun = ref("/right.png");
const productDiv = ref(null);
const scrollInterval = ref(null);
const scrollAmount = 4000;
const route = useRoute();
const tryImage = ref([
  {
    image: "/blackfriday.jpg",
    name: "澳洲黑五特價",
    info: "黑五各項優惠限時折扣",
  },
  { image: "/clothes.jpg", name: "H&M商品優惠中", info: "換季商品展示優惠中" },
]);

const startScroll = (direction) => {
  if (!productDiv.value) return;

  scrollInterval.value = setInterval(() => {
    productDiv.value.scrollBy({
      left: direction === "next" ? scrollAmount / 1 : -scrollAmount / 1,
      behavior: "smooth",
    });
  }, 50);
};

const stopScroll = () => {
  clearInterval(scrollInterval.value);
  scrollInterval.value = null;
};

onMounted(() => {});
</script>

<style scoped>
.product-container {
  width: 100%;
  max-width: 1920px;
  height: 400px;
  padding: 50px;
  position: relative;
  overflow: hidden;
}

.product-row {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  scroll-behavior: smooth;
  gap: 12px;
}

.product-card {
  width: 400px;
  min-height: 280px;
  background: transparent;
  border-radius: 12px;
  margin-right: 12px;
  display: inline-block;
}

.img-wrap {
  text-align: center;
  background: transparent;
  border-radius: 12px;
}

.product-img {
  width: 350px;
  height: 250px;
}

.text-wrap {
  background: transparent;
  padding: 10px;
  border-radius: 12px;
}

.info {
  font-size: large;
  margin: 0 0 6px 10px;
}

.sub-info {
  font-size: 14px;
  margin: 0 0 6px 10px;
}

/* Navigation */
.nav-wrap {
  position: absolute;
  top: 80%;
  right: 10%;
  width: 200px;
  display: flex;

  transform: translateY(-50%);
  padding: 0 10px;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 50; /* above product cards */
  pointer-events: auto;
}

/* explicitly pin left and right */
.nav-left {
  left: 30%; /* distance from left edge */
}

.nav-right {
  right: 5%; /* distance from right edge */
}

.nav-img {
  width: 50px;
  height: 50px;
  object-fit: contain;
  display: block;
  user-select: none;
  pointer-events: none; /* let button receive events, not the img */
}
</style>
