<template>
  <div>

    <section>

      <div>
        <h1 class='title'>Background</h1>
        <p>
          I'll be honest. This project is really just a filler project that I'll
          be working on until I come up with another project which may be a PHP
          site. As I was finishing up my Vietnam project, I wanted to build a project
          that would help to solidify some of the skills that I had learned on that
          project. I was browsing some of the datasets on the FiveThirtyEight
          github repo and found this dataset. So, I decided to play with it and
          see what I could build.
        </p>

        <p>
          This project will essentially be looking at Fandango movie ratings and
          comparing them to other movie ratings sites. From the FiveThirtyEight
          readme on the is data, they were looking at if Fandango rates movies
          higher to see if people are more likely to go to them. Since Fandango
          sells movie tickets this could be going on.
        </p>

        <p>I'll be doing some basic data analysis on the data as well as building
          a few graphs so that we can see the data visually. As for telling if
          Fandango does give higher rates - I'm not sure if I have the statistical
          background for that but we'll see! Finally, the layout of this project
          is simple. It's this page - I'll have some areas with data talk about it
          and then move on. The second page is my simple About page which is in all
          of these projects. Hey, I want to spend time working on the data analysis
          part then making an About page. That may change but for now I'mm
        </p>
      </div>

      <div class='pictureOne'>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "Purpose",
}
</script>

<style scoped>

section {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-left: 5%;
  margin-right: 5%;
}

.title {
  text-align: center;
  text-transform: uppercase;
  font-family: 'Roboto Mono', monospace;
}

.pictureOne {
  height: 500px;
  background-image: url('~@/assets/pic_2.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
