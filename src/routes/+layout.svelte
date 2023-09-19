<script>
  import { Footer, Navbar } from "$lib/index.js";
  import "../app.css";
</script>

<main class="bg-slate-200">
  <nav>
    <Navbar />
  </nav>
  <slot />
  <footer>
    <Footer />
  </footer>
</main>
