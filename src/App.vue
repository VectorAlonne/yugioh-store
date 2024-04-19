<template>
  <div>
    <Header />
  </div>

  <div>
    <RouterView />
  </div>

  <footer class="card-footer" id="footer">
    <div class="row justify-content-center align-items-center">
      <div class="col-4 fs-5 text-center"> 
        <div class="row">
          <a class="col-4" href="">
            Privacy Policy
          </a>
    
          <a class="col-4" href="">
            Cookie Policy
          </a>
    
          <a class="col-4" href="">
            Condition
          </a>
        </div>
      </div>
      <div class="col-4 fs-3 text-center ">
        <div>
          <p class="m-0">Copyright Policy</p>
        </div>
      </div>
      <div class="col-4 fs-5 d-flex flex-column align-items-center">
        <div>
          <p>Email: Lucasavg14@gmail.com</p>
          <p>Cellphone: 098074866</p>
          <p>Country: Uruguay</p>
          <p>City: Rivera</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "../src/components/layout/Header.vue";

export default {
  components: {
    Header,
    RouterView,
  },
};
</script>

<style scoped>
#footer {
  border-top: 1px solid #DAA520;
  margin-bottom: 5.5rem;
}

.row {
  margin-right: 0px;
  margin-left: 0px;
}
</style>