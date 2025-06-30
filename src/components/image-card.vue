<!-- 5-3 componets/image-card.vue -->
<template>
    <div class="image-card-container">
        <div
        class="card"
        v-for="{image, index} in imageList"
        :key="index"
        @click="clickImage(image.name)"
        >
        <img :src="image.src" alt="">

        </div>
    </div>
</template>