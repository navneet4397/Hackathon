<template>
  <div class="text-center">
    <!-- <img alt="Vue logo" src="../assets/corona.png" height="240" width="500" > -->
    <v-form @submit="formSubmit">


 
      <v-carousel cycle height="180" hide-delimiters show-arrows-on-hover>
        <v-carousel-item
          v-for="(item,i) in images"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          contain
          height:100px
          widht:900px
        ></v-carousel-item>
      </v-carousel>



  <v-container fill-height>
      <v-flex xs12 sm8 offset-sm2 align-center justify-center>

        <h2 >Contact Details</h2>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            placeholder="Full Name" class="form-control" v-model="name"
          ></v-text-field>

          <v-text-field
            placeholder="City" class="form-control" v-model="city"
          ></v-text-field>

          <v-text-field
            placeholder="Area" class="form-control" v-model="area"
          ></v-text-field>
          <v-text-field
            placeholder="Mobile Number" class="form-control" v-model="mob_no"
          ></v-text-field>
        </v-col>
      </v-flex>
    </v-container>
    </v-form>

     <div class="text-center">
    <v-btn rounded color="primary" dark @click="$router.push('/optionpage')" >Submit</v-btn>
    <h5>* Fill all the details to move forward</h5>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data()
  {
    return{ 
      name: '',
      city: '',
      area: '',
      mob_no: '',

      images: [
        {
          src: require("../assets/corona.png")
        },
        {
          src: require("../assets/corona1.jpg")
        },
        {
          src: require("../assets/corona2.jpg")
        }
      ]

    }
  },

          methods: {

            formSubmit(e) {

                e.preventDefault();

                let currentObj = this;

                this.axios.post('http://localhost:9090/Users', {

                    name: this.name,
city: this.city,
mob_no:this.mob_no,
                    area: this.area

                })

                .then(function (response) {

                    currentObj.output = response.data;

                })

                .catch(function (error) {

                    currentObj.output = error;

                });

            }

          }

}
</script>

