<template>
  <div class="side">
    가나다
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Side extends Vue {

}
</script>

<style scoped lang="scss">
.side {
  width: 200px;
  background-color: #009;
}
</style>
