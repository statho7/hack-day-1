<template>
  <div id="preview">
  <input type="file" accept="image/*" @change="handleImage" id="file-input">
  <input id = "filename" type="text" placeholder="Filename" >
  <button type="submit" @click="submit"> Upload Image </button>
  <!--<img v-if="item.imageUrl" :src="item.imageUrl" /> -->
  </div>
</template>

<script>
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
      this.encodeImage(submittedImage);
    },
    encodeImage(fileObject){
    const reader = new FileReader();
    reader.onload = (e) => {
      this.image=e.target.result;
    };
    reader.readAsDataURL(fileObject)
    console.log(reader.result)
    console.log('ssdjsdbsadbosaddsdhbsds')
    },

  },
    uploadImage(filename,encodedString){
    axios({
      method: 'post',
      url: 'https://ck7f3w6408.execute-api.eu-west-1.amazonaws.com/IL/teams/nintendo/files/{fileName}',
      data: {encodedString}

}).then(({ data }) => (this.apiResponse = "Sucessfully uploaded to server"))
      .catch(
        () => (this.apiResponse = 'Failed to upload data to server.')
      )
  }
}

</script>
