<template>
  <div>
    Hi
    <v-card>
      <GChart
        :type="typeOne"
        :data="data"
        :options="options"
      />
    </v-card>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'GraphCard',
  props: ['typeOne', 'data', 'options'],
}
</script>

<style>
</style>
