<template>
  <div>

    <form @submit="submitSelection">
      <h5>Select a Movie:</h5>
        <input type="text" v-model="search" placeholder="Movie Name">
        </br>
        <select v-model="movie" name="movie">
          <option v-for="movie in filteredMovies" :value="movie">{{ movie }}</option>
        </select>
        <button type="submit">Submit</button>
    </form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MovieSelect',
  data() {
    return {
      search: "",
      movie: 'Avengers: Age of Ultron (2015)',
      movies: ['Avengers: Age of Ultron (2015)', 'Cinderella (2015)', 'Ant-Man (2015)',
            'Do You Believe? (2015)', 'Hot Tub Time Machine 2 (2015)',
            'The Water Diviner (2015)', 'Irrational Man (2015)', 'Top Five (2014)',
            'Shaun the Sheep Movie (2015)', 'Love & Mercy (2015)',
            'Far From The Madding Crowd (2015)', 'Black Sea (2015)', 'Leviathan (2014)',
            'Unbroken (2014)', 'The Imitation Game (2014)', 'Taken 3 (2015)',
            'Ted 2 (2015)', 'Southpaw (2015)',
            'Night at the Museum: Secret of the Tomb (2014)', 'Pixels (2015)',
            'McFarland, USA (2015)', 'Insidious: Chapter 3 (2015)',
            'The Man From U.N.C.L.E. (2015)', 'Run All Night (2015)',
            'Trainwreck (2015)', 'Selma (2014)', 'Ex Machina (2015)',
            'Still Alice (2015)', 'Wild Tales (2014)', 'The End of the Tour (2015)',
            'Red Army (2015)', 'When Marnie Was There (2015)',
            'The Hunting Ground (2015)', 'The Boy Next Door (2015)', 'Aloha (2015)',
            'The Loft (2015)', '5 Flights Up (2015)', 'Welcome to Me (2015)',
            'Saint Laurent (2015)', 'Maps to the Stars (2015)',
            "I'll See You In My Dreams (2015)", 'Timbuktu (2015)', 'About Elly (2015)',
            'The Diary of a Teenage Girl (2015)',
            'Kingsman: The Secret Service (2015)', 'Tomorrowland (2015)',
            'The Divergent Series: Insurgent (2015)', 'Annie (2014)',
            'Fantastic Four (2015)', 'Terminator Genisys (2015)',
            'Pitch Perfect 2 (2015)', 'Entourage (2015)', 'The Age of Adaline (2015)',
            'Hot Pursuit (2015)', 'The DUFF (2015)', 'Black or White (2015)',
            'Project Almanac (2015)', 'Ricki and the Flash (2015)',
            'Seventh Son (2015)', 'Mortdecai (2015)', 'Unfinished Business (2015)',
            'American Ultra (2015)', 'True Story (2015)', 'Child 44 (2015)',
            'Dark Places (2015)', 'Birdman (2014)', 'The Gift (2015)',
            'Unfriended (2015)', 'Monkey Kingdom (2015)', 'Mr. Turner (2014)',
            'Seymour: An Introduction (2015)', 'The Wrecking Crew (2015)',
            'American Sniper (2015)', 'Furious 7 (2015)',
            'The Hobbit: The Battle of the Five Armies (2014)', 'San Andreas (2015)',
            'Straight Outta Compton (2015)', 'Vacation (2015)', 'Chappie (2015)',
            'Poltergeist (2015)', 'Paper Towns (2015)', 'Big Eyes (2014)',
            'Blackhat (2015)', 'Self/less (2015)', 'Sinister 2 (2015)',
            'Little Boy (2015)', 'Me and Earl and The Dying Girl (2015)',
            'Maggie (2015)', 'Mad Max: Fury Road (2015)', 'Spy (2015)',
            'The SpongeBob Movie: Sponge Out of Water (2015)', 'Paddington (2015)',
            'Dope (2015)', 'What We Do in the Shadows (2015)', 'The Overnight (2015)',
            'The Salt of the Earth (2015)', 'Song of the Sea (2014)',
            'Fifty Shades of Grey (2015)', 'Get Hard (2015)', 'Focus (2015)',
            'Jupiter Ascending (2015)', 'The Gallows (2015)',
            'The Second Best Exotic Marigold Hotel (2015)', 'Strange Magic (2015)',
            'The Gunman (2015)', 'Hitman: Agent 47 (2015)', 'Cake (2015)',
            'The Vatican Tapes (2015)', 'A Little Chaos (2015)',
            'The 100-Year-Old Man Who Climbed Out the Window and Disappeared (2015)',
            'Escobar: Paradise Lost (2015)', 'Into the Woods (2014)',
            'It Follows (2015)', 'Inherent Vice (2014)', 'A Most Violent Year (2014)',
            "While We're Young (2015)", 'Clouds of Sils Maria (2015)',
            'Testament of Youth (2015)', 'Infinitely Polar Bear (2015)',
            'Phoenix (2015)', 'The Wolfpack (2015)',
            'The Stanford Prison Experiment (2015)', 'Tangerine (2015)',
            'Magic Mike XXL (2015)', 'Home (2015)', 'The Wedding Ringer (2015)',
            'Woman in Gold (2015)', 'The Last Five Years (2015)',
            'Mission: Impossible â€“ Rogue Nation (2015)', 'Amy (2015)',
            'Jurassic World (2015)', 'Minions (2015)', 'Max (2015)',
            'Paul Blart: Mall Cop 2 (2015)', 'The Longest Ride (2015)',
            'The Lazarus Effect (2015)', 'The Woman In Black 2 Angel of Death (2015)',
            'Danny Collins (2015)', 'Spare Parts (2015)', 'Serena (2015)',
            'Inside Out (2015)', 'Mr. Holmes (2015)', "'71 (2015)",
            'Two Days, One Night (2014)', 'Gett: The Trial of Viviane Amsalem (2015)',
            'Kumiko, The Treasure Hunter (2015)'],
    }
  },
  methods: {
    ...mapActions([
      'fetchSingleMovieRatings',
    ]),
    submitSelection(evt) {
      evt.preventDefault();
      const payload = {
        'movie': this.movie,
        'show': true,
      }
      this.fetchSingleMovieRatings({ payload })
    },
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        return movie.toLowerCase().match(this.search);
      });
    }
  }
}
</script>

<style scoped>
select {
  border: 2px solid black;
}
</style>
