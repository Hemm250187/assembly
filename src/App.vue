<template>
  <div id="app">
    <p>富文本编辑器</p>
    <p>依赖quill</p> 
    <RTE></RTE>
    <p>依赖tinymce</p>
    <tinymce v-model="msg"></tinymce>
    <p>json编辑器</p>
    <jsonEditor :value="jsonData" :read-only="false" @changed="change"></jsonEditor> 
    <p>树状</p> 
     <trees :data="jsonData" :treeProps="propsxxx" ></trees>
     统计图表
     <chart></chart>
     列表拖拽排序
     <listDrag :list="jsonData"></listDrag>
  </div>
</template>

<script>
import RTE from './components/quillEditor/RTE'
import tinymce from './components/tinymce'
import jsonEditor from './components/jsonEditor'
import trees from "./components/tree/index"
import listDrag from "./components/drag"
import jsonData from "./utils/json/courses.json";

import chart from "@/components/chart"

export default {
  name: 'App',
  components: {
    tinymce,
    jsonEditor,
    RTE,
    trees,
    chart,
    listDrag
  },
  data(){
    return {
      msg: '请输入内容/',
      jsonData: jsonData,
      propsxxx: {
          children: 'children',
          label: 'name'
        },
    }
  },
  methods:{
    change(emit){
      console.log(emit,"emit")
    },
  
    
  }
}
</script>

<style lang="scss">

</style>
