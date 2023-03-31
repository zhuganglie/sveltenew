---
title: Toggle Navigation Bar in SvelteKit
date: 2023-02-22
tags: ['frontend', 'sveltekit']
draft: false
---


**Prompt:** 

Create a button to toggle navigation bar in Sveltekit.


**Response:**


SvelteKit is a web application framework that allows you to build fast and efficient web applications. One of the common features of web applications is the navigation bar. In this tutorial, we will show you how to create a button to toggle the navigation bar in SvelteKit.

## Step 1: Create a Navigation Bar Component

First, let's create a navigation bar component. In the `src/components` directory, create a new file called `NavigationBar.svelte` and add the following code:

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

```

This is a simple navigation bar with three links.

## Step 2: Create a Button Component

Next, let's create a button component. In the same `src/components` directory, create a new file called `Button.svelte` and add the following code:

```svelte
<button on:click={toggle}>
  <slot></slot>
</button>

```

This is a button component that takes a click event and a slot. We will use this button to toggle the navigation bar.

## Step 3: Add Logic to Toggle Navigation Bar

Now, we need to add logic to the `NavigationBar` component to toggle it. In `NavigationBar.svelte`, add the following code:

```svelte
<script>
  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<nav class:open={open}>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

```

This code creates a `open` variable with a default value of `false`. When the `toggle()` function is called, it toggles the value of `open`. We use the `class:open={open}` syntax to add the `open` CSS class to the `nav` element when `open` is `true`.

## Step 4: Use the Button Component

Finally, let's use the button component to toggle the navigation bar. In `NavigationBar.svelte`, add the following code:

```svelte
<script>
  import Button from './Button.svelte';
</script>

<nav class:open={open}>
  <Button on:click={toggle}>Toggle Navigation Bar</Button>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

```

This code imports the `Button` component and adds it to the navigation bar. When the button is clicked, it calls the `toggle()` function and toggles the navigation bar.

That's it! You have successfully created a button to toggle the navigation bar in SvelteKit.