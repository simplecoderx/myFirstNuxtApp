<script setup lang="ts">
/* const { $sayHello } = useNuxtApp();
$sayHello ("lynn"); */
definePageMeta({
    middleware : "auth",
});
</script>

<template>
    <div class="Main container py-3 mx-auto">
        <h1 class="text-teal-500 ">Nuxt 3 Welcome Page</h1>
        <!-- <img src="@/assets/1.jpg" alt=""> -->
        <!-- <IconsBell /> -->
    </div>
</template>