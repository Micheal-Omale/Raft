<script setup>
  import BaseIcon from './BaseIcon.vue';

  const features = [{
      icon: 'banknotes',
      name: 'No minimum balance fees',
      description: 'Say goodbye to minimum balance fees. Your account, your balance—no hidden charges'
    },
    {
      icon: 'circle-stack',
      name: 'No monthly fees',
      description: 'Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account'
    },
    {
      icon: 'arrow-right-left',
      name: 'No bank transfer fees',
      description: 'Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.'
    }
  ]

  const Heading = {
    title: "Your Financial Freedom, Your Way",
    classes: 'text-white md:text-7xl text-[2.5rem] font-Regular max-w-[50rem]'
  }

  const SubHeading = {
    title: "We believe that managing your finances should be effortless and cost-effective. That's why we offer you the freedom you deserve",
    classes: 'text-silver md:text-[#989898]  md:leading-[1.8rem] md:text-[1.3rem] font-normal max-w-[38rem]'
  }
</script>

<template>
  <div class="md:pt-[7.2rem] md:pb-[5rem] px-[4rem] md:px-[5.8rem] py-[2.5rem]">
    <div class="container">
      <div class="flex flex-col md:gap-10">
        <div class="flex flex-col items-center text-center gap-[2rem] pb-[2.5rem]">
          <h2 :class="Heading.classes">{{ Heading.title }}</h2>
          <p :class="SubHeading.classes">{{ SubHeading.title }}</p>
        </div>
        <div class="flex flex-col items-center gap-[4rem] ">
          <div>
            <img class="hidden md:block max-w-full h-auto" src="/images/financial-freedom.webp" alt="">
            <img class="block md:hidden max-w-full h-auto" src="/images/financial-freedom-mobile.webp" alt="">
          </div>
          <div>
            <ul class="flex md:flex-row flex-col gap-[3rem]">
              <li v-for="feature in features" :key="feature.icon">
                <h6 class="text-white flex text-center items-center gap-[.8rem] font-Medium md:text-[1.2rem]">
                  <BaseIcon :name="feature.icon" /> 
                  {{ feature.name }}
                </h6>
                <p class="text-white pt-[.5rem]">{{ feature.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>