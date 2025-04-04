
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card group overflow-hidden">
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.new && (
              <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
            )}
            {product.sale && (
              <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="text-xs text-muted-foreground">{product.brand}</div>
          <h3 className="font-medium mt-1 text-foreground truncate">
            {product.name}
          </h3>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-baseline">
              {product.sale && product.discount ? (
                <>
                  <span className="text-sm font-semibold text-red-500">
                    ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-xs text-muted-foreground line-through ml-2">
                    ${product.price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
              )}
            </div>
            <div className="flex items-center">
              <span className="text-amber-500">★</span>
              <span className="text-xs ml-1">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
