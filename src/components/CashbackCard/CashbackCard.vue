<script setup>
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'

defineProps({
    image: {
        type: String,
    },
    imageStyle: {
        type: String,
    },
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary'].includes(value),
    },
})

const emit = defineEmits(['click'])
</script>
<template>
    <div
        :class="[
            'relative w-85 flex flex-col shrink-0 rounded-lg border-4  p-3',
            {
                'border-[#CCCCCE] bg-[#E7E7E9]': variant === 'secondary',
                'border-[#272727]': variant === 'primary',
            },
        ]"
    >
        <div
            :class="[
                'absolute top-0 rounded-bl-xl right-0  p-3',
                {
                    'bg-[#CCCCCE]': variant === 'secondary',
                    'bg-[#272727]': variant === 'primary',
                },
            ]"
        >
            <Icon icon="mi:lock" :color="variant === 'primary' ? '#fff' : '#000'" :height="20" />
        </div>
        <div class="flex">
            <div class="flex grow flex-col justify-between">
                <slot name="header"></slot>
                <slot name="content"></slot>
                <slot name="footer"></slot>
            </div>
            <div class="z-10 -mr-5">
                <img :src="image" :class="[imageStyle ? imageStyle : 'h-55', '']" />
            </div>
        </div>
    </div>
</template>
