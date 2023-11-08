<script setup>
import BaseIcon from './BaseIcon.vue';

const footerLinks = [
	{
		title: "About us",
		links: [
			{ to: "", title: "Our company" },
			{ to: "", title: "Careers" },
			{ to: "", title: "Press kits" },
		],
	},
	{
		title: "Legal",
		links: [
			{ to: "", title: "Terms of use" },
			{ to: "", title: "Privacy policy" },
			{ to: "", title: "About us" },
		],
	},
	{
		title: "Support",
		links: [
			{ to: "", title: "Contact us" },
			{ to: "", title: "FAQ" },
		],
	},
];

const downloadLinks = [
	{ icon: "playstore", link: "#" },
	{ icon: "applestore", link: "#" },
];

</script>

<template>
    <div class="md:py-[5.2rem] py-[2rem] px-[2.5rem] md:px-[5rem]">
        <div class="container">
            <div class="flex flex-col gap-[4rem]">
                <div class="border-b border-solid border-mine-shaft pb-[5rem]">
                    <BaseIcon class="w-[40rem] h-[100rem]" name="footerLogo"/>
                </div>
                <div class="flex flex-wrap items-start justify-between gap-[4rem]">
                    <div class="border border-dashed max-w-fit flex gap-[1.2rem] rounded-[8px] px-[2rem] py-[1.6rem]">
                        <BaseIcon name="qr" />
                        <div class="flex flex-col gap-[1rem] max-w-[15rem]">
                            <h6 class="text-white">Scan to download App on the Playstore and Appstore.</h6>
                            <ul class="flex flex-row gap-[1rem]">
                                <li v-for="link in downloadLinks" :key="link.icon">
                                    <a href="">
                                        <BaseIcon :name="link.icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-[5rem] md:gap-[12rem]">
                        <div class="flex flex-col gap-[.5rem]" v-for="section in footerLinks">
                            <h5 class="text-white">{{section.title }}</h5>
                            <ul class="flex flex-col">
                                <li class="py-[.5rem]" v-for="link in section.links">
                                    <a class="text-silver" href="">{{ link.title }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex items-center justify-between gap-[3.5rem] md:gap-[49rem]">
                        <div class="flex items-center gap-[.8rem]">
                            <span class="text-white capitalize md:text-[1.3rem]">english (united kingdom)</span>
                            <span class="w-[1.2rem]">
                                <BaseIcon name="chevron-down"/>
                            </span>
                        </div>
                        <div>
                            <p class="flex gap-[0.4rem] items-center text-white">
                                <span class="h-[1.6rem] w-[1.6rem] md:h-[1.5rem] md:w-[1.5rem]"><BaseIcon name="copyright" /></span>
                                Raft Corp, LLC.
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>