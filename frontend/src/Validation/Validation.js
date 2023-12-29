const validation= (noteInformation)=>{
    const errors={};


    if(noteInformation.tittle.length<0 || noteInformation.tittle.length>50){
      errors.tittle= "The tittle must be between 1 and 50 characters in size"
    }
}
