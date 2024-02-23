<template>
  <div>
    <HeaderView />
  </div>

  <div class="card-body">
    <RouterView/>
  </div>

  <div>
    <FooterView></FooterView>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router';
  import HeaderView from '../src/views/PageSections/HeaderView.vue';
  import FooterView from './views/PageSections/FooterView.vue';
  export default {
    components: {
    HeaderView,
    RouterView,
    FooterView
},
  };
</script>
