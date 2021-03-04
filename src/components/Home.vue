<template>
	<h1>Page: {{ page }}, {{ news }}</h1>
</template>
<script>
export default {
  name: 'Home',
  data()
  {
  return{page:"Home Page", news:"Welcome"}
  },
  props: {
    user: String
  }
}
</script>