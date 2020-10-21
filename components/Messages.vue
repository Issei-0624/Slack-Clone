<template>
  <div class="chats-container">
    <message v-for="message in messages" :key="message" :message="message" />
  </div>
</template>

<script>
import Message from '~/components/Message'

export default {
  components: {
    Message,
  },
  props: ['messages'],

  mounted() {
    console.log(this.messages)
  },
}
</script>

<style>
.chats-container {
  padding: 16px;
}
</style>
