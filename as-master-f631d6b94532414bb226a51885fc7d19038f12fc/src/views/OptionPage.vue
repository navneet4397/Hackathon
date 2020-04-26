<template>
  <div class="text-center">
    <img alt="Vue logo" src="../assets/corona.png" height="240" width="500" >
 <v-form>
  <v-container fill-height>
      <v-flex xs12 sm8 offset-sm2 align-center justify-center>

     <v-btn rounded color="primary" dark @click="$router.push('/symptoms')">Questionaire Form</v-btn><br><br>

<v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn rounded color="primary" dark v-on="on">Are you treating any patients in center</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Thank you for helping us</v-card-title>
        <v-card-text>With cases of COVID-19 spreading throughout Chicago and Illinois, doctors, nurses and other healthcare workers are on the frontlines 
            of the pandemic as they care for these critically ill patients rapidly filling our hospitals to capacity.
Healthcare workers cannot shelter in place with their loved ones. They are not 6 feet away from their patients. They put themselves at risk every single shift. And when they go home, they worry about exposing their families.
Facing enormous challenges, they are responding with courage, resolve and exemplary professionalism.
At the University of Chicago Medicine, hundreds of doctors volunteered to care for COVID-19 patients, before even being asked. Construction crews worked night and day to build a dedicated space in the emergency department for patients with COVID-like symptoms. Pediatric emergency room nurses have taken turns rotating into the
adult ED to help with the increase in patients.
Our medical students are pitching in to provide coronavirus education on the phone, donating blood and making facemasks, which are in short supply nationwide, preparing for the moment they are needed. Basic scientists from across the University are working with clinicians and hospital leaders to develop creative ways of 
overcoming shortages and new approaches to diagnosis and treatment.
These are just some of the examples of the commitment our faculty, staff, residents and students have as they take on this common threat.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <br>

     
     <v-btn rounded color="primary" dark @click="$router.push('/Map')">Nearest Covid Centers </v-btn><br><br>
      </v-flex>
    </v-container>
</v-form>
    </div>

    </template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>