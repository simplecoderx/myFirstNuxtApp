/* export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide : {
            sayHello: (msg:string) => console.log(`Hello ${msg}`),
        },
    }
  }) */
/* export default defineNuxtPlugin(nuxtApp => {
    console.log(nuxtApp);
  }) */
/*   
  export default defineNuxtPlugin((nuxtApp) => {
    console.log(nuxtApp);
  })
   */

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    console.log("hello from plugin");
  });
});
