<template>
  <footer class="footer">
    <div>

    </div>
      <ul>
        <li>
          이용약관
        </li>
        <li>
          정보수집 여부 안내
        </li>
      </ul>
      <dl>
        <dt>
          이메일
        </dt>
        <dd>
          dororodoroddo@gmail.com
        </dd>
      </dl>
      <p>
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
