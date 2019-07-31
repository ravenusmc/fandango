<template>
  <div>
      <Header/>

    <main>
      <Purpose/>
    </main>
    
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue';
import Purpose from '@/components/home/Purpose.vue';

export default {
  name: 'home',
  components: {
    Header,
    Purpose,
  },
};
</script>
