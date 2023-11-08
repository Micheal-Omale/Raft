<script setup>
import BaseIcon from './BaseIcon.vue';
import { ref } from 'vue';

const items = ref([
  {
		id: 1,
		question: "How do I create an account with RAFT?",
		answer: "To create a RAFT account, visit their website or mobile app, provide your personal information, set up login credentials, verify your identity if required, agree to the terms, enable two-factor authentication for security, fund your account, and start using their services.",
    open: false
	},
	{
		id: 2,
		question: "How does RAFT ensure the security of my financial data?",
		answer: "RAFT takes data security and customer privacy very seriously. We employ state-of-the-art encryption and security protocols to protect customer data. We regularly conduct security audits and invest in cybersecurity measures to ensure that customer information remains safe and confidential.",
    open: false
	},
	{
		id: 3,
		question: "What types of transactions can I perform with RAFT?",
		answer: "With RAFT, you can engage in a diverse range of financial transactions, including payments, transfers, investments, loans, savings plans, financial education, and efficient account management.",
    open: false
	},
	{
		id: 4,
		question: "What benefits does RAFT offer for wealth management?",
		answer: "RAFT provides several benefits for wealth management, including personalized investment strategies, portfolio diversification, and access to financial experts to help you achieve your long-term financial goals.",
    open: false
	},
]);

const toggleAccordion = (itemId) =>{
  items.value.forEach((item) => {
    if (item.id === itemId) {
      item.open = !item.open
    } else {
      item.open = false
    }
  })
}
</script>

<template>
  <div class="py-[5.2rem] px-[2.5rem] md:px-[5rem]">
    <div class="container">
      <div class="flex flex-col gap-5">
        <h2 class="pb-[3rem] text-[3rem] md:text-[5rem]  text-white md:max-w-[50rem] font-Regular">
          Frequently asked questions
        </h2>
        <div v-for="item in items" :key="item.id"
          class="flex flex-col gap-[rem] pb-[1.5rem] border-b border-solid border-mine-shaft">
          
            
            <button @click="toggleAccordion(item.id)"  class="flex justify-between items-center">
              <h2 class="text-white text-[1.2rem] md:text-[1.5rem] font-medium">{{ item.question }}</h2>
              <span class="w-[1.5rem]" :class="{'rotate-180' : item.open}">
                 <BaseIcon name="chevron-down"/>
              </span>
             
            </button>
            <transition name="slide-fade" mode="out-in">
              <div v-if="item.open" class="py-[1rem] max-w-[60rem]">
            <p class="text-white font-medium">
              {{ item.answer }}
            </p>
          </div>
            </transition>
          
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}


.slide-fade-leave-to,
.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
</style>
