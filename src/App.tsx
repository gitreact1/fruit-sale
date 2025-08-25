
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Promotions from "./pages/Promotions";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Nutrition from "./pages/Nutrition";
import Seasonal from "./pages/Seasonal";
import Organic from "./pages/Organic";
import Suppliers from "./pages/Suppliers";
import Career from "./pages/Career";
import Press from "./pages/Press";
import Partnership from "./pages/Partnership";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/seasonal" element={<Seasonal />} />
          <Route path="/organic" element={<Organic />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/career" element={<Career />} />
          <Route path="/press" element={<Press />} />
          <Route path="/partnership" element={<Partnership />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
