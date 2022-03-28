<template>
  <aside class="side-left">
    왼쪽
    <Side />
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Side from './Side.vue';

@Component({
  components: {
    Side,
  },
})
export default class SideLeft extends Vue {

}
</script>

<style scoped lang="scss">

</style>
