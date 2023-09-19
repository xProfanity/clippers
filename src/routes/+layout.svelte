<script>
  import { Navbar } from "$lib/index.js";
  import "../app.css";
</script>

<main class="bg-slate-200">
  <nav>
    <Navbar />
  </nav>
  <slot />
  <footer>
    <p>Footer</p>
  </footer>
</main>
