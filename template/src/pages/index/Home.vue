<template>
  <div class="main">
    <home-header />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from './HomeHeader.vue';

@Component({
  components: {
    HomeHeader
  }
})
export default class Home extends Vue {
  mounted() {}
}
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
