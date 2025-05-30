import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TypeSelection from "./pages/TypeSelection";
import FoodList from "./pages/FoodList";
import FoodDetails from "./pages/FoodDetails";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import CartIcon from "./components/CartIcon";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <div className="min-h-screen relative">
            {/* Floating Cart Icon (Optional) */}
            <CartIcon />
            <div className="container-custom">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/type-selection/:categoryId" element={<TypeSelection />} />
                <Route path="/food-list/:categoryId/:type" element={<FoodList />} />
                <Route path="/food-details/:foodId" element={<FoodDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
                <CartIcon /> {/* Global Cart Icon */}

          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
