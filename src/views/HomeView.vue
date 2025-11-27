<template>
  <div class="homepage" style="max-width: 1920px">
    <el-row style="width: 100%; max-width: 1920px; position: relative">
      <el-col :span="24" style="display: flex; justify-content: center">
        <div
          class="homeHeader hero grid-content"
          ref="hero"
          :style="{ ...bgstyle, width: '100%' }"
        >
          <div class="hero-content" style="width: 100%">
            <div
              ref="homeNavbar"
              class="fixed-navbar grid-content"
              style="max-width: 1920px"
            >
              <Navbar />
            </div>
            <div class="showContent" style="padding-left: 5%; padding-top: 15%">
              <h1 ref="title" class="animate-text">
                <span style="color: bisque"> 澳町購貨</span>最原裝
              </h1>
              <h3 ref="subtitle" class="subtitle" style="text-align: left">
                想要的商品 <span style="color: bisque">海外直送</span>
              </h3>
              <p ref="paragraph" class="animate-scroll">
                想要澳洲特有的產品，<br />知道有這東西的存在但是市面上買不到，<br />想找專業的人來做，想找有經驗的人來做，<br /><span
                  style="color: bisque; text-decoration: underline"
                  >這裡就是您找到好幫手的地方！</span
                >
              </p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col
        :span="24"
        class="aboutArea"
        style="height: 500vh; width: 100%; max-width: 1920px"
      >
        <div class="aboutbox-wrapper">
          <div class="aboutbox" style="overflow: hidden">
            <div class="bgCircle" ref="bgCircle"></div>
            <div class="textDecBox" style="text-align: center">
              <div class="decText">
                <h1
                  class="decTexth1"
                  style="
                    color: white;
                    font-weight: 700;
                    font-size: 72px;
                    text-shadow: 5px 5px 15px grey;
                  "
                >
                  澳町海外代購
                </h1>

                <!-- hidden content that fade in later -->
                <div class="decsub">
                  <h2 class="dec-2" style="color: white">你最好的任務平台</h2>
                  <h3 class="dec-3" style="color: white">快速、方便、可靠</h3>

                  <h2 class="dec-4" style="color: white; margin-top: 30%">
                    您澳洲代購的專業平台，從在澳洲的購買到送貨，到進到台灣最後送到府上，你可以信賴的購貨平台。
                  </h2>
                  <el-button type="warning" size="large">了解更多</el-button>
                </div>
              </div>
            </div>
            <!-- the cards section -->
            <div class="linkBox">
              <div class="aboutCards">
                <div class="card card-1">
                  <img src="/p11.jpg" alt="" />
                  <p>在澳洲當地尋找最合適的通路來採購保證品質</p>
                </div>
                <div class="card card-2">
                  <img src="/p12.jpg" alt="" />
                  <p>
                    用最安全保障的方法來包裝物品，保障運送的過程維持該產品的品質
                  </p>
                </div>
                <div class="card card-3">
                  <img src="/p13.jpg" alt="" />
                  <p>與專業安全的通路配合確保貨物在運送時維持最佳狀況</p>
                </div>
                <div class="card card-4">
                  <img src="/p14.jpg" alt="" />
                  <p>了解當地法規以及進出口流程確保貨物順利進出</p>
                </div>
                <div class="card card-5">
                  <img src="/p15.jpg" alt="" />
                  <p>與當地的物流配合，讓貨物安全快速到家</p>
                </div>
                <div class="card card-6">
                  <img src="/p16.jfif" alt="" />
                  <p>確保貨物安全到您的手中</p>
                </div>
              </div>
            </div>
            <div class="textarea"></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="padding: 0; margin: 0; border: 0">
      <el-col
        :span="24"
        style="background-color: white; width: 100%; height: 300vh"
      >
        <div class="newsArea" style="height: 100vh">
          <div class="newsWrap">
            <div class="titleBox" style="text-align: center; margin-top: 100px;">
              <h1>最新消息</h1>
              <h3>不錯過任何資訊</h3>
            </div>
            <div class="carousalBox">
              <el-carousel height="300px" width="50%">
                <el-carousel-item
                  v-for="(item, index) in displayList"
                  :key="index"
                >
                  <h3 class="small justify-center" text="2xl">
                    {{ item.name }}
                  </h3>
                  <img
                    :src="'/' + item.image"
                    alt=""
                    style="width: 100%; height: 100%; object-fit: cover"
                  />
                </el-carousel-item>
              </el-carousel>
            
              
            </div>
            

          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  watch,
  nextTick,
  onBeforeUnmount,
} from "vue";
import Navbar from "@/components/Navbar.vue";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Productshow from "@/components/ProductShow.vue";

