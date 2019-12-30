<template>
  <div class="container">
    <div>data: {{ myMsg }}</div>
    <div>{{ computedMsg }}</div>
    <div>props: {{ propMessage }}</div>
    <div><input type="text" v-model="inpVal" /></div>
    <div><button @click="onButtonClick">click</button></div>
    <div>.sync绑定：{{ syncData }}</div>
    <div>子组件v-model: {{ modelData }}</div>
    <div>emit val {{ sonVal }}</div>
    <div><button @click="activeRef">active ref</button></div>
    <SonComp
      :syncData.sync="syncData"
      v-model="modelData"
      @sonChange="sonChange"
      ref="sonComp"
    ></SonComp>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Provide } from "vue-property-decorator";
import SonComp from "./SonComp.vue";
@Component({
  name: "Test",
  props: {
    propMessage: {
      type: String,
      default: "Props"
    }
  },
  components: {
    SonComp
  }
})
export default class extends Vue {
  // data数据
  private myMsg = "DataMsg";
  syncData = "syncData";
  inpVal = "";
  modelData = "";
  sonVal = "";
  // computed
  get computedMsg() {
    return "computed:" + this.myMsg;
  }
  // watch
  @Watch("inpVal", { immediate: true, deep: true })
  onInpValChange(val: String, oldVal: String) {
    console.log("val :", val);
    console.log("oldVal :", oldVal);
  }

  // provid
  @Provide() providData = "pppp";
  @Provide() providData2 = "dddd";

  // lifecycle
  created() {
    console.log("=====created=====");
  }

  mounted() {
    console.log("=====mounted=====");
  }

  // methods
  onButtonClick() {
    console.log("click");
  }

  sonChange(val: any) {
    this.sonVal = val;
  }

  activeRef() {
    this.$refs.sonComp.refActFun();
  }
}
</script>

<style lang="scss" scoped></style>
