<template>
  <div id="app">
    <vue-tinymce
      v-model="content" 
      :setting="setting" />
       
  </div>
</template>

<script>
// 安装依赖 @packy-tang/vue-tinymce  tinymce
export default {
  props:{
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plugins: {
      type: [String, Array],
      default: "link image media table code lists fullscreen quickbars preview"
    },
    toolbar: {
      type: [String, Array],
      default: "undo redo | fullscreen | formatselect alignleft aligncenter alignright alignjustify | link unlink | numlist bullist | image media table code | fontselect fontsizeselect forecolor backcolor | bold italic underline strikethrough | indent outdent | superscript subscript | removeformat preview|"
    }
  },
  data(){
    return {
      content: `<p>${this.value}</p>`,
      setting: {
        menubar: false,
        toolbar: this.toolbar,
        toolbar_drawer: "sliding",
        quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
        plugins: this.plugins,
        language: 'zh_CN',
        height: 350,
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        }

      }
    }
  },
  methods:{
    //清空编辑器
    
  },
  watch: {
    
  }

}
</script>