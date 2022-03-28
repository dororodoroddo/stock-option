<template>
  <div class="app bg-normal cl-b">
    <Headers />
    <div class="app--container">
      <SideLeft />
      <Mains />
      <SideRight />
    </div>
    <Footers />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Headers from "@/Headers/index.vue";
import Mains from "@/Mains/index.vue";
import SideLeft from "@/Side/SideLeft.vue";
import SideRight from "@/Side/SideRight.vue";
import Footers from "@/Footers/index.vue";

@Component({
  components: {
    Headers,
    Mains,
    SideLeft,
    SideRight,
    Footers,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/global.scss";
.app {
  position: relative;
  min-height: 100vh;
  padding-bottom: calc(500px + var(--bottom));
  &--container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
