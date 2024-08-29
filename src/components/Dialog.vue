<template>
    <v-dialog v-model="open" width="50%" persistent max-width="60%">
        <v-card :title="title">
            <v-card-text>{{ message }}</v-card-text>
            <v-card-actions>
                <v-btn color="success" @click="submitDialog">{{ submitText }}</v-btn>
                <v-btn color="error" @click="cancelDialog">{{ cancelText }}</v-btn>
            </v-card-actions>
        </v-card>

    </v-dialog>
</template>
<script setup>
const open = defineModel({ default: false, type: Boolean })
const emits = defineEmits(["submit", "cancel"])
const props = defineProps({
    title: {
        type: String,
        default: () => ("Attention"),
    },
    message: {
        type: String,
        default: () => (null),
    },
    submitText: {
        type: String,
        default: () => ("Submit"),
    },
    cancelText: {
        type: String,
        default: () => ("Cancel"),
    }
}
)
const submitDialog = () => {
    emits('submit')
    open.value=false
}
const cancelDialog = () => {
    emits('cancel')
    open.value=false
}
</script>