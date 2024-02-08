<script setup lang="ts">
const counter = useCounter();
</script>

<template>
    <div class="counter">
        Counter: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
</template>