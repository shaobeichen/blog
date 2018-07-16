<template>
  <div id="themeChange">
    <ul>
      <li :class="{ 'timeActive': time == `One` }">
        <a href="javascript:;" @click="changeTheme(`One`)"></a>
      </li>
      <li :class="{ 'timeActive': time == `Two` }">
        <a href="javascript:;" @click="changeTheme(`Two`)"></a>
      </li>
      <li :class="{ 'timeActive': time == `Three` }">
        <a href="javascript:;" @click="changeTheme(`Three`)"></a>
      </li>
    </ul>
    <a class="def-theme" href="javascript:;" @click="changeTheme(``)">恢复默认时间主题</a>
  </div>
</template>

<script>
  import dayjs from 'dayjs';

  export default {
    name: "themeChange",
    data() {
      return {}
    },
    methods: {
      changeTheme(val) {
        if (!val) {
          localStorage.setItem('theme', '');
          let hours = dayjs().format('HH');
          if ((hours >= 18 && hours <= 23) || (hours >= 0 && hours < 6)) {
            val = `Three`;
          } else if (hours >= 6 && hours < 12) {
            val = `One`;
          } else if (hours >= 12 && hours < 18) {
            val = `Two`;
          }
        } else {
          localStorage.setItem('theme', val);
        }

        document.body.className = `theme${val}`;
        this.$emit('timeEmit', val);

      }
    },
    props: ['time']
  }
</script>

<style lang="less" scoped>
  @bg: '../../static/images/kv-cur-bg.png';
  .def-theme {
    color: #ffffff;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 12px;
  }

  ul {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  li:nth-of-type(1) {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 10px 0 12px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(@bg) no-repeat;
      background-position: -10px -80px;
      transition: all 0.6s ease;
      &:hover {
        background-position: -10px -160px;
      }
    }
  }

  li:nth-of-type(2) {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 10px 0 12px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(@bg) no-repeat;
      background-position: -110px -80px;
      transition: all 0.6s ease;
      &:hover {
        background-position: -110px -160px;
      }
    }
  }

  li:nth-of-type(3) {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 10px 0 12px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(@bg) no-repeat;
      background-position: -210px -80px;
      transition: all 0.6s ease;
      &:hover {
        background-position: -210px -160px;
      }
    }

  }

  li:nth-of-type(1).timeActive {
    a {
      background-position: -10px -160px;
    }
  }

  li:nth-of-type(2).timeActive {
    a {
      background-position: -110px -160px;
    }
  }

  li:nth-of-type(3).timeActive {
    a {
      background-position: -210px -160px;
    }
  }

</style>
