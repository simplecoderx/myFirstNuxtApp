<script setup lang="ts">
useHead({
  title: 'This is my profile page',
  meta: [
    { name: 'description', content: 'My amazing profile page.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>


<template>
    <div class="Profile">Profile Page</div>
</template>