<template>
  <li class="trees">
    <div @click="toggle" @mouseover="flag = !flag" >
      <span v-if="hasChild">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jia" />
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--xiaoxuxian" />
        </svg>
      </span>
      <span v-if="!hasChild">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jian" />
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon--xiaoxuxian" />
        </svg>
      </span>
      <span v-if="modify">
          {{data[treeProps.label]}}
      </span>
      <span v-else>
          <input type="text" :placeholder=data[treeProps.label] ref="inp" @blur="modifyTree()">
      </span>
    </div>
    <ul v-show="isOpen" v-if="hasChild">
      <tree-item
        v-for="(item, index) in data[treeProps.children]"
        :data="item"
        :key="index"
        :treeProps="treeProps"
      ></tree-item>
    </ul>
    <div class="btns" v-show="flag">
      <svg class="icon" aria-hidden="true" @click="addTree(data)">
        <use xlink:href="#icon-tianjia" />
      </svg>
      <svg class="icon" aria-hidden="true"  @click="removeTree(data)">
        <use xlink:href="#icon-shanchu" />
      </svg>
      <svg class="icon" aria-hidden="true"  @click="modify = false">
        <use xlink:href="#icon-xiugai" />
      </svg>
    </div>
  </li>
</template>

<script>
export default {
  name: "TreeItem", //递归组件必须有name
  props: {
    data: {
      type: [Object, Array], //多个可能的类型
      required: true
    },
    // label、children 默认值
    treeProps: {
      type: Object,
      default: () => ({
        children: "children",
        label: "label"
      })
    }
  },
  data() {
    return {
      isOpen: false,
      flag: false,
      modify:true
    };
  },
  computed: {
    // 判断当前级别是否还有children
    hasChild() {
      return (
        this.data[this.treeProps.children] &&
        this.data[this.treeProps.children].length
      );
    }
  },
  methods: {
    // 点击子菜单也要判断是否有children，有就展开
    toggle() {
      if (this.hasChild) {
        this.isOpen = !this.isOpen;
      }
    },
    // 因为递归组件的使用 this.$emit父子传参有误
    addTree(record){
      let add ={id:new Date().getTime(),name:"未命名",children:[]};
      record.children.push(add);
    },
    removeTree(record){
      console.log(record,"删除")
    },
    modifyTree(){
      let val = this.$refs.inp.value;
      this.data.name = val
      this.modify = true
    },
  }
};
</script>

<style>
ul {
  list-style: none;
  margin: 10px 0;
  padding-left: 20px;
}
li {
  color: #000;
  position: relative;
}
li > div {
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.btns {
  position: absolute;
  top: 0;
  left: 100px;
  background: rgba(0, 0, 0, 0.2);
  padding: 0 5px;
}
.btns > .icon:hover{
  color:#6495ed;
}
/* [v-cloak] {
  display: none;
} */
</style>
