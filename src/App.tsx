
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import CartButton from "./components/CartButton";
import Index from "./pages/Index";
import TypeSelection from "./pages/TypeSelection";
import FoodList from "./pages/FoodList";
import FoodDetails from "./pages/FoodDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <div className="container-custom">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/type-selection/:categoryId" element={<TypeSelection />} />
                <Route path="/food-list/:categoryId/:type" element={<FoodList />} />
                <Route path="/food-details/:foodId" element={<FoodDetails />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <CartButton />
          </div>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
