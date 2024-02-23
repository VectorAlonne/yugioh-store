<template>
    <div class="container mt-5">
        <div class="card-body row" v-if="cardDetails">
            <div class="col-4">
                <img :src="cardDetails.image" alt="" />
                <p class="pt-3 fs-3">This is {{ cardDetails.name }} card</p>
            </div>
            <div class="col border border-black">
                <p class="pt-3 fs-5">{{ cardDetails.name }}</p>
                <p class="pt-3 fs-5 border-top border-black">
                    {{ cardDetails.attribute }}
                </p>
                <p class="pt-3 fs-5 border-top border-black">{{ cardDetails.level }}</p>
                <p class="pt-3 fs-5 border-top border-black">{{ cardDetails.type }}</p>
                <p class="pt-3 fs-5 border-top border-black">
                    {{ cardDetails.description }}
                </p>
                <p class="pt-3 fs-5 border-top border-black">{{ cardDetails.stats }}</p>
                <p class="pt-3 fs-5 border-top border-black">{{ cardDetails.code }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            cardDetails: null,
        };
    },
    mounted() {
        const cardId = this.$route.params.id;
        this.getCardDetails(cardId);
    },
    methods: {
        getCardDetails(cardId) {
            console.log("ID de la carta:", cardId);
            axios
                .get(`http://127.0.0.1:8000/api/cards/${cardId}`)
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
