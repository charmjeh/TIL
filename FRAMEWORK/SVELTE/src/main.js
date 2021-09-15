import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		todos: [
			{ text: 'Svelte Project Setting', done: true },
			{ text: 'Todo Item CRUD', done: true },
			{ text: 'Learn Svelte More', done: false },
		]
	}
});

export default app;