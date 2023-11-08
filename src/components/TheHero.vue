<script setup>
  import BaseIcon from "../components/BaseIcon.vue"
</script>

<template>
    <section class="pt-[3.7rem] md:pt-[3rem] pb-[1rem] px-[1.5rem] md:px-[2.4rem] overflow-hidden">
        <div class="container">
           <div class="flex flex-col">
             <div class="custom-bg pb-[4rem] md:pb-[6rem] pt-[2.5rem] max-w-[89.6rem] mx-auto text-center relative">
                <span class="inline-flex gap-2 md:gap-[10px] items-center px-[12px] py-[5px] md:text-[16px] text-[14px] font-medium rounded-full text-silver bg-[#8b8b8b60] border border-[#989898] border-solid">Introducing Raft Card <span>
                        <BaseIcon name="chevron-right" />
                    </span></span>
                
                    <div class=" flex flex-col gap-[3rem] mb-[2.4rem] md:mb-[3.2rem] mt-5 ">
                        <h1 class="text-white text-[2.6rem] md:text-[6rem] md:max-w-[50rem] overflow-hidden tracking-tight font-Regular">
                            Building the future of banking.
                        </h1>
                        <p class="text-silver text-[1.3rem] md:text-[24px] md:leading-normal max-w-[40rem] mx-auto font-Regular">
                            <span>Experience the future of banking with RAFT. We're here to empower your financial journey.</span>
                        </p>

                        <div>
                            <button class="font-SemiBold text-white text-[1rem] bg-forest-green py-4 px-6 rounded-full">
                            Get started
                        </button>
                        </div>
                   </div>
             </div>
            <div class="w-full relative overflow-hidden rounded-[2rem]">
                <img class="hidden md:block object-cover" src="/images/hero.webp" alt="">
                <img class="md:hidden block object-cover" src="/images/hero-mobile.webp" alt="">
            </div>
           </div>
        </div>
      </section>
</template>

<style scoped>
.custom-bg{
    background-image: url("../assets/images/hero-bg.png");
    background-size:100%;
	background-repeat: no-repeat;
	background-position: center center;
  }
</style>