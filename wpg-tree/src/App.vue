<template>
  <div id="app">
    <wpg-tree
      :data="data"
      show-checkbox
      highlight-current
      node-key="id"
      default-expand-all
      check-on-click-node
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
      ref="tree"
    ></wpg-tree>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                data: [
                    {
                        id: 1,
                        label: "一级 1",
                        icon: {
                            name: "icon-ic_cloud_done",
                            style: {
                                fontSize: "16px",
                                color: "#1890ff"
                            }
                        },
                        children: [
                            {
                                id: 4,
                                label: "二级 1-1",
                                children: [
                                    {
                                        id: 9,
                                        label:
                                            "三级 1-1-1三级 1-1-1三级 1-1-1三级 1-1-1",
                                        icon: {
                                            name: "icon-ic_cloud_done",
                                            style: {
                                                fontSize: "16px",
                                                color: "#1890ff"
                                            }
                                        }
                                    },
                                    {
                                        id: 10,
                                        label: "三级 1-1-2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        label: "一级 2",
                        children: [
                            {
                                id: 5,
                                label: "二级 2-1"
                            },
                            {
                                id: 6,
                                label: "二级 2-2"
                            }
                        ]
                    },
                    {
                        id: 3,
                        label: "一级 3",
                        children: [
                            {
                                id: 7,
                                label: "二级 3-1"
                            },
                            {
                                id: 8,
                                label: "二级 3-2"
                            }
                        ]
                    }
                ],
                defaultProps: {
                    label: "name",
                    children: "zones",
                    isLeaf: "leaf"
                },
            }
        },
        methods: {
            filterNode(value, data) {
                return (data.label || data.name).includes(value);
            },
            handleNodeClick(data, node, el) {
                console.log("node click");
            }
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
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
</style>
