<template>
  <div id="freevideo" v-cloak v-title data-title="免费看VIP电影">
    <div class="video-banner">
      <img src="../../static/images/video-banner.png" alt="">
    </div>
    <div class="layer">
      <div class="content">
        <select v-model="selectVal">
          <option :value="item.url" v-for="item in list.list">{{item.name}}</option>
        </select>
        <input type="text" placeholder="输入视频连接地址" v-model="inputVal">
        <button @click="go(selectVal)">确定</button>
        <p class="video-tips">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-3"></use>
          </svg>
          提示：我觉得我不用提示你也知道怎么用。(｡◕ˇ∀ˇ◕)
        </p>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'freevideo',
    data() {
      return {
        list: {},
        selectVal: '',
        inputVal: '',
      }
    },
    created() {
      this.$axios.get(`../../static/vlist.json`).then((res) => {
        if (res.status == 200) {
          this.list = res.data;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    mounted() {

    },
    methods: {
      go(val) {
        if (val && this.inputVal) {
          if (this.inputVal.match('http')) {
            window.open(`${val}${this.inputVal}`);
          } else {
            alert('你填写地址的格式恐怕不对吧，不要乱写好不好？٩(๑>◡<๑)۶');
          }
        } else {
          alert('你没有选择线路或者没填写视频地址. !!!∑(ﾟДﾟノ)ノ');
        }
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  .video-banner {
    width: 960px;
    margin: 0 auto;
  }

  .layer {
    position: relative;
    width: 960px;
    text-align: center;
    margin: 50px auto;
    height: auto;
    .video-tips {
      background: #ffffff;
      padding: 10px;
      color: rgba(255, 58, 19, 0.56);
      font-size: 14px;
      margin: 50px 0 0 0;
      line-height: 22px;
    }
    .content {
      position: absolute;
      left: 50%;
      top: 100px;
      transform: translate(-55%, -50%);
      overflow: auto;
      width: 620px;
    }
    select {
      float: left;
      width: 200px;
      height: 40px;
      border: 0;
      padding: 0 10px;
      margin: 0 10px 0 0;
      overflow: auto;
    }
    input {
      float: left;
      width: 300px;
      height: 40px;
      border: 0;
      padding: 0 10px;
      margin: 0 10px 0 0;
      overflow: auto;
    }
    button {
      float: left;
      width: 100px;
      height: 40px;
      border: 0;
      background: #ffffff;
      cursor: pointer;
      padding: 0 10px;
      overflow: auto;
      transition: all .6s ease;

    }
    button:hover {
      background: #ff3a13;
      color: white;
      transition: all .6s ease;

    }
  }

  select {

  }
</style>
