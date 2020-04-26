<template>
<v-form  ref="form">
  <v-container  align="center">
<div>
<v-combobox v-model="sick.fluType" :items="flus" label="Flu Type"  hide-details="auto"  ></v-combobox><br>
<v-combobox v-model="sick.fluRemedy" :items="items[sick.fluType]" label="Remedies" ></v-combobox><br>
<v-combobox v-model="sick.centerNear" :items="centres" label="Center NearBy"  hide-details="auto"  ></v-combobox><br>
<v-btn align="center" rounded color="primary" type="submit" class="btn btn-primary js-blob-submit" data-edit-text="Submit" data-pull-text="Propose changes" @click="addData">
        Submit
      </v-btn>
<v-btn rounded color="primary" class="mr-4" @click="reset"> Reset Form </v-btn>
     
</div>
  </v-container>
</v-form>
</template>

<script>
export default{
  data(){
    
    return{
      
      sick:{
        fluType:'',
        flueRemedy:'',
        centerNear:''
      },
      centres:["Pimpri chinchwad","Aundh","Warje","Kalyani Nagar"],

     flus:["Cough","Cold","Severe Cough , Cold And Respiratory Problem"],
      items: {
          "Cough":['Honey Tea','Ginger','Fluids','Steam'],
          "Cold":['Chicken Soup Or Veg Soup','Ginger','Honey'],
          "Severe Cough , Cold And Respiratory Problem":['Consult A Doctor'],
    }}    
  },
  methods:
  {
        reset () {
        this.$refs.form.reset();
      },

     

  }

}
</script>


<style>

</style>
