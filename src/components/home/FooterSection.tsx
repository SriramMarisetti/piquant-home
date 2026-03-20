const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%20Piquant!%20I%20want%20to%20order%20food.";

const FooterSection = () => (
  <footer id="footer" className="bg-foreground text-white/80 py-12">
    <div className="container-custom">
      <div className="grid sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white font-['Playfair_Display'] mb-3">Piquant</h3>
          <p className="text-sm leading-relaxed font-['DM_Sans']">
            Delicious homemade food delivered daily to your doorstep. Made with love, served with care.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 font-['DM_Sans']">Quick Links</h4>
          <ul className="space-y-2 text-sm font-['DM_Sans']">
            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
            <li><a href="#products" className="hover:text-primary transition-colors">All Products</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3 font-['DM_Sans']">Contact</h4>
          <ul className="space-y-2 text-sm font-['DM_Sans']">
            <li>📍 Kotturu, Telangana</li>
            <li>📞 +91 99999 99999</li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                💬 WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50 font-['DM_Sans']">
        © {new Date().getFullYear()} Piquant. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
