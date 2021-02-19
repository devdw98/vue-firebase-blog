<template>
  <v-footer app absolute>
    <v-spacer />
    <div>
      &copy;
      {{ new Date().getFullYear() + ' ' + footer }}
    </div>
  </v-footer>
</template>

<script>
export default {
  props: ['footer']
}
</script>

<style lang="scss" scoped></style>
