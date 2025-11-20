<template>

        <div class="homepage">
          <el-row style="width:100%;">
            <el-col :span="24">
              <div class="homeHeader hero grid-content"  ref="hero" :style="{...bgstyle,width:'100%'}" >
                <div class="hero-content" style=" width:100%;">
                  <div ref="homeNavbar" class="fixed-navbar grid-content"><Navbar/></div>
                  <div class="showContent" style="padding-left: 5%; padding-top: 15%;">
                    <h1 ref="title" class="animate-text"><span style="color: bisque;"> 短期任務</span>賺外快</h1>
                    <h3 ref="subtitle" class="subtitle" style="text-align: left;">都是你未來的 <span style="color: bisque;">好幫手</span></h3>
                    <p ref="paragraph" class="animate-scroll">
                      這個社區需要你，<br>有多餘的時間不知道如何利用，想找點事情做，<br>想找專業的人來做，想找有經驗的人來做，<br><span style="color: bisque; text-decoration: underline;">這裡就是您找到好幫手的地方！</span>
                    </p>
                  </div>
                </div>
              </div>
              <!-- scroll space for 200vh -->
               <section class="spacer"></section>
            
              <!-- next section appear here -->
               <section class="section-2">
                <h2>短期任務賺外快</h2>
                <p>這個社區需要你，有多餘的時間不知道如何利用，<br>

                想找點事情做，想找專業的人來做，想找有經驗的人來做，想找點事情做，想找專業的人來做，想找有經驗的人來做，<span style="color: bisque; text-decoration: overline;">這裡就是您找到好幫手的地方！</span></p>
               </section>
                <div class="row">
                
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




// background interval function
onMounted(()=>{

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
        backgroundColor:"white",
        color:"black",
        paddingTop:0,
        duration:0.3
      });
      //change menu & button text
      gsap.to(homeNavbar.value.querySelectorAll('.el-menu-item, .el-button'),{
        color:"black",
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
  height: 500vh;
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
.section-2{
  width: 100%;
  height: 100vh;
  background: white;

}
html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}


</style>
