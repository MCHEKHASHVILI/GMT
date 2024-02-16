<script setup>
import { watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORT_LOCALES as supportLocales, setI18nLanguage } from '../../i18n'

const { locale } = useI18n({ useScope: 'global' })

const switchable = computed(() => supportLocales.filter(l => l !== locale.value)[0])

function switchLocale() {
    locale.value = locale.value === 'en' ? 'ka' : 'en'
}
watch(locale, (val) => {
    setI18nLanguage(val)
    localStorage.setItem('lang', val)
    window.location.reload()
});
</script>
<template>
    <button @click="switchLocale">
        {{ $t(`languages.${switchable}`)}}
    </button>
</template>