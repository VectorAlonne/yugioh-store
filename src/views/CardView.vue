<template>
    <div class="container mt-5">
        <div v-if="loading" class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
        <div v-else class="card-body row">
            <template v-if="cardDetails">
                <CardDetails :card-details="cardDetails" />
            </template>
        </div>
    </div>
</template>

<script>
import axios from "axios";

import CardDetails from '../components/cards/CardDetails.vue';

export default {
    components:{
        CardDetails
    },
    data() {
        return {
            cardDetails: null,
            loading: false,
        };
    },
    mounted() {
        const cardId = this.$route.params.id;
        this.getCardDetails(cardId);
    },
    methods: {
        getCardDetails(cardId) {
            this.loading = true;
            console.log("ID de la carta:", cardId);
            axios
                .get(`/cards/${cardId}`)
                .then((response) => {
                    console.log("Respuesta de la API:", response.data);
                    if (response.data) {
                        this.cardDetails = response.data; // Asigna directamente response.data a cardDetails
                    } else {
                        console.error("No se encontró la carta con el ID proporcionado");
                        this.cardDetails = null;
                    }
                })
                .catch((error) => {
                    console.error("Error fetching card details:", error);
                    this.cardDetails = null;
                }).finally(() => {
                    this.loading = false;
                });
        },
    },
};
</script>

<style scoped>
img {
    width: 14rem;
}
</style>
