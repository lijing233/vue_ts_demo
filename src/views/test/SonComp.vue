<template>
  <div class="container">
    <div>SonComp</div>
    <div>inject {{ providData }}</div>
    <div>inject {{ pdata }}</div>
    <div>binding .sync : <input type="text" v-model="syncedName" /></div>
    <div>
      binding v-model : {{ modelData }}
      <button @click="$emit('onModelChange', modelData + '@')">
        change modelData
      </button>
    </div>
    <div><input type="text" @input="inpChange" /></div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
  Inject,
  PropSync,
  Model,
  Emit
} from "vue-property-decorator";
@Component({
  name: "SonComp"
})
export default class extends Vue {
  // propSync
  @PropSync("syncData", { type: String }) syncedName!: string;
  // model
  @Model("onModelChange", { type: String }) readonly modelData!: String;
  // inject
  @Inject("providData") readonly providData!: String;
  @Inject({ from: "providData2", default: "default provid data" })
  readonly pdata!: String;
  // emit
  @Emit("sonChange")
  inpChange(e: any) {
    console.log(e.target.value);
    return e.target.value;
  }
  // method
  refActFun() {
    console.log("REF active");
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 30px;
  padding: 30px;
  border: 1px solid #dddded;
}
</style>
