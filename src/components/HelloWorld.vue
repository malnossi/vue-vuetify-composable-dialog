<template>
  <v-container class="fill-height">
    <v-btn @click="clickedAsync">Click Async</v-btn>
    <v-btn @click="clickedThen">Click Then</v-btn>
  </v-container>
</template>

<script setup>
import { useDialog } from '@/composable/useDialog';
const clickedAsync = async () => {
  const response = await useDialog({ message: "this works very nice !" });
  if (response) {
    alert("Dialog confirmed " + response,)
  } else {
    alert("Dialog canceled " + response, response)
  }
}

const clickedThen = () => {
  useDialog({ message: "this works very nice !" }).then(response=>{
    if (response) {
    alert("Dialog confirmed " + response,)
  } else {
    alert("Dialog canceled " + response, response)
  }
  })
}
</script>
