<template>
  <article class="home" @click="abc">
    abc {{ test }}
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Mutation } from "vuex-class"
@Component({
  components: {
  },
})
export default class Home extends Vue {
  @State('test') private readonly test!:string;
  @Mutation('increment') private abc!:()=>void;
}
</script>
