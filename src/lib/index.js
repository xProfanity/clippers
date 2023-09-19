import Footer from "./components/Footer.svelte";
import HeroSection from "./components/HeroSection.svelte";
import Mid from "./components/Mid.svelte";
import Navbar from "./components/Navbar.svelte";
import Services from "./components/Services.svelte";
import Specials from './components/Specials.svelte';
import SubWelcome from "./components/SubWelcome.svelte";
import Testimonials from "./components/Testimonials.svelte";
import Welcome from "./components/Welcome.svelte";

import Barbershop from './images/barbershop.jpg';
import Beard from './images/beard.jpg';
import Chair from './images/chair.jpg';
import Chairs from './images/chairs.jpg';
import Clipper from './images/clipper.png';
import Clippers from './images/clippers.jpg';
import ClippersLogo from './images/clippers.png';
import Cuts from './images/cuts.jpg';
import Eugene from './images/eugene.jpg';

import { MenuItems } from "./constants.js";

import { urlFor } from "./client/sanity.js";
import { fetchProducts, fetchSpecials, fetchTestimonials } from "./services/sanity.js";

export { Barbershop, Beard, Chair, Chairs, Clipper, Clippers, ClippersLogo, Cuts, Eugene, Footer, HeroSection, MenuItems, Mid, Navbar, Services, Specials, SubWelcome, Testimonials, Welcome, fetchProducts, fetchSpecials, fetchTestimonials, urlFor };

