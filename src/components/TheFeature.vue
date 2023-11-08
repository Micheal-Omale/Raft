<script setup>
import BaseIcon from '../components/BaseIcon.vue';

const medias = [
  { icon: "forbes", classes: "w-[7rem] h-[3rem] md:w-[7rem] md:h-[3rem]" },
  { icon: "cbnc", classes: "w-[4rem] h-[4.5rem] md:w-[5rem] md:h-[6rem]" },
  { icon: "bloomberg", classes: "w-[8rem] h-[4rem] md:w-[8rem] md:h-[4.8rem]" },
  { icon: "reuters", classes: " w-[10rem] h-[2.8rem] md:w-[8rem] md:h-[3.4rem]" },
  { icon: "cnn", classes: "w-[5rem] h-[4.6rem] md:w-[5rem] md:h-[2.3rem]" },
]
</script>

<template>
    <div class="md:pt-[6rem]">
		<div class="container">
			<div class="flex flex-col items-center pt-[3rem] px-[1.2rem] md:px-10 gap-[2.8rem] md:gap-[4.8rem]">
				<p class="text-silver uppercase md:text-[1.2rem] font-Medium">Featured and seen in</p>
				<ul class="flex items-center justify-center w-full max-w-[86rem] gap-[4rem] md:gap-[3.5rem] overflow-x-auto no-scrollbar">
					<li v-for="media in medias" :key="media.icon" class="shrink-0" :class="media.classes">
						<BaseIcon :name="media.icon"/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
	display: none;
}

.no-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>