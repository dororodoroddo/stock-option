<template>
  <div id="app" class="bg-normal">
    <Headers />
    <SideLeft />
    <Articles />
    <SideRight />
    <Footers />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Headers from "@/Headers/index.vue";
import Articles from "@/Articles/index.vue";
import SideLeft from "@/Side/SideLeft.vue";
import SideRight from "@/Side/SideRight.vue";
import Footers from "@/Footers/index.vue";

@Component({
  components: {
    Headers,
    Articles,
    SideLeft,
    SideRight,
    Footers,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/global.scss";
</style>
