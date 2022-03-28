<template>
  <aside class="side-right">
    오른쪽
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
export default class SideRight extends Vue {

}
</script>

<style scoped lang="scss">
</style>
