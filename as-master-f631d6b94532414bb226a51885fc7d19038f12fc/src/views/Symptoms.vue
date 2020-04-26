

<template>
  <div id="form">
    <form action="symptomsCheck" method="post" @submit="formSubmit">
      <h1>SYMPTOMS CHECK</h1>
      <br />
      <label>
        <ul>Are you feeling Cough?</ul>
      </label>
      <ul>
        <input type="radio" name="cough" value="yes" v-model="q1" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="cough" value="no" v-model="q1" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>Are you feeling Cold?</ul>
      </label>
      <ul>
        <input type="radio" name="cold" value="yes" v-model="q2" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="cold" value="no" v-model="q2" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>Are you suffering from fever?</ul>
      </label>
      <ul>
        <input type="radio" name="fever" value="yes" v-model="q3" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="fever" value="no" v-model="q3" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>Have you travelled from foreign countries in past 14 days?</ul>
      </label>
      <ul>
        <input type="radio" name="country" value="yes" v-model="q4" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="country" value="no" v-model="q4" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>Are you facing problem in breathing?</ul>
      </label>
      <ul>
        <input type="radio" name="breathe" value="yes" v-model="q5" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="breathe" value="no" v-model="q5" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>Have you travelled in the past 14 days to regions affected by COVID-19?</ul>
      </label>
      <ul>
        <input type="radio" name="region" value="yes" v-model="q6" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="region" value="no" v-model="q6" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>HAve you been in contact with any one who has a confirmed COVID-19 diagnosis?</ul>
      </label>
      <ul>
        <input type="radio" name="contact" value="yes" v-model="q7" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="contact" value="no" v-model="q7" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>Did you have any disease(Heart disease/Lungs disease/kidney disease/diabetes?</ul>
      </label>
      <ul>
        <input type="radio" name="disease" value="yes" v-model="q8" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="disease" value="no" v-model="q8" color="red"/>No
        <br />
      </ul>
      <br />
      <label>
        <ul>Are you age 60 or older?</ul>
      </label>
      <ul>
        <input type="radio" name="age" value="yes" v-model="q9" color="red"/>Yes
        <br />
      </ul>
      <ul>
        <input type="radio" name="age" value="no" v-model="q9" color="red"/>No
        <br />
      </ul>
      <br />
      <!-- <input type="submit" id="submit" value="Submit" style="margin-left: 50%;margin-bottom:10px" @click="$router.push('/optionpage')" /> -->
      <v-btn rounded color="primary" dark @click="$router.push('/optionpage')" >Submit</v-btn>
    </form>
  </div>
</template> 

<script>
export default {
  data(){
    return{
      q1:'', 
      q2:'',
      q3:'',
      q4:'',
      q5:'',
      q6:'',
      q7:'',
      q8:'',
      q9:'',
    }
  },
  methods: {

            formSubmit(e) {

                e.preventDefault();

                let currentObj = this;

                this.axios.post('http://localhost:9090/QuestionaireForm', {

                    q1: this.q1,
                    q2: this.q2,
                    q3: this.q3,
                    q4: this.q4,
                    q5: this.q5,
                    q6: this.q6,
                    q7: this.q7,
                    q8: this.q8,
                    q9: this.q9,

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






<style scoped>
#submit {
  text-align: center;
  display: block;
  background-color: lightblue;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>

