<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
</script>
<template>
    <div class="container mx-auto">
        <Header />
        <main>
            <slot />
        </main>
        <Footer />
    </div>
</template>