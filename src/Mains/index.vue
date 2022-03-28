<template>
  <main class="main">
    메인
    <router-view />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Mains extends Vue {
}
</script>

<style scoped lang="scss">
.main {
  width: calc(100vw - 400px);
}
</style>