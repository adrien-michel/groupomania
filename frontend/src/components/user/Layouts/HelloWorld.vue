<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
				:src="require('../../../assets/icon.svg')"
				class="my-4"
				contain
				height="200"
				/>
			</v-col>
			<v-col class="mb-4">
				<h1 class="display-2 font-weight-bold mb-3">
					Bienvenu au<br>
					Groupomania Réseau Social
				</h1>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
export default {
	name: 'HelloWorld'
};
</script>