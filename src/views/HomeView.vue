<template>
    <div id="backgound">
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div id="background-color">
        <div id="homeViewGrid" class="grid grid-cols-3">
            <div id="homeViewCont" class="text-center">
                <h1 id="homeViewH1">Monsters</h1>
                <div class="row my-3" v-for="card in cards" :key="card.id">
                    <CardItem :card="card" />
                </div>
            </div>
            <div id="homeViewCont" class="text-center">
                <h1 id="homeViewH1">Spells</h1>
                <div class="row my-3" v-for="card in cards" :key="card.id">
                    <CardItem :card="card" />
                </div>
            </div>
            <div id="homeViewCont" class="text-center">
                <h1 id="homeViewH1">Traps</h1>
                <div class="row my-3" v-for="card in cards" :key="card.id">
                    <CardItem :card="card" />
                </div>
            </div>
        </div>
    </div>
    <div id="homeViewPositioning">
        <div class="row justify-content-center align-items-center text-center h-100">
            <div class="col-3">
                <p id="par" class="fs-5">Search for the card you want</p>
            </div>

            <form id="form" @submit.prevent="getCards" class="col-3 m-0">
                <div class="input-group">
                    <input type="text" v-model="searchTerm" placeholder="Buscar carta..." class="form-control" />
                    <button type="submit" id="btn" class="btn">Buscar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script scoped>
import CardItem from "@/components/cards/CardItem.vue";
import axios from "axios";

export default {
    components: {
        CardItem,
    },
    data() {
        return {
            cards: [],
            searchTerm: "",
            searchResult: null,
            searchError: "",
            showModal: false,
            productName: "",
            productPrice: "",
        };
    },

    mounted() {
        this.getCards();
    },

    methods: {
        getCards() {
            let url = "/cards";

            if (this.searchTerm != "") {
                url = `${url}?searchTerm=${this.searchTerm}`;
            }

            axios
                .get(url)
                .then((res) => {
                    this.cards = res.data.cards;
                })
                .catch((error) => {
                    console.error("Error de búsqueda:", error);
                    this.searchResult = null;
                    this.searchError = "Hubo un error al buscar la carta";
                });
        },
    },
};
</script>

<style scoped>
#form {
    margin-left: 7rem;
    margin-right: 7rem;
}

#par {
    margin: 0px;
}

#btn {
    background-color: #c07f00;
}
</style>
