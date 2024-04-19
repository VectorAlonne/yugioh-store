<template>
    <div id="container" class="d-flex">
        <div class="d-flex align-items-center">
            <div class="mx-4">
                <img id="cardImg" :src="card.image" alt="" />
            </div>
            <div id="buttonName">
                <div>
                    {{ card.name.length > 15 ? card.name.slice(0, 15) + '...' : card.name }}
                </div>
                <button id="button" type="button" class="mt-2 fs-5"
                    @click="$router.push(`/cards/${card.id}`)">Read more</button>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
#container {
    height: 10.5rem;
    background-color: #4B0082;
    border: 3px solid #DAA520;
    transition: transform 0.3s ease;
}

#container:hover {
    transform: scale(1.1);
    border: 3px solid #DAA520;
    -webkit-box-shadow: 0px 0px 15px 5px #FFD700;
    -moz-box-shadow: 0px 0px 15px 5px #FFD700;
    box-shadow: 0px 0px 15px 5px #ffd700;
    border: 3px solid #DAA520;
}

#cardImg {
    width: 5rem;
    transition: box-shadow 0.3s ease;
}

#cardImg:hover {
    -webkit-box-shadow: 0px 0px 15px 5px #FFD700;
    -moz-box-shadow: 0px 0px 15px 5px #FFD700;
    box-shadow: 0px 0px 15px 5px #ffd700;
    border: 1px solid #DAA520;
}

#buttonName {
    color: #FFD700;
    font-size: 20px;
    font-family: Garamond;
    src: url('~@/assets/fonts/EBGaramond-regular.ttf')
}

#button {
    width: 8rem;
    padding: 8px;
    border: 3px solid #DAA520;
    border-radius: none;
    color: black;
    background-color: #FFD700;
    transition: background-color 0.3s ease;
}

#button:hover {
    background-color: #e0c516;
}
</style>
