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
/* const { data: products, pending } = await useLazyFetch('/api/products', {
        transform: (_products) => _products.data,
}); */
/* console.log(toRaw(products.value)); */

const { data: productCount, pending } = await useAsyncData("products", () => $fetch("api/products"));
const refresh = () => refreshNuxtData("products");
</script>

<template>
<!-- <div>{{ products }}</div> -->
<div>
        <p>{{ pending ? "Loading" : productCount }}</p>
        <button @click="refresh">Refresh</button>
</div>

</template>

<style lang="scss"></style>