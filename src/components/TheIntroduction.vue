<script setup>
    import BaseIcon from './BaseIcon.vue';
    const features = [{
            icon: 'document-duplicate',
            name: 'Contactless technology',
            description: 'Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.'
        },
        {
            icon: 'identification',
            name: 'Personalisation',
            description: 'Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.'
        },
        {
            icon: 'lock-closed',
            name: 'Enhanced Security',
            description: 'Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.'
        },
    ]
</script>

<template>
    <div class="py-[7.2rem] px-[4.5rem]">
        <div class="container">
            <div class="flex flex-col md:gap-[5rem]">
                <div class="flex flex-col items-center justify-center md:gap-[2.4rem] text-center">
                    <div class="flex flex-col gap-[1.6rem]">
                        <span class="text-emerald text-[1.2rem] uppercase font-medium">Introduction</span>
                        <h1 class="font-Regular text-white text-[2.5rem] md:text-[5rem] max-w-[60rem]">Introducing RAFT's Next-Gen Cards
                        </h1>
                    </div>
                    <p class="text-silver md:text-[1.2rem] md:max-w-[40rem] py-[1.5rem]">Discover RAFT's latest innovation – our new
                        cards. Elevate your banking experience with cutting-edge features, security, and unprecedented
                        convenience.</p>
                </div>
                <div class="flex flex-col gap-[5rem] pt-[2rem]">
                    <div class="flex flex-col items-center justify-center min-h-[20rem] md:pb-[6rem]">
                        <BaseIcon name="raft-card" />
                    </div>
                    <div>
                        <ul class="flex flex-col md:flex-row gap-[2rem] md:gap-[1rem]">
                            <li v-for="feature in features" :key="feature.icon">
                                <h6
                                    class="text-white flex text-center items-center gap-[.8rem] font-Medium md:text-[1.5rem]">
                                    <BaseIcon :name="feature.icon" />
                                    {{ feature.name }}
                                </h6>
                                <p class="text-white md:text-[1rem] pt-[.5rem]">{{ feature.description }}</p>
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