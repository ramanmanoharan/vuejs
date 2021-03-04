
<template>
	<div class="footer">
		<p> {{ message }} </p>
	</div>
</template>
<script>
export default {
  name: 'Footer',
  data(){return{ message:"Welcome to Vue Js" } },
  props: {
    msg: String,
    data: String
  }
}
</script>
<style type="text/css">
	.footer{
		bottom: 0!important;
		position: absolute!important;
		text-align: center!important;
		background-color:lightgreen!important;
		color:darkblue;
		width:99%!important;
		overflow-x: hidden;
		padding: 5px;

	}
</style>