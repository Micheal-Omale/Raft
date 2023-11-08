<script setup>
  import SeamlessPayment from '../components/SeamlessPayment.vue'
  import SmartInvesting from './SmartInvesting.vue';

  import WealthManagement from './WealthManagement.vue'
  import FinancialPlaning from './FinancialPlaning.vue'
</script>

<template>
    <div class="md:py-1 py-[5rem] px-[4rem]">
        <div class="container">
            <div class="flex flex-col">
                <div class="flex flex-col gap-[3rem] md:my-[10rem] text-white items-center md:gap-8 text-center md:px-[10rem]">
                    <h2 class="font-Regular text-[2.4rem] md:text-[4.5rem] max-w-[89.6rem]">Elevate Your Financial Journey with RAFT</h2>
                    <p class="font-Medium text-[#989898] text-[1rem] md:text-[1.2rem] max-w-[40rem] leading-snug pb-[5rem]">RAFT offers a world of financial possibilities. From investments to payments, we've got you covered. Join us and unlock your financial potential today.</p>
                </div>
                <div class="flex flex-col gap-10">
                    <div class="elevate--top grid gap-[2rem] md:px-2">
						<SeamlessPayment />
						<SmartInvesting />
					</div>
                    <div class="elevate--bottom grid gap-[2rem] md:px-2">
                        <WealthManagement />
                        <FinancialPlaning /> 
                    </div>
                </div>
            </div>
        </div>
        <!-- <SeamlessPayment /> -->
    </div>
</template>

<style scoped>
.elevate--top {
	@media screen and (min-width: 992px) {
		grid-template-columns: 63.6% 34.3%;
	}
}

.elevate--bottom {
	@media screen and (min-width: 992px) {
		grid-template-columns: 34.3% 63.6%;
	}
}
</style>