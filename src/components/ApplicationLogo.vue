<script setup>
import useHome from "@/composables/useHome"

defineProps({
    link: {
        type: Boolean,
        required: false,
        default: false,
    },
    imgClass: {
        type: [ String, Object ],
        required: false,
        default: 'w-auto',
    }
})

defineEmits(['click'])

const { logo } = useHome()

</script>
<template>
    <RouterLink v-if="!!link" :to="{ name: 'Home' }" @click="$emit('click')">
        <img v-if="logo" :class="imgClass" :src="logo">
        <span v-else>nologo</span>
        <!-- <img v-else :class="imgClass" src="@/assets/logos/sublogo.png"> -->
    </RouterLink>
    <caption v-else>
        <img v-if="logo" :class="imgClass" :src="logo">
        <span v-else>nologo</span>
        <!-- <img v-else :class="imgClass" src="@/assets/logos/sublogo.png"> -->
    </caption>
</template>