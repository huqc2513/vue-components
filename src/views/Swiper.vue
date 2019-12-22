<template>
  <div>
    滑动轮播图
    <div class="box">
      <div ref="cont" class="container">
        <div class="inner-wrap">
          <div class="red">1</div>
          <div class="yellow">2</div>
          <div class="green">3</div>
          <div class="pink">4</div>
        </div>
        <div class="swiper-pagination">   </div>
      </div>
    </div>

    <div class="btn-box">
      <button @click.stop="goto(0)">0</button>
      <button @click.stop="goto(1)">1</button>
      <button @click.stop="goto(2)">2</button>
      <button @click.stop="goto(3)">3</button>
      <button @click.stop="goto(4)">4</button>
    </div>
  </div>
</template>

<script>
import Swiper from '@/assets/common.js'

export default {
  mounted() {
    this.cont = this.$refs.cont
    this.swiper = new Swiper({
      el: this.cont
    })
  },
  methods: {
    goto(i) {
      this.swiper.setIndex(i)
    }
  }
}
</script>

<style scope lang="stylus">
.box {
  width: 300px;
  margin: 0 auto;
  border: 1px solid red;
  height: 200px;
}

.yellow {
  background: yellow;
}

.red {
  background: red;
}

.green {
  background: green;
}

.pink {
  background: pink;
}

.btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.container {
  width: 100%;
  height: 200px;
  display: flex;
  overflow: hidden;
  position: relative;

  .inner-wrap {
    display: flex;

    div {
      flex: 0 0 auto;
      width: 300px;
      height: 100%;
    }
  }

  .swiper-pagination {
    width: 100%;
    display: flex;
    height: 20px;
    position: absolute;
    bottom: 10px;
    left: 0;
    justify-content: center;
    align-items: center;

    .dot {
      width: 8px;
      height: 8px;
      display: inline-block;
      border-radius: 50%;
      background: #000;
      margin: 0 4px;
    }

    .active-dot {
      border-radius: 10px;
      background: #FFF !important;
      width: 20px !important;
      transition: all 0.2s;
    }
  }
}
</style>
