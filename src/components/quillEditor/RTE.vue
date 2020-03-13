<template>
  <div class="editor">
      <quill-editor
        class="rich_text"
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @focus="onEditorFocus($event)"
        @blur="onEditorBlur($event)"
        @ready="onEditorReady($event)"
        @change="onEditorChange($event)"
      ></quill-editor>
      <div class="btn">
          <button class="release">发布</button>
          <button class="cancel">取消</button>
      </div>
    
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; // 调用富文本编辑器
import "quill/dist/quill.snow.css";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "highlight.js/styles/Zenburn.css"; //代码高亮
import quill from "quill";
import hljs from "highlight.js";
// import ImageResize from "quill-image-resize-module"; //调节图片大小
import { ImageDrop } from "quill-image-drop-module"; //拖拽图片
quill.register("modules/imageDrop", ImageDrop);
//quill.register("modules/imageResize", ImageResize);


var fonts = [
  "SimSun",
  "SimHei",
  "Microsoft-YaHei",
  "KaiTi",
  "FangSong",
  "Arial",
  "Times-New-Roman",
  "sans-serif"
];
var Font = quill.import("formats/font");
Font.whitelist = fonts; //将字体加入到白名单
quill.register(Font, true);

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      editor: null, // 富文本编辑器对象
      // 富文本编辑器默认内容
      content: `<p></p>`,
      editorOption: {
        //  富文本编辑器配置
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            ["blockquote", "code-block"], //引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ direction: "rtl" }], // 文本方向
            [{ list: "ordered" }, { list: "bullet" }], //列表
            [{ script: "sub" }, { script: "super" }], // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            [{ size: ["small", false, "large", "huge"] }], //字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //标题
            [{ color: [] }, { background: [] }], //字体颜色，字体背景颜色
            [{ font: fonts }], //字体种类
            [{ align: [] }], // 对齐方式
            ["clean"], //清除字体样式
            ["link", "image", "video"] //链接 图片、视频
          ],
          syntax: {
            highlight: text => {
              return hljs.highlightAuto(text).value; // 这里就是代码高亮需要配置的地方
            }
          },
          imageDrop: true,
          // imageResize: {
          //   displayStyles: {
          //     backgroundColor: "black",
          //     border: "none",
          //     color: "white"
          //   },
          //   modules: ["Resize", "DisplaySize", "Toolbar"]
          // },
        },
        theme: "snow", // 主题模式 snow bubble
        placeholder: "请输入正文"
      },

      quillUpdateImg: false,
      serverUrl: "", // 这里写你要上传的图片服务器地址
      header: { token: sessionStorage.token } // 有的图片服务器要求请求头需要有token
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 准备
    onEditorReady(editor) {},
    // 失去焦点事件
    onEditorBlur(editor) {},
    // 获得焦点事件
    onEditorFocus(editor) {},
    //内容改变事件
    onEditorChange({ quill, html, text }) {
      
    },

  },

  mounted() {
    this.editor = this.$refs.myQuillEditor.quill;
  },
  beforeDestroy() {
    this.editor = null;
    delete this.editor;
  }
};
</script>
<style lang='scss' scoped>
.editor {
  width: 100%;
  height: 100%;
  position: relative;
}
.rich_text {
  height: 80%;
}
.btn{
  position: absolute;
  right:10px;
  bottom: 10px;
}
</style>