import "./App.css";
import HomeApp from "./HomeApp.svelte";

const homeApp = new HomeApp({
    target: document.getElementById("home-app")
});

export default homeApp;