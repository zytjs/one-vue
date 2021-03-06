import Vue from "vue";
import Router from "vue-router";
import home from "@/page/home/home";
import detail from "@/page/detail/detail";
import serialList from "@/page/detail/children/serialList";
import musicInfo from "@/page/detail/children/musicInfo";
Vue.use(Router);

export default new Router({
    routes: [
    {
        path: "/",
        redirect: "/one"
    },
    {
        path: "/one",
        name: "home",
        component: home,
        meta: {
            keepAlive: true
        }
    },
    {
        path: "/essay/:item_id",
        name: "Essay",
        component: detail
    },
    {
        path: "/serialcontent/:item_id",
        name: "Serialcontent",
        component: detail,
        children: [
        {
            path: "/seriallist",
            name: "serialList",
            component: serialList,
            props: true
        },{
            path: "/musicInfo",
            name: 'musicInfo',
            component: musicInfo,
            props: true
        }]
    },
    {
        path: "/question/:item_id",
        name: "Question",
        component: detail
    },
    {
        path: "/music/:item_id",
        name: "Music",
        component: detail
    },
    {
        path: "/movie/:item_id",
        name: "Movie",
        component: detail
    }],
    // mode: "history",
    // strict: true,
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         if (from.meta.keepAlive) {
    //             from.meta.savedPosition = document.body.scrollTop;
    //         }
    //         return { x: 0, y: to.meta.savedPosition || 0 };
    //     }
    // }
});