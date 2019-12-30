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
    <div>mixin: {{ mixinValue }}</div>
    <div>测试： {{ name }}</div>
    <SonComp
      :syncData.sync="syncData"
      v-model="modelData"
      @sonChange="sonChange"
      ref="sonComp"
    ></SonComp>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch,
  Provide,
  Ref
} from "vue-property-decorator";
import SonComp from "./SonComp.vue";
import MyMixin from "@/mixin/mixin.ts";
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
export default class extends MyMixin {
  // ref
  @Ref("sonComp") readonly sonRef!: SonComp;
  // data数据
  private myMsg = "DataMsg";
  syncData = "syncData";
  inpVal = "";
  modelData = "";
  sonVal = "";
  // 两种写法均可
  data() {
    return {
      name: "lijing"
    };
  }
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
    // 全局属性 需要定义
    console.log("globalVal: ", this.$globalVal);
    console.log("=====mounted=====");
  }

  // methods
  onButtonClick() {
    console.log("click");
  }

  sonChange(val: any) {
    this.sonVal = val;
  }
  // active ref
  activeRef() {
    this.sonRef.refActFun();
  }

  // Hook
  beforeRouteEnter(to: any, from: any, next: any) {
    console.log("beforeRouteEnter");
    next(); // needs to be called to confirm the navigation
  }
}
</script>

<style lang="scss" scoped></style>
