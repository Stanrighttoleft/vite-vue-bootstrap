<template>
  <div style="overflow: hidden; width: 100%">
    <!-- fiexed background -->

    <section class="homeHeader hero" ref="hero" :style="{ ...bgstyle }">
      <div ref="homeNavbar" class="fixed-navbar">
        <Navbar />
      </div>
      <div class="hero-content" style="width: 100%; padding-top: 50px">
        <h1 ref="title" class="animate-text">
          <span style="color: bisque"> 短期任務</span>賺外快
        </h1>
        <h3 ref="subtitle" style="text-align: left">
          都是你未來的 <span style="color: bisque">好幫手</span>
        </h3>
        <p ref="paragraph" class="animate-scroll">
          這個社區需要你，有多餘的時間不知道如何利用，想找點事情做，想找專業的人來做，想找有經驗的人來做，<span
            style="color: bisque; text-decoration: underline"
            >這裡就是您找到好幫手的地方！</span
          >
        </p>
      </div>
    </section>
    <!-- scroll space for 200vh -->
    <section class="spacer"></section>

    <!-- next section appear here -->
    <section class="section-2">
      <h2>短期任務賺外快</h2>
      <p>
        這個社區需要你，有多餘的時間不知道如何利用，想找點事情做，想找專業的人來做，想找有經驗的人來做，<span
          style="color: bisque; text-decoration: overline"
          >這裡就是您找到好幫手的地方！</span
        >
      </p>
    </section>
    <div class="row"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import Navbar from "../components/Navbar.vue";

// background slideshow
const images = ["/1.avif", "2.avif"];
const index = ref(0);
const hero = ref(null);
const bgstyle = computed(() => ({
  backgroundImage: `url(${images[index.value]})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  transition: "background-image 1.4s ease-in-out",
  marginTop: "60px",
}));
// text refs
const title = ref(null);
const paragraph = ref(null);
const subtitle = ref(null);
// navbar ref variable
const homeNavbar = ref(null);

function runTextAnimation() {
  const tl = gsap.timeline();

  tl.set([title.value, subtitle.value, paragraph.value], {
    opacity: 0,
    y: 20,
  });

  tl.to(title.value, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
  })
    .to(
      subtitle.value,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "+=0.1"
    )
    .to(
      paragraph.value,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      },
      "+=0.1"
    );

  return tl;
}

// onMounted(async () => {
//   await nextTick();
//   // Initial fade for the first load
//   runTextAnimation();

//   // change background every 5s
//   setInterval(() => {
//     index.value = (index.value + 1) % images.length;
//   }, 5000);

// pin hero until 200vh
// ScrollTrigger.create({
//   trigger: hero.value,
//   start: "top top",
//   end: "+=700px",
//   pin: true,
//   pinSpacing: false,
//   onLeave: () => {
//     homeNavbar.value.classList.add("fixed");
//   },
//   onEnterBack: () => {
//     homeNavbar.value.classList.remove("fixed");
//   },
// });
// Navbar color change on scroll
// ScrollTrigger.create({
//   start: 0,
//   onUpdate: (self) => {
//     if (self.scroll() > 80) {
//       homeNavbar.value.classList.add("scrolled");
//     } else {
//       homeNavbar.value.classList.remove("scrolled");
//     }
//   },
// });
// });

// watch background index and animate title+paragraph
watch(index, () => {
  runTextAnimation();
});
</script>

<style>
.homepage {
  height: 500vh;
  width: 100%;
}
.fixed-navbar {
  transition: background-color 0.3s ease;
  background-color: transparent;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.fixed-navbar.scrolled {
  background-color: rgba(0, 0, 0, 0.9); /* change on scroll */
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
}

.animate-text {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 100px;
  text-align: left;
  color: white;
}

.animate-scroll {
  text-align: left;
  font-size: 1.5rem;
  margin: 50px 0;
  color: white;
}
/* fullscreen fixed hero section */
.hero {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
}
/* center text */
.hero-content {
  text-align: center;
  color: white;
}
/* spacer make the 200vh scroll*/

/* second section */
.section-2 {
  width: 100%;
  height: 100vh;
  background: white;
  padding: 80px;

  position: relative;
}
html,
body {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
