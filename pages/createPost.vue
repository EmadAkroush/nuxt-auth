<template>
  <div id="app">
    <div class="container">
      <div id="bar">
        <h1>Vue Email Editor (Demo)</h1>
        <EmailEditor 
        ref="emailEditor"
        :min-height="minHeight"
        @load="editorLoaded"
        @ready="editorReady"
      />
        
        <button @click="saveDesign">Save Design</button>
        <button @click="exportHtml">Export HTML</button>
      </div>
      

    </div>
  </div>
</template>
  
<script>
import { EmailEditor } from 'vue-email-editor';

export default {
  name: 'app',
  components: {
    EmailEditor,
  },
  data() {
      return {
        minHeight: '800px',
      };
    },
  methods: {
    // called when the editor is created
    editorLoaded() {
      console.log('editorLoaded');
      // Pass the template JSON here
      // this.$refs.emailEditor.editor.loadDesign({});
    },
    // called when the editor has finished loading
    editorReady() {
      console.log('editorReady');
    },
    saveDesign() {
      this.$refs.emailEditor.editor.saveDesign((design) => {
        console.log('saveDesign', design);
      });
    },
    exportHtml() {
      this.$refs.emailEditor.editor.exportHtml((data) => {
        console.log('exportHtml', data);
      });
    },
  },
};
</script>
<style>
.unlayer-editor{
  height: 250px;
}
</style>

