<script lang="ts">
    import { enhance, type SubmitFunction } from '$app/forms';

    let textSubmission = "";
  //  let imageTextSubmission = "";
    let answer = "";
 //   let imageArray: any = [];
    let loading = false;

    const handleSubmit: SubmitFunction = () => {
        loading = true;

  return async ({ action, result }) => {
            let resultObject = JSON.parse(JSON.stringify(result));

            if (action.search == "?/submit") {
                if (resultObject.status == 200) {
                    if (resultObject.data.response) {
                        answer = resultObject.data.response;
                    }

               /*     if (resultObject.data.imageResponse) {
                        imageArray = resultObject.data.imageResponse;
                    }*/
                    
                    loading = false;
                } else {
                    loading = false;
                    alert("An error occurred, please try again.");
                }
   }
        }
 }
</script>


<section class="">
    <h1>OpenAI</h1>
    <hr />

   <!---  -->
        
            
            <form class="flex flex-col space-y-4 mt-8" action="?/submit" method="POST" enctype="multipart/form-data" use:enhance={handleSubmit} id="upload" name="upload">
                <div class="field">
                    <label for="text-submission" class="font-bold">Text Prompt</label>
                    <div class="mt-2">
                        <textarea id="text-submission" name="text-submission" rows="10" class="w-full p-2 bg-zinc-50 " placeholder="Enter text prompt..." bind:value={textSubmission}></textarea>
                    </div>
                </div>

              <!--- <div class="field">
                    <label for="image-text-submission" class="label"><b> Image Prompt</b></label>
                    <div class="control">
                        <textarea id="image-text-submission" name="image-text-submission" class="textarea" placeholder="Enter image prompt..." bind:value={imageTextSubmission}></textarea>
                    </div>
                </div>-->

                <div class="field">
                    <div class="control">
                        <button type="submit" class="button is-success is-fullwidth"><b>Submit Prompt</b></button>
                    </div>
                </div>
            </form>
       
           {#if loading === false}
        {#if answer != ""}
           <div>
                <h2 class="subtitle"><b>Text Response</b></h2>
                <p>{answer}</p>
           </div>
        {/if}
      
   <!--     {#if imageArray.length > 0}
            <box class="box">
                <h2 class="subtitle"><b>Image Response</b></h2>

                <div class="columns">
                    {#each imageArray as image}
                        <div class="column is-one-third">
                            <box class="box">
                                <img src="{image.url}" alt="AI generated art">
                            </box>                       
                        </div>
                    {/each}
                </div>
            </box>

        {/if}-->
   {:else}
        <p class=""><b>One moment please...</b></p>
    {/if}
</section>


<style>
    section {
        height: auto;
        min-height: 100vh;
    }
</style>