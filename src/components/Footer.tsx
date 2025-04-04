
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BlueSole</h3>
            <p className="text-sm opacity-80 mb-4">
              Your destination for premium footwear. We offer quality shoes for
              every occasion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground hover:text-primary-foreground/80"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground hover:text-primary-foreground/80"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground hover:text-primary-foreground/80"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/products?gender=men"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Men's Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/products?gender=women"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Women's Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Running"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Running
                </Link>
              </li>
              <li>
                <Link
                  to="/products?category=Casual"
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Casual
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm opacity-80 hover:opacity-100">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm opacity-80 hover:opacity-100">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-sm opacity-80 hover:opacity-100">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md text-foreground w-full"
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} BlueSole. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs opacity-70 hover:opacity-100">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs opacity-70 hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
