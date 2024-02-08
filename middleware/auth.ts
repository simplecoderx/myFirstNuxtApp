export default defineNuxtRouteMiddleware((to, from) => {
/*     console.log(to);
    console.log(from); */

/*     // Authentication, remember to add `.global`, 
        //remove the definePageMeta in the pages/index.vue
    const isLoggedIn = false;
    console.log(to);
    if (isLoggedIn){
        return navigateTo(to.fullPath);
    }
    return navigateTo("/login"); */

    console.log("hello from middleware auth");
});