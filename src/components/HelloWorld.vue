<template>
  <div class="hello">
    <el-table
      ref="multipleTable"
      border
      stripe
      :data="table.tableData"
      tooltip-effect="dark"
      style="width: 100%;margin-top: 30px"
    >
      <el-table-column label="序号" type="index" width="70"></el-table-column>
      <template v-for="(header, index) in table.header">
        <el-table-column
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
            name: "1",
            format: "2",
            alias: "3",
            coreElement: "4",
            associatedData: "5"
          },
          {
            name: "6",
            format: "7",
            alias: "8",
            coreElement: "9",
            associatedData: "10"
          },
          {
            name: "q",
            format: "w",
            alias: "e",
            coreElement: "r",
            associatedData: "t"
          }
        ],
        header: [
          {
            label: "属性字段",
            field: "name"
          },
          {
            label: "字段格式",
            field: "format"
          },
          {
            label: "字段别名",
            field: "alias"
          },
          {
            label: "是否为核心要素",
            field: "coreElement"
          },
          {
            label: "关联数据",
            field: "associatedData"
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
