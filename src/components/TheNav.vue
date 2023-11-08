<script setup>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue';

const Links = ["solution", "learn", "about"]
const ShowNav = ref(false)
</script>

<template>
    <nav class="py-[.4rem] px-[1.5rem] md:px-[2.4rem] top-0 left-0  bg-[#070606] sticky border-b-[1px] border-[#3d3d3d] border-solid z-[51]">
        <div class=" flex justify-between items-center mx-auto">
            <div class="min-w-[73px]">
                <BaseIcon name="logo" />
            </div>
            <ul class="hidden md:flex items-center gap-[64px]">
                <li v-for="link in Links" :key="link">
                    <a href="" class="text-silver capitalize">{{ link }}</a>
                </li>
            </ul>
            <div class="hidden md:flex items-center gap-[1.6rem]">
				<NuxtLink to="" class="text-white py-[0.8rem]">Login</NuxtLink>
				<NuxtLink to="" class="btn font-SemiBold">Get started</NuxtLink>
			</div>
            <button @click="ShowNav = !ShowNav" class="flex flex-col md:hidden gap-1">
                <span v-for="bar in 3" :key="bar" class="w-[20px] h-[2px] bg-white"></span>
            </button>
        </div>
    </nav>

    <!-- For Mobile view -->

    

    <Transition name="slide-fade">
        <nav v-if="ShowNav" class="flex flex-col fixed md:hidden bg-[#070606] p-10 items-center h-screen w-[40%] z-50">
            <ul class="flex flex-col gap-8">
                <li v-for="link in Links" :key="link" class="">
                    <a href="" class="text-silver capitalize">{{ link }}</a>
                </li>
            </ul>
    
            <div class="flex flex-col items-center gap-4 justify-center">
                <NuxtLink to="" class="text-white py-[2rem] pr-5">Login</NuxtLink>
                <NuxtLink to="" class="text-white py-[5px] px-[1.2rem] bg-forest-green rounded-[10rem]">Get started</NuxtLink>
            </div>
        </nav>
      </Transition>
</template>


<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }  
</style>