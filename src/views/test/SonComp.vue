<template>
  <div class="container">
    <div>SonComp</div>
    <div>inject {{ providData }}</div>
    <div>inject {{ pdata }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Inject } from "vue-property-decorator";
@Component({
  name: "SonComp"
})
export default class extends Vue {
  @Inject("asd") readonly providData!: String;
  @Inject({ from: "providData2", default: "default provid data" })
  readonly pdata!: String;
}
</script>

<style lang="scss" scoped>
.container {
  margin: 30px;
  padding: 30px;
  border: 1px solid #dddded;
}
</style>
