<script setup>
import { useCounterStore } from '@/stores/myStore';
const store = useCounterStore();
console.log(store);
</script>

<template>
        <div class="Main">
                        Hello
                <Counter />
        </div>
</template>

<style lang="scss"></style>