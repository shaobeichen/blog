<template>
  <div id="shot" v-cloak v-title data-title="摄影">
    <loading v-if="loading"></loading>
    <div v-else class="opacity0">
    <div class="layer">
      <div class="wrapper">
        <imgmix></imgmix>
      </div>
    </div>
   </div>

  </div>
</template>

<script>
import imgmix from "../components/imgmix";
import loading from "../components/loading";

export default {
  name: "shot",
  data() {
    return {};
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 300);
  },
  methods: {},
  components: {
    imgmix,
    loading
  }
};
</script>

<style lang="less" scoped>
.layer {
  width: 1000px;
  margin: 50px auto;
}

.wrapper {
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
}
</style>
