<template>
      <div id="app">
      <h2>QUESTON AND ANSWERS ON COVID-19</h2><br><br>

    <button class="accordion" v-on:click="showDialog">What is Corona Virus?</button>
    <div class="panel">
      <p>
      Coronaviruses are a large family of viruses which may cause illness in animals or humans.In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS).The most recently discovered coronavirus causes coronavirus disease COVID-19.
      </p>
    </div>

    <button class="accordion" v-on:click="showDialog">What can i do to protect myself and prevent the spread of disease?</button>
    <div class="panel">
      <p>
        <ul>
        1.Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.
        <br></ul>
        <ul>
        
        2.Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
        <br></ul>
        <ul>
        3.Avoid touching eyes, nose and mouth.<br></ul>
        <ul>
        4.Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately.<br></ul>
        <ul>
        5.Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance. Follow the directions of your local health authority.<br></ul>
        <ul>
        6.Keep up to date on the latest COVID-19 hotspots (cities or local areas where COVID-19 is spreading widely). If possible, avoid traveling to places especially if you are an older person or have diabetes, heart or lung disease.</ul>
       

      </p>
    </div>

    <button class="accordion" v-on:click="showDialog">Is COVID-19 is airborne ?</button>
    <div class="panel">
      <p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or speaks. These droplets are too heavy to hang in the air. They quickly fall on floors or surfaces. 
You can be infected by breathing in the virus if you are within 1 metre of a person who has COVID-19, or by touching a contaminated surface and then touching your eyes, nose or mouth before washing your hands.</p>
   
   </div>
   <button class="accordion" v-on:click="showDialog">How to wash fruits and vegetables in the time of COVID-19?</button>
    <div class="panel">
      <p>
      Fruits and vegetables are essential components of a healthy diet. Wash them the same way you would in any other circumstance. Before handling them, wash your hands with soap and water. Then, wash fruits and vegetables thoroughly with clean water, especially if you eat them raw.
      </p>
    </div>

    <button class="accordion" v-on:click="showDialog">How likely am i catch COVID-19?</button>
    <div class="panel">
      <p>
      The risk depends on where you  are - and more specifically, whether there is a COVID-19 outbreak unfolding there.

For most people in most locations the risk of catching COVID-19 is still low. However, there are now places around the world (cities or areas) where the disease is spreading. For people living in, or visiting, these areas the risk of catching COVID-19 is higher. Governments and health authorities are taking vigorous action every time a new case of COVID-19 is identified. Be sure to comply with any local restrictions on travel, movement or large gatherings. Cooperating with disease control efforts will reduce your risk of catching or spreading COVID-19.
      </p>
    </div>

     <button class="accordion" v-on:click="showDialog">Are antibiotic effective in preventing COVID-19? </button>
    <div class="panel">
      <p>
      No. Antibiotics do not work against viruses, they only work on bacterial infections. COVID-19 is caused by a virus, so antibiotics do not work. Antibiotics should not be used as a means of prevention or treatment of COVID-19. They should only be used as directed by a physician to treat a bacterial infection. 
      </p>
    </div>

     <button class="accordion" v-on:click="showDialog">Should i wear mask?</button>
    <div class="panel">
      <p>
      Only wear a mask if you are ill with COVID-19 symptoms (especially coughing) or looking after someone who may have COVID-19. Disposable face mask can only be used once. If you are not ill or looking after someone who is ill then you are wasting a mask. There is a world-wide shortage of masks, so WHO urges people to use masks wisely.

WHO advises rational use of medical masks to avoid unnecessary wastage of precious resources and mis-use of masks 
      </p>
    </div>
    <button class="accordion" v-on:click="showDialog">Can i catch COVID-19 from my pet?</button>
    <div class="panel">
      <p>
      1.We are aware of instances of animals and pets of COVID-19 patients being infected with the disease;
  <br>2.As the intergovernmental body responsible for improving animal health worldwide, the World Organisation for Animal Health (OIE) has been developing technical guidance on specialised topics related to animal health, dedicated to veterinary services and technical experts (including on testing and quarantine);
  <br>3.There is a possibility for some animals to become infected through close contact with infected humans. Further evidence is needed to understand if animals and pets can spread the disease;
   <br>4.Based on current evidence, human to human transmission remains the main driver;
   <br>5.It is still too early to say whether cats could be the intermediate host in the transmission of the COVID-19.
      </p>
    </div>

    <button class="accordion" v-on:click="showDialog">How lond the virus survive on the surface?</button>
    <div class="panel">
      <p>
      It is not certain how long the virus that causes COVID-19 survives on surfaces, but it seems to behave like other coronaviruses. Studies suggest that coronaviruses (including preliminary information on the COVID-19 virus) may persist on surfaces for a few hours or up to several days. This may vary under different conditions (e.g. type of surface, temperature or humidity of the environment).

If you think a surface may be infected, clean it with simple disinfectant to kill the virus and protect yourself and others. Clean your hands with an alcohol-based hand rub or wash them with soap and water. Avoid touching your eyes, mouth, or nose.
      </p>
    </div>

     <button class="accordion" v-on:click="showDialog">Is there anything i should not do?</button>
    <div class="panel">
      <p>
      The following measures ARE NOT effective against COVID-2019 and can be harmful:
<br>
Smoking<br>
Wearing multiple masks<br>
Taking <br>
      </p>
    </div>



    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    showDialog:function(){
      var acc = document.getElementsByClassName("accordion");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
        });
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}

.accordion:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796"; /* Unicode character for "minus" sign (-) */
}

</style>
