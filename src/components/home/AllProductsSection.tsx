import { useState, useMemo } from "react";
import { foodItems, categories } from "../../data/menuData";
import type { FoodItem } from "../../types/menu";

const WHATSAPP_NUMBER = "919999999999";

const getWhatsAppLink = (product: FoodItem) => {
  const price = product.price.mini || product.price.half || product.price.full || 0;
  const msg = `Hi Piquant! I'd like to order:\n\n🍽️ ${product.name}\n💰 ₹${price}\n\nPlease confirm availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

const categoryGroups = [
  { label: "All", ids: [] as string[] },
  { label: "Breakfast", ids: ["breakfast-box"] },
  { label: "Lunch", ids: ["lunch-box"] },
  { label: "Curry", ids: ["curry-box"] },
  { label: "Dinner", ids: ["dinner-box"] },
  { label: "Diet Food", ids: ["diet-breakfast", "diet-lunch", "diet-dinner", "diet-fruit-bowl"] },
  { label: "Homemade", ids: ["podulu", "rice-mix", "traditional-snacks", "pickles", "cakes"] },
];

const AllProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Get daily / non-subscription items only
  const dailyProducts = useMemo(() => {
    return foodItems.filter(item => {
      const cat = item.category as string;
      return !cat.includes("subscription") && !cat.includes("combo-meals") && !cat.includes("bhojanam");
    });
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return dailyProducts;
    const group = categoryGroups.find(g => g.label === activeFilter);
    if (!group) return dailyProducts;
    return dailyProducts.filter(item => group.ids.includes(item.category));
  }, [activeFilter, dailyProducts]);

  return (
    <section id="products" className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider font-['DM_Sans']">Our Catalog</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            All Products
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto font-['DM_Sans']">
            Browse our full menu and order your favorites directly via WhatsApp
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categoryGroups.map((group) => (
            <button
              key={group.label}
              onClick={() => setActiveFilter(group.label)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all font-['DM_Sans'] ${
                activeFilter === group.label
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-primary/10 border border-border"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, idx) => {
            const price = product.price.mini || product.price.half || product.price.full || 0;
            return (
              <div
                key={`${product.id}-${idx}`}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Type indicator */}
                <div
                  className="h-1.5"
                  style={{ backgroundColor: product.type === "veg" ? "#22C55E" : "#EF4444" }}
                />

                {/* Image */}
                {product.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start gap-2 mb-2">
                    <div
                      className={`w-5 h-5 rounded-sm border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                        product.type === "veg" ? "border-green-500" : "border-red-500"
                      }`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          product.type === "veg" ? "bg-green-500" : "bg-red-500"
                        }`}
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-sm leading-snug line-clamp-2">{product.name}</h3>
                  </div>

                  {product.description && (
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2 font-['DM_Sans']">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-lg font-bold text-foreground font-['DM_Sans']">₹{price}</span>
                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#1ebe5b] transition-all hover:scale-105 font-['DM_Sans']"
                    >
                      <WhatsAppSmallIcon className="w-3.5 h-3.5" />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12 font-['DM_Sans']">No products found in this category.</p>
        )}
      </div>
    </section>
  );
};

const WhatsAppSmallIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default AllProductsSection;
