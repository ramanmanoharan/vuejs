<template>
	<h1>Page: {{ page }}</h1>
</template>
<script>
export default {
  name: 'About',
  data()
  {
  return{page:"About Page"}
  },
  props: {
    Page: String
  }
}
</script>