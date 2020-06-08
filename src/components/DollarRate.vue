<template>
  <div>
    <h4>
      1 Доллар США: <span>{{ ` ${rate.toFixed(2)} ` }}</span>
    </h4>
  </div>
</template>

<script>
export default {
	name: 'DollarRate',
	props: {
		rate: Number,
	},
}
</script>

<style>
span {
  color:#ef584d;
}
</style>