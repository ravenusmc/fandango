<template>
  <div>

    <section>

      <div class='summary_area'>
        <h3 class='center font'>Summary</h3>

        <p class='paragraph font'>
          To me, it's fairly obvious that something is going on with the Fandango
          ratings. The average ratings for Rotten Tomatoes and Metacritic is 3.04 and
          2.94 for the professional critics. Meanwhile, the average rating for
          Fandango is 4.09. It's almost as if Fandango wants every movie to appear
          great so that people buy tickets from them to see the movie.
        </p>

        <p class='paragraph font'>
          Now looking at the graph to the right, which is based on users the result
          is about the same. The average user ratings for Rotten Tomatoes and
          Metacritic is 3.19 and 3.26. Looking at Fandango, it jumps up to 3.85 which
          is a little bit better. I'm not quite sure why the user ratings on
          Fandango are higher than the other two. That's something that should be
          investigated further to understand what's going on there. Is Fandango
          paying users to rate films higher?
        </p>

        <p class='paragraph font'>
          <span>Take Away:</span> As I've said before in many of my projects, I'm
          not a data scientist. However, if I was looking at movie reviews I would
          not use Fandango's reviews. Instead, I would go with Rotten Tomatoes or
          metacritics.
        </p>

      </div>

      <div class='pic_three'>
      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: "Summary"
}
</script>

<style scoped>
.center {
  text-align: center;
}

.font {
  font-family: 'Roboto Mono', monospace;
}

section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  margin-left: 10%;
  margin-right: 10%;
}

.pic_three {
  height: auto;
  background-image: url('~@/assets/pic_3.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.summary_area {
  margin-top: 25px;
}

.paragraph {
  margin-left: 5%;
  margin-right: 5%;
}

span {
  font-weight: bold;
}

@media only all and (max-width: 900px){

  section {
    grid-template-columns: 1fr;
  }

}
</style>
