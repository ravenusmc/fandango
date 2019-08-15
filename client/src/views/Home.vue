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
      <!-- Start of Graph area -->

    </main>

  </div>
</template>

<script>
import Header from '@/components/home/Header.vue';
import Purpose from '@/components/home/Purpose.vue';
import FirstStudy from '@/components/home/FirstStudy.vue';

export default {
  name: 'home',
  components: {
    Header,
    Purpose,
    FirstStudy,
  },
};
</script>
