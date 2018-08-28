<template>
  <div id="tools" v-cloak v-title data-title="常用">
    <loading v-if="loading"></loading>
    <div v-else class="opacity0">
      <div class="video-banner">
        <router-link to="/freevideo">
          <img src="../../static/images/video-banner.png" alt="">
        </router-link>
      </div>
      <div class="layer">
        <div v-for="(con,index) in dataCon" :key="index">
          <div class="panel-title card">{{con.title}}</div>
          <ul>
            <li v-for="(item,itemindex) in con.list" :key="itemindex">
              <div class="card">
                <a class="card-heading link-tooltip" :title="item.url"
                   :href="item.url"
                   target="_blank">
              <span class="card-icon">
                  <img :src="item.img">
              </span>
                  <span class="card-title">{{item.title}}</span>
                </a>
                <div class="card-body">
                  {{item.des}}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loading from "../components/loading";

export default {
  name: "tools",
  data() {
    return {
      loading: true,
      dataCon: []
    };
  },
  created() {},
  mounted() {
    this.$axios
      .get(`../../static/tools.json`)
      .then(res => {
        if (res.status == 200) {
          setTimeout(() => {
            this.dataCon = res.data;
            this.loading = false;
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.loading = false;
      });
  },
  methods: {},
  components: {
    loading
  }
};
</script>

<style lang="less" scoped>
.video-banner {
  width: 960px;
  margin: 0 auto;
}

.layer {
  width: 960px;
  margin: 50px auto;
  background-color: rgba(240, 240, 240, 0.69);
  border-radius: 5px;
  padding: 20px;
  overflow: auto;
  .panel-title {
    padding: 8px 12px;
    display: inline-block;
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 900;
    color: #666;
  }
  .card {
    box-shadow: 0px 2px 0px rgba(170, 170, 170, 0.1);
    background: #fff;
    margin-bottom: 20px;
    border-radius: 3px;
    margin-left: 2px;
    margin-right: 2px;
  }
  ul {
    margin-right: -10px;
    margin-left: -10px;
    overflow: auto;
    li {
      float: left;
      width: 25%;
      position: relative;
      min-height: 1px;
      padding-right: 10px;
      padding-left: 10px;
      .card-heading {
        overflow: hidden;
        margin-bottom: 7px;
        display: block;
        padding: 10px 18px 0;
        color: #333;
        .card-icon {
          width: 32px;
          height: 32px;
          float: left;
          display: block;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .card-title {
          display: block;
          padding-left: 10px;
          margin-top: 6px;
          font-weight: 700;
          font-size: 15px;
          color: inherit;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .card-body {
        color: #666666;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 2px;
        padding: 0 18px 12px 18px;
      }
    }
  }
}
</style>
