<script setup>
    import { defineProps , defineEmits} from 'vue'

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

    const emit = defineEmits(['click'])

</script>

<template>
    <button @click="emit('click')" :class="[ 
        'relative rounded-xl grow-0 border border-[#37383C] p-3',
        {
            'bg-[#323232]': fill
        }
        ]">
        <p v-show="notificationCount > 0" class="text-xs text-white absolute -right-1 -top-1 h-4 w-4 flex justify-center rounded-full bg-[#FF2541]">
            {{ notificationCount }}
        </p>
        <Icon :icon="icon" :height="24" color="#fff"  />
    </button>

</template>

