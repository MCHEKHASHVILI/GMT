<script>
export default {
    props: {
        required: {
            type: Boolean,
            required: false,
            default: false
        },
        label: {
            type: String,
            required: false,
            default: null,
        },
        modelValue: String
    },
    emits: ["update:modelValue"],
}
</script>
<template>
    <div class="relative">
        <input v-on:input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :required="!!required"
            type="text" :id="`floating_filled-${label}`"
            class="block capitalize px-4 pb-2.5 pt-5 w-full text-sm text-[#0B0B0B] text-opacity-60 bg-transparent border border-[#707070] border-opacity-50 appearance-none peer"
            placeholder=" " />
        <label :for="`floating_filled-${label}`"
            class="absolute capitalize text-sm text-[#0B0B0B] text-opacity-60 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{{
                label }}</label>
    </div>
    <!-- <div class="relative flex items-center">
        <input type="text" class="w-full min-h-full bg-transparent border border-[#707070] border-opacity-50 px-4 py-4"
        v-on:input="$emit('update:modelValue', $event.target.value)" :value="modelValue" :required="!!required" />
        <span class="absolute uppercase whitespace-nowrap cursor-none">{{ label }}</span>

    </div> -->
</template>