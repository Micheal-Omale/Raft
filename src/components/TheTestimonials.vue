<script setup>
import { ref } from 'vue'
import BaseIcon from './BaseIcon.vue';

const testimonials = [
	{
		message:
			"RAFT has transformed my approach to finance. Their smart investing options have helped me grow my wealth, and their user-friendly platform makes managing my money a breeze. I've never felt more confident about my financial future.",
		user: { name: "Robert Fox", image: "/images/testimonial-1.png" },
		id: "1",
	},
	{
		message:
			"I can't express how grateful I am to RAFT. Their wealth management services have been a game-changer for my family's financial security. The expert guidance and personalized strategies have given us peace of mind, knowing that our future is in capable hands.",
		user: { name: "Cameron Williamson", image: "/images/testimonial-2.png" },
		id: "2",
	},
	{
		message:
			"RAFT's financial planning services have been a lifeline for me. I always struggled with managing my money, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my financial dreams",
		user: { name: "Esther Howard", image: "/images/testimonial-3.png" },
		id: "3",
	},
];

 const ScrollButtons = ['left', 'right']
 const TestimonialContainer = ref(null)

 const scrollTestimonialsSection = (direction) => {
    if (!TestimonialContainer.value) return;

    if (direction === 'left') {
        TestimonialContainer.value.scrollLeft -= 250;
    } else {
        TestimonialContainer.value.scrollLeft += 250
    }
        
 }
</script>

<template>
    <div class="bg-emerald md:pt-[5.2rem] md:pb-[5rem] px-[3rem] md:px-[5.8rem]">
        <div class="container">
            <div class="flex flex-col md:gap-[5rem]">
                <h1 class="text-[3rem] md:text-[5rem] text-cod-gray font-Regular text-center md:max-w-[44rem] mx-auto">Join over 3 million members</h1>
                <div class="flex flex-col md:gap-[4rem]">
                    <ul ref="TestimonialContainer" class="flex overflow-x-scroll scroll-smooth no-scrollbar">
                        <li v-for="testimonial in testimonials" :key="testimonial.id" class="flex flex-col md:gap-[4rem] shrink-0 w-[22rem] px-[2rem] py-[1.5rem] md:border-l-2 md:border-solid md:border-cod-gray">
                            <p class="text-[#292929] text-[1.4rem] font-Regular leading-[2rem] tracking-tight">{{ testimonial.message }}</p>
                            <div class="flex justify-between items-center">
                                <div class="flex flex-col md:gap-[.5rem]">
                                    <h5 class="text-cod-gray text-[1.5rem] font-medium ">{{ testimonial.user.name }}</h5>
                                    <p class="text-[#292929] text-[1rem]" >Happy Raft User</p>
                                </div>
                                <img class="h-[5rem]" :src="testimonial.user.image" alt="Happy raft user">
                            </div>
                        </li>
                    </ul>
                    <div class="flex justify-end gap-5">
                        <button @click="scrollTestimonialsSection(button)" v-for="button in ScrollButtons" :key="button" class="flex justify-center items-center bg-white rounded-full h-[4rem] w-[4rem] border border-black">
                              <span class="w-[1.5rem]">
                                <BaseIcon :name="`arrow-${button}`"/>
                              </span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>