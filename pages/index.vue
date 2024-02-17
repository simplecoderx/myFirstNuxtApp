<!-- <script setup>
import { useCounterStore } from '@/stores/myStore';
const store = useCounterStore();
console.log(store);
</script>

<template>
        <div class="Main">
                        Hello
                <Counter />
        </div>
</template> -->


<script setup>
const response = await $fetch('/api/hello')
console.log(response);
</script>

<template>
  <div><ContentDoc/></div>
</template>

<style lang="scss"></style>