<script>
    import Prism from 'prismjs';
    import 'prismjs/themes/prism.css';
  
    /**
	 * @type {any}
	 */
     export let code;
  
    // Initialize Prismjs after the component has been rendered
    export async function afterUpdate() {
      Prism.highlightAll();
    }
  </script>
  
  <pre><code class="language-javascript">
  {code}
  </code></pre>