gsap.registerPlugin(ScrollTrigger);

// background slideshow
const images = ["/1.jpg", "/2.jpg"];
const index = ref(0);
let intervalId = null;
const hero = ref(null);
const bgstyle = computed(() => ({
  backgroundImage: `url(${images[index.value]})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",

  transition: "background-image 1.4s ease-in-out",
}));
// text refs
const title = ref(null);
const paragraph = ref(null);
const subtitle = ref(null);
// text animation everytime the background changed
let tline = null;
let splits = [];
// change navbar style
const homeNavbar = ref(null);
// bigcircle animation
const bgCircle = ref(null);
// the carousal item
const displayList = ref([
  { name: "1", image: "p11.jpg" },
  { name: "2", image: "p12.jpg" },
  { name: "3", image: "p13.jpg" },
]);

onMounted(() => {
  nextTick(() => {
    //---- add the newsarea section animation ----
    const newsArea = document.querySelector(".newsArea");
    const titleBox = newsArea.querySelector(".titleBox");
    const carousalBox = newsArea.querySelector(".carousalBox");
    const newsBox = newsArea.querySelector(".newsBox");

    //initial state
    gsap.set([titleBox, newsBox], { opacity: 0, y: 50 });

    //early teleporting trigger for newsArea
    ScrollTrigger.create({
      trigger: newsArea,
      start: "top 60%",
      end: "top top",
      onEnter: () => {
        const st = ScrollTrigger.getById("newsPin");
        window.scrollTo({
          top: st.start,
          behavior: "instant",
        });
      },
    });

    //the pin behavior for newsArea
    ScrollTrigger.create({
      id: "newsPin",
      trigger: newsArea,
      start: "top top",
      end: "bottom+=50% top",
      pin: true,
      pinSpacing: true,
    });

    //animation run after the pin
    gsap
      .timeline({
        scrollTrigger: {
          trigger: newsArea,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".carousalBox", {clipPath: "inset(0 0 0% 0)",  ease: "none"
      })
      .to(titleBox, { opacity: 1, y: 0, duration: 0.5 })
      .to(newsBox, { opacity: 1, y: 0, duration: 0.5 });

    // ---- aboutArea section animation ----
    // add cards animation
    const cards = gsap.utils.toArray(".aboutCards .card");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".aboutArea",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true, // pin the aboutArea while scrolling
        },
      })
      .to(cards[0], { opacity: 1, y: 0, duration: 0.5 })
      .to(cards[0], { opacity: 0, y: 20, duration: 0.5 })
      .to(cards[1], { opacity: 1, y: 0, duration: 0.5 })
      .to(cards[1], { opacity: 0, y: 20, duration: 0.5 })
      .to(cards[2], { opacity: 1, y: 0, duration: 0.5 })
      .to(cards[2], { opacity: 0, y: 20, duration: 0.5 })
      .to(cards[3], { opacity: 1, y: 0, duration: 0.5 })
      .to(cards[3], { opacity: 0, y: 20, duration: 0.5 })
      .to(cards[4], { opacity: 1, y: 0, duration: 0.5 })
      .to(cards[4], { opacity: 0, y: 20, duration: 0.5 })
      .to(cards[5], { opacity: 1, y: 0, duration: 0.5 })
      .to(cards[5], { opacity: 0, y: 20, duration: 0.5 })
      // bigcircle animation
      .to(bgCircle.value, { scale: 60, duration: 0.5, ease: "none" });

    // change color when the text pass about area
    gsap.to(".decTexth1", {
      color: "white",
      textShadow: "5px 5px 15px brown",
      duration: 1,
      scrollTrigger: {
        trigger: ".aboutArea",
        start: "top center", // when aboutArea reaches the top of viewport
        toggleActions: "play none none reverse",
      },
    });

    // text-dec box animation
    const heroEl = hero.value;
    const heroHeight = heroEl.offsetHeight;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          // end:()=>heroHeight,
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(".decText", { opacity: 1 })
      .to(".decText", { y: +200 });

    //show the deco text h2 h3
    gsap.to(".decsub", {
      scrollTrigger: {
        trigger: ".aboutbox",
        start: "top top",
        toggleActions: "play none none reverse",
      },
      opacity: 1,
      y: 50,
      duration: 1,
      stagger: 0.3,
    });

    // Select all target text elements
    const targets = [".animate-text", ".subtitle", ".animate-scroll"];

    // apply split animation to each element
    targets.forEach((selector) => {
      const s1 = new SplitText(selector, {
        type: "lines",
        linesClass: "lineChild",
      });
      const s2 = new SplitText(selector, {
        type: "lines",
        linesClass: "lineParent",
      });
      splits.push({ s1, s2 });
    });
    // start slideshow
    intervalId = setInterval(() => {
      index.value = (index.value + 1) % images.length;
    }, 6000);

    // run the animation once at mount
    playTextAnimation();
    // Scroll trigger navbar effect
    ScrollTrigger.create({
      trigger: document.body,
      start: "top -50",
      onEnter: () => {
        gsap.to(homeNavbar.value, {
          backgroundColor: "black",
          color: "white",
          paddingTop: 0,
          duration: 0.3,
        });
        //change menu & button text
        gsap.to(
          homeNavbar.value.querySelectorAll(".el-menu-item, .el-button"),
          {
            color: "white",
            duration: 0.3,
          }
        );
      },
      onLeaveBack: () => {
        gsap.to(homeNavbar.value, {
          backgroundColor: "transparent",
          color: "white",
          paddingTop: "15px",
          duration: 0.3,
        });
        gsap.to(
          homeNavbar.value.querySelectorAll(".el-menu-item, .el-button"),
          {
            color: "white",
            duration: 0.3,
          }
        );
      },
    });
    // Always center the pinned aboutbox-wrapper in the center
  });
});

// Watch background change and replay animation
watch(index, () => {
  playTextAnimation();
});

// Main animation function
function playTextAnimation() {
  if (tline) tline.kill();
  tline = gsap.timeline();
  tline
    .from(".animate-text .lineChild", {
      duration: 0.9,
      yPercent: 100,
      stagger: 0.15,
      ease: "power3.out",
    })

    .from(
      ".subtitle .lineChild",
      {
        duration: 0.9,
        yPercent: 100,
        stagger: 0.12,
        ease: "power3.out",
      },
      "+=0.2"
    ) // small delay before next block

    .from(
      ".animate-scroll .lineChild",
      {
        duration: 0.9,
        yPercent: 100,
        stagger: 0.1,
        ease: "power3.out",
      },
      "+=0.2"
    );
}

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style>
.homepage {
  height: 2000vh;
  width: 100%;
  max-width: 1920px;
  background-color: black;
}
.fixed-navbar {
  transition: all 0.3s ease;
  background-color: transparent;
  position: fixed;
  width: 100%;
  top: 0;

  z-index: 100;
}
/* animate the text */
.lineParent {
  overflow: hidden;
}
.animate-text {
  font-size: 3rem;
  font-weight: bold;
  text-align: left;
  color: white;
}

.animate-scroll {
  text-align: left;
  font-size: 1.5rem;
  color: white;
}
/* fullscreen fixed hero section */
.hero {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1.5s ease-in-out, opacity 1s ease-in-out;
}
/* center text */
.hero-content {
  text-align: center;
  color: white;
}
/* spacer make the 200vh scroll*/

/* second section */

html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
}

.decText {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -30%);
  opacity: 0;
  pointer-events: none;
  z-index: 5;
}
.decsub {
  opacity: 0;
}
.aboutArea {
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
}
.aboutbox-wrapper {
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}
.aboutbox {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("/coverbox.jpg");
  background-position: center;
  background-size: cover;
}
.textDecBox {
  position: relative;
  overflow: visible;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
}
.dec-h2,
.dec-h3 {
  opacity: 0;
  transform: translateY(50px);
}
.aboutCards .card {
  position: absolute;
  width: 500px;
  height: 500px;
  opacity: 0;
  transition: none;
  transform: translateY(50px); /* slide up as they fade in */
  z-index: 1;
  border-radius: 50%;
  color: white;
}
.aboutCards .card img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-1 {
  top: 20%;
  left: 10%;
}
.card-2 {
  top: 20%;
  right: 15%;
}
.card-3 {
  bottom: 35%;
  left: 10%;
}
.card-4 {
  bottom: 35%;
  right: 15%;
}
.card-5 {
  top: 40%;
  left: 15%;
}
.card-6 {
  top: 40%;
  right: 15%;
}
/* the cirle image */
.bgCircle {
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%) scale(0);
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  z-index: 10;
  pointer-events: none;
  margin: 0;
  padding: 0;
  border: 0;
}
/* newsArea */
.carousalBox {
  clip-path: inset(0 0 100% 0);  /* fully hidden from bottom */
  will-change: clip-path;
}
</style>
