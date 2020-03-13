<template>
  <div>
    <ul v-for="(item,index) in data" :key="index">
      <tree-item 
       :data="item" 
       :treeProps="treeProps" 
       ></tree-item>
    </ul>
  </div>
</template>

<script>
  import treeItem from './item'
  export default {
    components: {
      treeItem
    },
    props: {
      data: {
        type: [Object, Array],
        required: true
      },
      treeProps: {
        type: Object,
        default: () => ({
          children: 'children',
          label: 'label'
        })
      }
    },
    methods:{
     
    }
    
  }
</script>
