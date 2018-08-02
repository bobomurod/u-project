<template>
    <div class="app-container">
        <h1>First page</h1>
    </div>
    
</template>

<script>
import { getPrice } from '@/api/price'
export default {
  data() {
  },
  methods: {
    fetchData: function() {
      console.log(getPrice())
    }
  },
  beforeMount() {
    this.fetchData()
  }
}
</script>
