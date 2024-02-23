<template>
  <div class="card">
    <div class="background-image" :style="{ backgroundImage: 'url(/src/assets/wall-papper.jpg)' }">
      <div class="container d-flex justify-content-center align-items-center h-100">
        <form @submit.prevent="searchCard" class="text-center">
          <div class="input-group">
            <input type="text" v-model="searchTerm" placeholder="Buscar carta..." class="form-control">
            <button type="submit" class="btn btn-primary">Buscar</button>
          </div>
        </form>
        <div v-if="searchResult">
          <p>Nombre: {{ searchResult.name }}</p>
          <p>Tipo: {{ searchResult.type }}</p>
          <!-- Mostrar más detalles de la carta aquí -->
        </div>
        <div v-else="searchError">
          <p>{{ searchError }}</p>
        </div>
      </div>
    </div>
    <div class="card-body container text-center">
      <div class="row row-cols-2 my-3" v-for="card in cards" :key="card.id">
        <div class="d-flex justify-content-center align-items-center border border-3 border-black"
          :style="getCardStyle(card.cardType)">
          <div class="m-3">
            <img :src="card.image" alt="" />
          </div>
          <div class="w-50 fs-5 m-3">{{ card.name }}</div>
          <div class="m-3">
            <button type="button" class="btn btn-primary fs-5 btn-lg">Buy</button>
          </div>
        </div>
        <div>
          <div class="d-flex justify-content-center align-items-center border border-3 border-black"
            :style="getCardStyle(card.cardType)">
            <div class="m-3">
              <img :src="card.image" alt="" />
            </div>
            <div class="w-50 fs-5 m-3">{{ card.name }}</div>
            <div class="m-5">
              <button class="btn btn-primary fs-5 btn-lg">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cards: [],
      searchTerm: '',
      searchResult: null,
      searchError: ''
    };
  },
  mounted() {
    this.getCards();
  },
  computed: {
    filteredCards() {
      if (!this.searchTerm) {
        return this.cards;
      }
      return this.cards.filter(card => card.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
  methods: {
    getCards() {
      axios
        .get("http://127.0.0.1:8000/api/cards")
        .then((res) => {
          this.cards = res.data.cards;
        })
        .catch((error) => {
          console.error("Error fetching cards:", error);
        });
    },
    getCardStyle(cardType) {
      if (cardType === 'Normal') {
        return { backgroundColor: '#C09C52' };
      } else if (cardType === 'Monster Effect') {
        return { backgroundColor: '#913E0F' }
      } else if (cardType === 'Synchro Monster') {
        return { backgroundColor: '#FFFFFF' }
      } else if (cardType === 'Xyz Monster') {
        return { backgroundColor: '#0E0E10' }
      } else if (cardType === 'Pendulum Monster') {
        return { backgroundColor: '#00736A' }
      } else if (cardType === 'Link Monster') {
        return { backgroundColor: '#1C69AE' }
      }
    },
    searchCard() {
      axios.get(`http://127.0.0.1:8000/api/cards?searchTerm=${this.searchTerm}`)
        .then(response => {
          const foundCard = response.data.cards.find(card => card.name.toLowerCase() === this.searchTerm.toLowerCase());
          if (foundCard) {
            const cardId = foundCard.id;
            console.log('ID de la carta a redirigir:', cardId); // Agregar console.log para verificar el ID de la carta
            this.$router.push({ name: 'cardDetails', params: { id: cardId } });
          } else {
            // Manejar el caso en el que no se encontró ninguna carta
            this.searchResult = null;
            this.searchError = 'La carta no se encontró';
          }
        })
        .catch(error => {
          // Manejar errores de búsqueda
          console.error('Error de búsqueda:', error);
          this.searchResult = null;
          this.searchError = 'Hubo un error al buscar la carta';
        });
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #e6e6e6;
}

.background-image {
  height: 41rem;
  background-size: cover;
  background-position: center;
}

img {
  width: 5rem;
}

.normal-card {
  background-color: #ffe17a;
}
</style>
