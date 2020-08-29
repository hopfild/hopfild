import Vue from 'vue'
Vue.component("OtherComponent", () => import("/Users/nik/Documents/GitHub/hopfild/docs/.vuepress/components/OtherComponent"))
Vue.component("demo-component", () => import("/Users/nik/Documents/GitHub/hopfild/docs/.vuepress/components/demo-component"))
Vue.component("Foo-Bar", () => import("/Users/nik/Documents/GitHub/hopfild/docs/.vuepress/components/Foo/Bar"))
Vue.component("BaseListLayout", () => import("/Users/nik/Documents/GitHub/hopfild/global-components/BaseListLayout"))
Vue.component("BlogTags", () => import("/Users/nik/Documents/GitHub/hopfild/global-components/BlogTags"))
Vue.component("BlogTag", () => import("/Users/nik/Documents/GitHub/hopfild/global-components/BlogTag"))
Vue.component("NavLink", () => import("/Users/nik/Documents/GitHub/hopfild/global-components/NavLink"))


export default {}