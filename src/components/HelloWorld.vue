<template>
  <div class="hello">
    <el-table
      ref="multipleTable"
      border
      stripe
      :data="table.tableData"
      tooltip-effect="dark"
      show-summary
      :summary-method="getSummaries"
      sum-text="我的合计"
      style="width: 100%;margin-top: 30px"
    >
      <el-table-column label="序号" type="index" width="170"></el-table-column>
      <template v-for="(header, index) in table.header">
        <el-table-column
          :fixed="header.fixed || false"
          :prop="header.field"
          :key="index"
          :label="header.label"
          :width="header.width || ''"
          :align="header.align || 'left'"
          :sortable="header.sortable"
          show-overflow-tooltip
        >
          <template slot-scope="scope">
            <template v-if="header.field == 'associatedData'">
              <el-input
                v-model="scope.row[header.field]"
                class="input"
                type="number"
                @change="tableBlurFunc($event, scope.row)"
              ></el-input>
            </template>
            <template v-else>
              <span>{{ scope.row[header.field] || "" }}</span>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      table: {
        tableData: [
          {
            name: "wq1",
            format: "dw1",
            alias: "qwd3",
            coreElement: "4",
            associatedData: "5"
          },
          {
            name: "22d6",
            format: "7ad",
            alias: "dw8",
            coreElement: "9",
            associatedData: "10"
          },
          {
            name: "2qd",
            format: "dw3",
            alias: "qd4",
            coreElement: "1",
            associatedData: "11"
          }
        ],
        header: [
          {
            label: "属性字段",
            field: "name",
            width: "200",
            fixed: true
          },
          {
            label: "字段格式",
            field: "format",
            width: "200"
          },
          {
            label: "字段别名",
            field: "alias",
            width: "200"
          },
          {
            label: "是否为核心要素",
            field: "coreElement",
            width: "200"
          },
          {
            label: "关联数据",
            field: "associatedData",
            width: "200"
          }
        ]
      },
      sels: [] //勾选复选框时获取整行数据
    };
  },
  methods: {
    //勾选时获得勾选数据
    // selsChange(sels) {
    //   this.sels = sels;
    // }
    tableBlurFunc(val, filed) {
      console.log("105", val, filed);
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  width: 800px;
  margin: 0 auto;
  overflow-x: auto;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* .input .el-input__inner {
  border: none;
  background: transparent;
  text-align: center;
}
.el-table th > .cell {
  text-align: center;
}
.el-table .cell {
  text-align: center;
} */
</style>
