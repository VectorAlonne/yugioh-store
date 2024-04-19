<template>
    <div class="col-4">
        <img v-if="cardDetails" :src="cardDetails.image" alt="" />
    </div>
    <div class="col border border-black" v-if="cardDetails">
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
</template>

<script>
export default {
    props: {
        cardDetails: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
img {
    width: 23rem;
}
</style>