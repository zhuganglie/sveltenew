
<script>
// @ts-nocheck

    import openai from 'openai';
    
    openai.apiKey = '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';
    const chatGPT = new openai.Models.ChatGPT();
    
      let input = 'Hello';
      let response = '';
    
      chatGPT.generate({
        prompt: input,
        temperature: 0.5,
      }).then((result) => {
        response = result.data.text;
      });
    
 
</script>



<div>{response}</div>