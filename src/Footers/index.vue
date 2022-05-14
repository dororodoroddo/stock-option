<template>
  <footer class="footer">
    <div>

    </div>
      <ul>
        <li>
          <router-link to="/service/terms">
            이용약관
          </router-link>
        </li>
        <li>
          <router-link to="/service/private-info">
            정보수집 여부 안내
          </router-link>
        </li>
      </ul>
      <p>
        <a href="mailto:dororodoroddo@gmail.com">
          dororodoroddo@gmail.com
        </a><br />
        Copyrights © dororodoroddo All Rights Reserved.
      </p>
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
