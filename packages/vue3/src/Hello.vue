<template>
  <h1>{{test}}：{{x}}x{{y}}</h1>
</template>

<script setup>
import { ref } from 'vue'
import useMouse from '@lerna-frame/core';
const {x, y} = useMouse()
const test = ref('Hello')
</script>
<style lang="scss" scoped>
h1{
  color: red;
}
</style>