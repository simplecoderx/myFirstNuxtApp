export const useUtils = () => {
    const sayHello = () => console.log("Hello from Composable Utils");
    return {
        sayHello,
    };
};