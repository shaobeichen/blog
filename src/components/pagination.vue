<template>
  <div id="pagination">
    <div class="pager">
      <button class="btn btn-pager" :disabled="current === 1" @click="prePage">上一页</button>
      <span v-if="pageNo !== 1" class="page-index" :class=" 1 === current ? 'active':''" @click="goPage(1)">1</span>
      <span v-if="preClipped" class="page-index">...</span>
      <span v-for="index in pages" class="page-index" :class="  index === current ? 'active':'' "
            @click="goPage(index)">{{index}}</span>
      <span v-if="backClipped" class="page-index">...</span>
      <span class="page-index" :class=" pageNo === current ? 'active':'' " @click="goPage(pageNo)">{{pageNo}}</span>
      <button class="btn btn-pager" :disabled="current === pageNo" @click="nextPage">下一页</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "pagination",
    data: function () {
      return {
        // 用于判断省略号是否显示
        backClipped: true,
        preClipped: false,
      }
    },
    props: {
      // 用于记录总页码，可由父组件传过来
      pageNo: {
        type: Number,
        default: 1
      },
      // 用于记录当前页数，这个与父组件进行数据交互来完成每一页的数据更新，所以我们只要改变current的值来控制整个页面的数据即可
      current: {
        type: Number,
        default: 1
      }
    },
    methods: {
      prePage() {
        // 上一页
        this.current--;
        this.$emit('update:current', this.current);
        this.scroll()
      },
      nextPage() {
        // 下一页
        this.current++;
        this.$emit('update:current', this.current);
        this.scroll()
      },
      goPage(index) {
        // 跳转到相应页面
        if (index !== this.current) {
          this.current = index;
          this.$emit('update:current', this.current);
          this.scroll()
        }
      },
      scroll() {
        let timmer = requestAnimationFrame(function fn() {
          let s = document.documentElement.scrollTop || document.body.scrollTop;
          if (s > 0) {
            s -= 30;
            window.scrollTo(0, s);
            timmer = requestAnimationFrame(fn);
          }
        })
      }
    },
    computed: {
      // 使用计算属性来得到每次应该显示的页码
      pages: function () {
        let ret = []
        if (this.current > 3) {
          // 当前页码大于三时，显示当前页码的前2个
          ret.push(this.current - 2)
          ret.push(this.current - 1)
          if (this.current > 4) {
            // 当前页与第一页差距4以上时显示省略号
            this.preClipped = true
          }
        } else {
          this.preClipped = false
          for (let i = 2; i < this.current; i++) {
            ret.push(i)
          }
        }
        if (this.current !== this.pageNo && this.current !== 1) {
          ret.push(this.current)
        }
        if (this.current < (this.pageNo - 2)) {
          // 显示当前页码的后2个
          ret.push(this.current + 1)
          ret.push(this.current + 2)
          if (this.current <= (this.pageNo - 3)) {
            //当前页与最后一页差距3以上时显示省略号
            this.backClipped = true
          }
        } else {
          this.backClipped = false
          for (let i = (this.current + 1); i < this.pageNo; i++) {
            ret.push(i)
          }
        }
        // 返回整个页码组
        return ret
      }
    }
  }
</script>
<style lang="less" scoped>
  .pager {
    text-align: center;
    width: 700px;
  }

  .btn-pager {
    margin-left: 10px;
    padding: 0px;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #ffffff;
    border-radius: 3px;
    cursor: url(../../static/images/pointer.cur), pointer;
  }

  .btn-pager:hover {
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
  }
  .btn-pager[disabled] {
    @color: #dedede;
    background-color: @color;
    border: 1px solid @color;
    cursor: not-allowed;
  }

  .page-index {
    display: inline-block;
    margin-left: 10px;
    width: 35px;
    height: 30px;
    line-height: 30px;
    background-color: #ffffff;
    color: #000000;
    border-radius: 3px;
    cursor: url(../../static/images/pointer.cur), pointer;
  }

  .active {
    color: #ffffff;
    background-color: rgba(255, 0, 0, 0.67);
  }
</style>
