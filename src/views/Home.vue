<template>
  <div class="home">
    <div class="example">
      <h4>组件列表</h4>
      <div class="row" @click="goto('/table')">
        <button>table组件</button>
        <p>
          仿view table组件实现，支持自定义slot插槽
        </p>
      </div>
      <div class="row" @click="goto('/swiper')">
        <button>swiper组件 </button>
        <p>
            无缝滚动轮播图组件
        </p>
      </div>
    </div>
  </div>
</template>

<script >
import vTable from '@/components/table/index.vue'
import page from '@/components/page/index.vue'
const genData = () => {
  let arr = []
  for (let i = 1; i <= 100; i++) {
    arr.push({
      name: '张' + i + '山',
      age: i
    })
  }
  return arr
}
let arr = genData()
export default {
  data() {
    return {
      checkedAll: true,
      total: arr.length,
      pageSize: 10,
      current: 3,
      data: arr,
      column: [
        { key: 'name', title: '姓名', slot: true },
        { key: 'age', title: '年龄' }
      ]
    }
  },
  components: {
    vTable,
    page
  },
  computed: {
    list() {
      let start = (this.current - 1) * this.pageSize
      let end =
        start + this.pageSize >= this.total ? this.total : start + this.pageSize
      let arr = this.data.slice(start, end)
      return arr
    }
  },
  created() {},
  methods: {
    goto(path){
      this.$router.push(path)
    }
  }
}
</script>

<style scope lang="stylus">
.home {
  padding: 40px;
}

.example {
  padding: 50px;

  .row {
    display: flex;
    height: 60px;
    align-items: center;

    p {
      color: #666;
      font-size: 12px;
    }
  }

  button {
    cursor: pointer;
    color: #39f;
    padding: 0 12px;
    height: 30px;
    border: none;
    background: #fff;
    border-radius: 5px;
    font-size: 16px;
  }
}
</style>
