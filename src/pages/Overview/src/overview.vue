<template>
  <div class="flex-container">
    <div class="tree-container">
      <h1 class="tree-title">数据概览</h1>
      <v-tree ref='tree' :data='treeData' :nocheck='true' :tpl='tpl' @node-click="nodeClick" />
    </div>
  </div>
</template>
<script>
import VTree from "vue-tree-halower";
import "vue-tree-halower/dist/halower-tree.min.css";
export default {
  data() {
    return {
      searchword: "",
      treeData: [
        {
          id: 1,
          title: "node1",
          expanded: true,
          children: [
            {
              id: 2,
              title: "node 1-1",
              expanded: true
            },
            {
              id: 3,
              title: "node 1-2"
            }
          ]
        }
      ]
    };
  },
  methods: {
    addHandler(event) {
      console.log(event.target.id);
    },
    tpl(node, ctx) {
      let isFolder = node.children && node.children.length;
      let titleClass = node.selected
        ? "node-title node-selected"
        : "node-title";
      if (node.searched) titleClass += " node-searched";
      let returnStr = (
        <span>
          <span
            class={titleClass}
            domPropsInnerHTML={node.title}
            onClick={() => {
              ctx.parent.nodeSelected(ctx.props.node);
            }}
          />
          {isFolder ? (
            <i
              class="iconfont icon-circleplus button"
              id={node.id}
              onClick={event => {
                this.addHandler(event);
              }}
            />
          ) : (
            <i />
          )}
        </span>
      );

      return returnStr;
    },
    nodeClick(node) {
      console.log(node);
    }
  },
  components: {
    VTree
  }
};
</script>
<style lang="scss" scoped>
.tree-title {
  font-size: 16px;
  margin-left: 15px;
}
.flex-container {
  height: 100%;
}
.tree-container {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 230px;
  height: 100%;
  float: left;
  width: 230px;
  background: #fff;
  border-radius: 0;
}
.halo-tree {
  padding: 0;
  margin: 0;
}
.button {
  color: #ea6947;
  cursor: pointer;
}
</style>
