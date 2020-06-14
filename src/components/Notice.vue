<template>
  <div class="notice">

		<form @submit.prevent>
			<input
			class="title-input"
			v-if="showPlaceholder"
			:placeholder="titlePlaceholder"
			v-model="titleValue"
			@focus="focusHandler"
			@keydown.enter="titleEnterHandler"
			/>

			<h1 v-if="!showPlaceholder">{{titleValue}}</h1>
			<!-- <hr v-if="!showPlaceholder"> -->

			<input
			v-if="!showPlaceholder"
			class="add-todo-input"
			placeholder="what needs to be done"
			v-model="addValue"
			@keydown.enter="addEnterHandler"
			/>

			<ul>
				<li
				v-for="(deal, index) in doings"
				:key="'index' + index">
				{{deal}}
				</li>
			</ul>
		</form>
			
	</div>
</template>

<script>
export default {
	name: 'Notice',
	data() {
		return {
			titlePlaceholder: 'Create title your to-do list',
			showPlaceholder: true,
			titleValue: '',

			addValue: '',
			doings: [],
		}
	},

	methods: {
		
		titleEnterHandler() {
			if (this.titleValue !== '') {
				this.showPlaceholder = !this.showPlaceholder;
				
			}
		},

		focusHandler() {
			this.titlePlaceholder = ''
		},

		addEnterHandler() {
			this.doings.push(this.addValue);
			this.addValue = null
		}

	}
};
</script>

<style scoped>

/* СБРОС СТИЛЕЙ */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/
article > * + * {
  margin-top: 1em;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select {
  font: inherit;
}

.notice {
	display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  background-color:white;
}

form {
	width: 40%;
	/* background-color: lightblue; */
	/* padding-top: 60px; */
	height: 100px;
}

h1 {
	margin-top: 71px;
	color: rgb(80, 78, 78);
	font-weight: lighter;
	text-align: left;
	font-size: 24px;
	margin-left: 11px;
	margin-bottom: 0;
}

.title-input {
	margin-top: 60px;
	margin-left: 0;
	margin-right: auto;
	margin-bottom: 0;
	width: 100%;
	height: 50px;
	background-color: white;
	color: rgb(80, 78, 78);
	border: 1px solid white;
	border-bottom: 1px solid rgb(165, 164, 164);
  padding: 0 0 0 10px;
  display: block;
  font-size: 24px;
  border-width: 1px;
  background-color: white;
}

.title-input:focus,
.title-input:active {
  border-bottom: 1px solid #80bdff;
  outline: 0;
  outline-offset: -1px;
}

.add-todo-input {
	margin-top: 15px;
	margin-left: 0;
	margin-right: auto;
	margin-bottom: 0;
	width: 100%;
	height: 40px;
	background-color: white;
	color: rgb(80, 78, 78);
	border: 1px solid rgb(165, 164, 164);
  padding: 0 0 0 10px;
  display: block;
  font-size: 20px;
  border-width: 1px;
  background-color: white;
}

.add-todo-input:focus,
.add-todo-input:active {
  border: 1px solid #80bdff;
  outline: 0;
  outline-offset: -1px;
}



</style>