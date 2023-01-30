<script>
  /** @type {import('./$types').PageData} */
  //export let data;
  /** @type {import('./$types').ActionData} */
  export let form;
</script>

<div>
  <h1>Contact</h1>
  <hr />
    <form method="POST" class="flex flex-col space-y-4 mt-8">
      <input type="text" name="name" placeholder="John Smith" required class="bg-zinc-50 p-2">
      <input type="email" name="email" placeholder="johnsmith@abc.com" required class="bg-zinc-50 p-2">
  <textarea name="message" placeholder="Message" rows="10" required class="p-2 bg-zinc-50 "></textarea>
      <button class="max-w-max px-2 py-1 cursor-pointer bg-teal-900 text-teal-50">Submit</button>
    </form>
<p>
    {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
         response to a form submission. it will vanish if the user reloads -->
    <p>Successfully submited. Thank you, {form.name}!</p>
  {/if}
  </p>
   </div>