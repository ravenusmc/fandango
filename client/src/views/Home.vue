<template>
  <div>
      <Header/>

    <!-- Main section -->
    <main role="main">
      <!-- Explains the purpose of the project -->
      <Purpose/>
      <!-- Basic data information -->
      <FirstStudy/>
      <hr>
      <!-- Graph area -->
      <GraphArea/>
      <hr>
      <!-- Summary Area -->
      <Summary/>

    </main>

  </div>
</template>

<script>
import Header from '@/components/home/Header.vue';
import Purpose from '@/components/home/Purpose.vue';
import FirstStudy from '@/components/home/FirstStudy.vue';
import GraphArea from '@/components/home/GraphArea.vue';
import Summary from '@/components/home/Summary.vue';

export default {
  name: 'home',
  components: {
    Header,
    Purpose,
    FirstStudy,
    GraphArea,
    Summary,
  },
};
</script>
