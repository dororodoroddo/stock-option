<template>
  <footer class="footer">
    dororodoroddo
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footers extends Vue {

}
</script>

<style scoped lang="scss">
.footer {
  background-color: #090;
  padding: 12px 16px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
