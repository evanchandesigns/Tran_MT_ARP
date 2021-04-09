import HomeComponent from "./components/HomeComponent";
import OtherComponent from "./components/OtherComponent";

const routes = [
    { path: "/", name: "HomeVideo", component: HomeComponent },
    { path: "/sunshine", name: "OtherVideo", component: OtherComponent }
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

new Vue({
    router,

    data: {

    }

}).$mount("#app")