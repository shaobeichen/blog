<template>
  <div id="shot" v-cloak v-title data-title="摄影">
    <div class="layer">
      <div class="wrapper">
        <imgmix></imgmix>
      </div>
    </div>


  </div>
</template>

<script>
  import imgmix from '../components/imgmix'

  export default {
    name: 'shot',
    data() {
      return {}
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    components: {
      imgmix
    }
  }
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
