<template lang="html">
  <div class="box">
    {{a}} + {{b}} = {{a+b}}
    <Cmp1/>
  </div>
</template>

<script>
import Cmp1 from '@/components/Cmp1.vue'
export default {
  data() {
    return {
      a: 12,
      b: 5
    }
  },
  components: {
    Cmp1
  }
}
</script>

<style lang="css" scoped>
</style>
