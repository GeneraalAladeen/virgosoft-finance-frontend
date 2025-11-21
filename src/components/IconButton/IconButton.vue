<script setup>
    import { defineProps } from 'vue'

    import { Icon } from "@iconify/vue";

    defineProps({
        fill: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            required: true
        },
        notificationCount: {
            type: Number,
            required: false,
            default: 0
        }
    })
</script>

<template>
    <div :class="[ 
        'relative rounded-xl grow-0 border border-[#37383C] p-4',
        {
            'bg-[#323232]': fill
        }
        ]">
        <p v-show="notificationCount > 0" class="text-xs text-white absolute -right-1 -top-1 h-4 w-4 flex justify-center rounded-full bg-red-600">
            {{ notificationCount }}
        </p>
        <Icon :icon="icon" :height="25" color="#fff"  />

    </div>

</template>

