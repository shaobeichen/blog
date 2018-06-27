<template>
  <div id="vheader">
    <div class="searchBar" id="searchBar">
      <div class="content" :class="searchBarHide == true ? 'isHide' :searchBarFixed == true ? 'isFixed' : '' ">
        <div class="layer">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/logo.png" alt="" width="40" height="40">
              <span class="css127d190621611d">小桥酒馆</span>
            </router-link>
          </div>
          <ul>
            <router-link to="/">
              <li>首页</li>
            </router-link>
            <router-link to="/blog">
              <li>博客</li>
            </router-link>
            <router-link to="/shot">
              <li>摄影</li>
            </router-link>
            <router-link to="/tools">
              <li>常用</li>
            </router-link>
            <router-link to="/about">
              <li>关于</li>
            </router-link>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "vheader",
    data() {
      return {
        searchBarFixed: '',
        searchBarHide: '',
        lastTime: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > this.lastTime) {//向下滚
          this.searchBarHide = true;
        } else {
          this.searchBarHide = false;
        }
        if (scrollTop === 0) {
          this.searchBarFixed = false;
        } else {
          this.searchBarFixed = true;
        }
        this.lastTime = scrollTop;
      },
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style lang="less" scoped>
  @import "../common/less/reset.less";
  @import "../common/less/theme/theme.less";
  @import "../common/less/global.less";

  #vheader {
    padding-bottom: 60px;
  }

  a {
    color: white;
  }

  .searchBar {
    transition: all 1s ease;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    color: white;
    .isFixed {
      position: fixed;
      background: rgba(0, 0, 0, 0.8) !important;
      top: 0;
      z-index: 999;
      transition: all 0.6s ease;
    }
    .isHide {
      transition: all 0.6s ease;
      position: fixed;
      background: rgba(97, 97, 97, 0.8) !important;
      top: -60px !important;
      z-index: 999;
    }
    .content {
      transition: all 0.6s ease;
      position: fixed;
      top: 0;
      background: rgba(97, 97, 97, 0);
      width: 100%;
      height: 60px;
      line-height: 60px;
    }
    .layer {
      width: 1200px;
      margin: 0 auto;
      .logo {
        float: left;
        img {
          vertical-align: middle;
          transform: translateY(-5px);
        }
        span {
          font-size: 30px;
        }
      }
    }
    ul {
      float: right;
      li {
        position: relative;
        padding: 0 20px;
        font-size: 14px;
        text-align: center;
        float: left;
        &::after {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: -1;
          width: 0;
          height: 3px;
          background-color: #ff0000;
          content: "";
          -webkit-transition: all .3s ease-in-out;
          -moz-transition: all .3s ease-in-out;
          -o-transition: all .3s ease-in-out;
          -ms-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
        }
        &:hover {
          color: #ff0000;
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
</style>
