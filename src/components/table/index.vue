
<template>
  <table>
    <thead class="t-thead">
      <tr>
        <template v-if="selection">
          <selectionCell :value="checkedAll" @on-change="changecheckedAll" />
        </template>
        <th v-for="(col, i) in columns" :key="i">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in list" :key="i">
        <template v-if="selection">
          <selectionCell
            :index="i"
            :value="row.checked"
            @on-change="changeItem"
          />
        </template>

        <td v-for="(col, y) in columns" :key="y">
          <template v-if="'slot' in col && col.slot === true">
            <slot :row="row" :name="col.key"></slot>
          </template>
          <template v-else>
            {{ row[col.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import selectionCell from './selectionCell.vue'

export default {
  components: {
    selectionCell
  },
  props: {
    selection: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkedAll: false,
      list: []
    }
  },
  watch: {
    checkedAll(checked) {
      // this.transfromChecked(checked)
    },
    data: {
      immediate: true,
      deep: true,
      handler(val = []) {
        this.list = val.map(e => {
          e.checked = this.checkedAll
          return e
        })
      }
    },
    list: {
      deep: true,
      handler(val) {
        this.checkAllStatus()
      }
    }
  },
  methods: {
    changecheckedAll(checked) {
      this.transfromChecked(checked)
    },
    transfromChecked(flag) {
      this.$nextTick(() => {
        this.list.forEach((e, index) => {
          e.checked = flag
          const item = e
          this.list.splice(index, 1, item)
        })
        this.emitCheckedData(this.list)
      })
      // console.log(this.list)
    },
    changeItem(checked = false, index) {
      const item = this.list[index]
      item.checked = checked

      if (index !== undefined) {
        this.list.splice(index, 1, item)
      }

      this.emitCheckedData(this.list)
    },
    emitCheckedData(list) {
      let arr = list.map(e => {
        return e
      })
      arr = arr.filter(e => {
        if (e.checked) {
          return e
        }
      })

      console.log('arr', arr)
    },
    checkAllStatus() {
      let flag = this.list.every(e => {
        return e.checked
      })
      if (flag) {
        this.checkedAll = true
      }
    }
  }
}
</script>

<style lang='stylus'>

table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
}

.t-thead {
  color: #909399;
  font-weight: 500;
  background-color: #fff;
  border-color: grey;

  th {
    white-space: nowrap;
    overflow: hidden;
    user-select: none;
    text-align: left;
    background-color: #fff;
  }
}

table tbody td {
  border-bottom: 1px solid #ebeef5;
}

td, th {
  padding: 12px 0;
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
}
</style>
