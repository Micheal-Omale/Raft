<script setup>
 import BaseIcon from './BaseIcon.vue';

 const cards = [
    { 
        icon: "money-send", 
        heading: "Spend better", 
        description: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress." 
    },
	{ 
        icon: "wallet-minus",
        heading: "Invest better", 
        description: "Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress." 
    },

 ]
</script>

<template>
    <div class="md:px-[4rem] px-[3rem] py-[5rem]">
        <div class="container">
            <div class="flex flex-col gap-[5rem]">
                <div class="flex flex-col gap-[1rem]">
                    <h1 class="text-white text-[2.5rem] md:text-[4.75rem] font-Regular md:max-w-[50rem]">Confidently Shape Your Financial Future</h1>
                    <p class="text-silver text-[1.2rem] font-Medium leading-[1.45] md:max-w-[45rem]">At RAFT, we empower you to confidently shape your financial future. Our modern approach simplifies saving and investing, making it easier than ever.</p>
                </div>
                <div class="grid md:grid-cols-2 gap-y-[1rem] gap-x-[3rem]">
                    <div v-for="card in cards" :key="card.icon" class="shape-card icon px-[2.5rem] py-[2.5rem] bg-[#131313] rounded-[1.2rem] z-50">
                        <div class="flex flex-col gap-4">
                            <h1 class="text-white text-[2rem] md:text-[2.3rem] font-Medium">{{ card.heading }}</h1>
                            <p class="text-silver md:max-w-[25rem]">{{ card.description }}</p>
                        </div>
                        <div class="h-[14.5rem] md:h-[12rem] flex items-center justify-center py-[2.5rem] md:py-[10rem]">
                            <span class="block h-[8rem] w-[8rem] md:h-[12rem] md:w-[12rem]">
                                <BaseIcon :name="card.icon"/>
                            </span>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.shape-card {
	border: 1px solid var(--stroke, rgba(255, 255, 255, 0.04));
 } 
  .icon {
    background-image: url('../assets/images/shape-bg.png');
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
</style>