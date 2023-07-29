<script setup>
import { useElementSize, useWindowSize } from '@vueuse/core'
import { ref } from "vue"
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

const header = ref(null)
const footer = ref(null)

const { height: windowHeight } = useWindowSize({ width: 0, height: 0 }, { box: 'border-box' })
const { height: headerHeight } = useElementSize(header, { width: 0, height: 0 }, { box: 'border-box' })
const { height: footerHeight } = useElementSize(footer, { width: 0, height: 0 }, { box: 'border-box' })

</script>
<template>
    <Header ref="header" />
    <main class="m-0" :style="{ 'min-height': (windowHeight - (headerHeight + footerHeight)) + 'px' }">
        <slot />
    </main>
    <Footer ref="footer" />
</template>