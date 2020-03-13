<template>
  <div>
      <!--  -->
    <draggable tag="div" class="leftList" v-model="data" group="drag" :move="getdata" @update="datadragEnd">
      <div v-for="file in data" :key="file.id" class="list yellow">{{file.title}}</div>
    </draggable>
     <draggable tag="div" class="rightList" v-model="lists" group="drag" :move="getdata" @update="datadragEnd">
      <div v-for="file in lists" :key="file.id" class="list red">{{file.title}}</div>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable
  },
  props: { list: { type: [Object, Array] } },
  data() {
    return {
      data: this.list,
      lists:[{id:1,title:"aaa"},{id:2,title:"bbb"},{id:3,title:"cccc"},{id:4,title:"ddd"}]
    };
  },
  methods: {
    // 拖动中
    getdata(evt) {
       console.log(evt, "evt");
       console.log(evt.draggedContext.element.id)
    },
    // 拖动结束
    datadragEnd(evt) {
      console.log("拖动前的索引 :" + evt.oldIndex);
      console.log("拖动后的索引 :" + evt.newIndex);
    }
  }
};
</script>
<style lang='scss' scoped>
.leftList{
    float:left;
    width:400px;
    padding:10px;
    border:1px solid #666;
    margin-right: 10px;
}
.rightList{
    float: left;
    width:400px;
    padding:10px;
    border:1px solid #666;
}
.list{
    width:100%;
    height:30px;
    line-height: 30px;
    text-indent: 10px;
    &:hover{
        cursor: pointer;
        background:#eee;
    }
}
.yellow{
    color:green;
}
.red{
    color:red;
}
</style>