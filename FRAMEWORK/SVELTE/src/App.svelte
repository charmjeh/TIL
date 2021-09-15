<main>
	<header>
		<h1>Hello {name}!</h1>
	</header>

	<div class="columns">
		<div class="column">
			<input
				class="todo-text"
				bind:value={text}
				placeholder="What do you want to do today?"
			>
			<button
				class="button add"
				on:click={addTodo}
			>
				ADD
			</button>
		</div>
		<div class="column">
			<ul>
				{#each todos as todo, index}
					<li>
						<input type="checkbox" bind:checked={todo.done}>
						<span class="{`item ${todo.done ? 'done' : ''}`}">{todo.text}</span>
						<button class="button delete" on:click={() => deleteTodo(index)}>&#10006;</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<footer>
		{#if remaining >= 2}
			<span>{remaining} Tasks Left</span>
		{:else if remaining === 1}
			<span>{remaining} Task Left</span>
		{:else}
			<span>No Tasks Left</span>
		{/if}
	</footer>
</main>

<script>
	export let name;
	export let todos;

	let text = '';

	$: remaining = todos.filter((todo) => !todo.done).length;

	const addTodo = () => {
		if (!text) return;

		todos = [
			...todos,
			{
				text,
				done: false,
			}
		]
		text = '';
	}

	const deleteTodo = (index) => {
		todos = todos.filter((item, idx) => idx !== index); 
	}
</script>

<style lang="scss"></style>