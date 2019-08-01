<template>
  <div>
      <Header/>

    <main>
      <Purpose/>
      <FirstStudy/>
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
