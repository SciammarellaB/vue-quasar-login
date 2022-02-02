<template>
  <q-layout>
    <q-page-container>
      <q-page class="page">
        <router-view/>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
    
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
  #app {
    font-family: 'Noto Sans', sans-serif;
  }
  .page{
    background-color: rgb(225, 225, 225);
  }
</style>
