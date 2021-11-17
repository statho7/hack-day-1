<template>
  <div id="preview">
  <input type="file" accept="image/*" @change="handleImage" id="file-input">

  <button type="submit" @click="uploadImage"> Upload Image </button>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name:'imageUpload',
  data(){
    return{
      image: ''
    }
  },
  methods:{
    handleImage(e){
      const submittedImage = e.target.files[0];
      this.encodeImage(submittedImage, submittedImage.name);
    },
    encodeImage(fileObject, fileName){
        const reader = new FileReader();
        reader.onload = (e) => {
          this.image=e.target.result;
        };
      reader.readAsDataURL(fileObject);
      reader.onload = (e) => {
        console.log(reader);
        console.log(reader.result);
        this.uploadImage(fileName,(reader.result.slice(21)));
      };
    },
    uploadImage(fileName,encodeImage){
    axios({
      method: 'post',
      url: `https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/nintendo/files/${fileName.slice(0,-4)}`,
      data: {encodeImage}

}).then(({ data }) => (this.apiResponse = "Sucessfully uploaded to server"))
      .catch(
        () => (this.apiResponse = 'Failed to upload data to server.')
      )
      console.log(`https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/nintendo/files/${fileName.slice(0,-4)}`)
  }
}
}
</script>
