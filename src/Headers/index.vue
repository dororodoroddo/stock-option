<template>
  <header class="header">
    <h1>Stock Option</h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Headers extends Vue {

}
</script>

<style scoped lang="scss">
.header {
  background-color: #900;
  padding: 16px 24px;
}
</style>
