<template>

        <div class="homepage">
          <el-row style="width:100%;">
            <el-col :span="24">
              <div class="homeHeader hero grid-content"  ref="hero" :style="{...bgstyle,width:'100%'}" >
                <div class="hero-content" style=" width:100%;">
                  <div ref="homeNavbar" class="fixed-navbar grid-content" style="max-width:1920px ;"><Navbar/></div>
                  <div class="showContent" style="padding-left: 5%; padding-top: 15%;">
                    <h1 ref="title" class="animate-text"><span style="color: bisque;"> 短期任務</span>賺外快</h1>
                    <h3 ref="subtitle" class="subtitle" style="text-align: left;">都是你未來的 <span style="color: bisque;">好幫手</span></h3>
                    <p ref="paragraph" class="animate-scroll">
                      這個社區需要你，<br>有多餘的時間不知道如何利用，想找點事情做，<br>想找專業的人來做，想找有經驗的人來做，<br><span style="color: bisque; text-decoration: underline;">這裡就是您找到好幫手的地方！</span>
                    </p>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row >
            <el-col span="24" class="aboutArea" style="height: 1000vh; width: 100%;">
              <div class="aboutbox">
                <div class="bgCircle">

                </div>
                <div class="textDecBox" style="text-align: center;">
                  <div class="decText">
                    <h1 style="color:white;font-weight: 700; font-size: 60px; text-shadow: 5px 5px 15px grey;">好幫手好任務</h1>

                    <!-- hidden content that fade in later -->
                     <h2 class="dec-h2">你最好的任務平台</h2>
                     <h3 class="dec-h3">快速、方便、可靠</h3>
                  </div>

                </div>
                <div class="linkBox">

                </div>
                <div class="textarea">

                </div>
              </div>

            </el-col>
          </el-row>
        </div>


  
</template>

<script setup>
import { ref,computed,onMounted,watch, nextTick, onBeforeUnmount } from "vue";
import Navbar from "@/components/Navbar.vue";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

// background slideshow
const images=['/1.avif','2.avif'];
const index=ref(0);
let intervalId=null;
const hero=ref(null);
const bgstyle=computed(()=>({
  backgroundImage: `url(${images[index.value]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height:'100vh',
  
  transition: 'background-image 1.4s ease-in-out',
}));
// text refs
const title = ref(null);
const paragraph = ref(null);
const subtitle=ref(null);
// text animation everytime the background changed
let tline=null;
let splits=[];
// change navbar style
const homeNavbar=ref(null);


onMounted(()=>{
  //fade-h2 and h3 after the h1 reach scroll position
  gsap.timeline({
    scrollTrigger:{
      trigger:".aboutbox",
      start:"top top",
      toggleActions:"play none none reverse"
    }
  })
  .to(".dec-h2",{
    opacity:1,
    y:0,
    duration:0.6,
    ease:"power2.out"
  })
  .to(".dec-h3",{
    opacity:1,
    y:0,
    duration:0.6,
    ease:"power.out"
  },"-=0.3")
  // change color when the text pass about area
  gsap.to(".decText h1", {
  color: "#4169e1",
  duration: 1,
  scrollTrigger: {
    trigger: ".aboutArea",
    start: "top center",      // when aboutArea reaches the top of viewport
    toggleActions: "play none none reverse",
  }
  });

  // text-dec box animation
  const heroEl=hero.value;
  const heroHeight=heroEl.offsetHeight;

  gsap.timeline({
    scrollTrigger:{
      trigger:document.body,
      start:"top top",
      end:()=>heroHeight,
      scrub:1,
    }
  })
  .to(".decText",{opacity:1})
  .to(".decText",{y:+400})

  // Select all target text elements
  const targets=[".animate-text",".subtitle",".animate-scroll"];

  // apply split animation to each element
  targets.forEach(selector=>{
    const s1=new SplitText(selector,{
      type:"lines",
      linesClass:"lineChild"
    });
    const s2=new SplitText(selector,{
      type:"lines",
      linesClass:"lineParent"
    });
    splits.push({s1,s2});
  });
  // start slideshow
  intervalId=setInterval(()=>{
    index.value=(index.value+1)%images.length;
  },6000);

  // run the animation once at mount
  playTextAnimation();
  // Scroll trigger navbar effect
  ScrollTrigger.create({
    trigger:document.body,
    start:"top -50",
    onEnter:()=>{
      gsap.to(homeNavbar.value,{
        backgroundColor:"black",
        color:"white",
        paddingTop:0,
        duration:0.3
      });
      //change menu & button text
      gsap.to(homeNavbar.value.querySelectorAll('.el-menu-item, .el-button'),{
        color:"white",
        duration:0.3
      });
    },
    onLeaveBack:()=>{
      gsap.to(homeNavbar.value,{
        backgroundColor:"transparent",
        color:"white",
        paddingTop:"15px",
        duration:0.3
      });
      gsap.to(homeNavbar.value.querySelectorAll('.el-menu-item, .el-button'),{
        color:"white",
        duration:0.3
      })
    }
  })
  //pin the aboutbox
  ScrollTrigger.create({
    trigger:".aboutbox",
    start:"top top",
    endTrigger:'.aboutArea',
    end:"bottom bottom",
    pin:true,
    pinSpacing:true
  })
});

// Watch background change and replay animation
watch(index,()=>{
  playTextAnimation();
});

// Main animation function
function playTextAnimation(){
  if(tline) tline.kill();
  tline=gsap.timeline();
  tline.from(".animate-text .lineChild", {
    duration: 0.9,
    yPercent: 100,
    stagger: 0.15,
    ease: "power3.out"
  })

  .from(".subtitle .lineChild", {
    duration: 0.9,
    yPercent: 100,
    stagger: 0.12,
    ease: "power3.out"
  }, "+=0.2")   // small delay before next block

  .from(".animate-scroll .lineChild", {
    duration: 0.9,
    yPercent: 100,
    stagger: 0.1,
    ease: "power3.out"
  }, "+=0.2");
}
  
onBeforeUnmount(()=>{
  clearInterval(intervalId);
});


</script>

<style>
.homepage{
  height: 2000vh;
  width: 100%;
  max-width: 1920px;
  background-color: black;
  
}
.fixed-navbar{
  transition: all 0.3s ease;
  background-color: transparent;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index:100;
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
.hero{
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  transition:background-image 1.5s ease-in-out, opacity 1s ease-in-out;
}
/* center text */
.hero-content{
  text-align: center;
  color: white;
}
/* spacer make the 200vh scroll*/

/* second section */

html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}
.aboutbox{
  width: 100%;
  height: 100vh;
  background-image:url("/coverbox.jpg");
  background-position: center;
  background-size: cover;
}
.decText {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  opacity: 0;
  pointer-events: none;
}
.aboutArea{
  position: relative;

}
.textDecBox {
  position: relative;
  overflow: visible;
  width: 100%;
  height: 100vh;
}
.dec-h2,.dec-h3{
  opacity:0;
  transform:translateY(50px);
}


</style>
