<script setup>
  const numbers = [
    {
        figure: '50+',
        text: 'Cities'
    },
    {
        figure: '50,000+',
        text: 'Transactions'
    },
    {
        figure: '3M+',
        text: 'Users'
    },
    {
        figure: '5',
        text: 'User Ratings'
    }
  ]
</script>

<template>
    <div class="px-10 py-24">
        <div class="container">
            <ul class="flex justify-between">
                <li v-for="data in numbers" :key="data.text" class="flex flex-col gap-[.5rem] items-center justify-center">
                    <h1 class="text-white text-[1.5rem] md:text-[5rem] font-Medium">{{ data.figure }}</h1>
                    <p class="text-silver font-Medium text-[1rem] uppercase">{{ data.text }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>