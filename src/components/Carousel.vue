<template>
    <div class="carousel">
        <slot :currentSlide="'currentSlide'"></slot>

        <!-- Navigation -->
         <div v-if="navEnabled" class="navigate" >
            <div class="toggle-page left-1/5">
                <i @click="prevSlide">

                </i>
            </div>

         </div>
    </div>
  
</template>

<script setup>
import {ref, onMounted} from "vue";

//props
const props=defineProps({
    startAutoPlay:{
        type:Boolean,
        default:true,
    },
    timeout:{
        type:Number,
        default:5000,
    },
    navigation:{
        type:Boolean,
        default:true
    },
    pagination:{
        type:Boolean,
        default:true
    }

})

//state
const currentSlide=ref(1);
const getSlideCount=ref(0);

const autoPlayEnabled=ref(props.startAutoPlay);
const timeoutDuration=ref(props.timeout);
const paginationEnalbed=ref(props.pagination);
const navEnabled=ref(props.navigation);

//Methods
const nextSlide=()=>{
    currentSlide.value=currentSlide.value===getSlideCount.value ? 1 : currentSlide.value+1;
};

const prevSlide=()=>{
    currentSlide.value=currentSlide.value===1 ? 1 : currentSlide.value -1;
};
const goToSlide=(index)=>{
    currentSlide.value=index+1;
}

//autoaply
const autoPlay=()=>{
    setInterval(()=>{
        nextSlide();

    },timeoutDuration.value);
};
if(autoPlayEnabled.value){
    autoPlay();
}

//get slide count on mount
onMounted(()=>{
    getSlideCount.value=document.querySelectorAll(".slide").length;
})
    


</script>

<style>

</style>