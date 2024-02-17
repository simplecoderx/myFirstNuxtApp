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


<!-- <script setup>
const response = await $fetch('/api/hello')
console.log(response);
</script>

<template>
  <div><ContentDoc/></div>
</template> -->


<script setup>
/* const { data: products } = await useFetch('/api/products'); */
const { data: products, pending } = await useLazyFetch('/api/products', {
        transform: (_products) => _products.data,
});
/* console.log(toRaw(products.value)); */
</script>

<template>
<!-- <div>{{ products }}</div> -->
<div>{{ pending ? "Loading" : products }}</div>
</template>

<style lang="scss"></style>