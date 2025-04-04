
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Minus, Plus, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products as allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<number>(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem({
      id: product.id,
      name: product.name,
      price: product.sale && product.discount ? product.price * (1 - product.discount / 100) : product.price,
      size: selectedSize,
      image: product.images[0],
      quantity,
    });
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Similar products based on category
  const similarProducts = allProducts
    .filter(
      (p) =>
        p.id !== product.id && p.category === product.category
    )
    .slice(0, 4);

  const finalPrice = product.sale && product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/products"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex gap-2 overflow-auto pb-1">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 rounded-md overflow-hidden ${
                  activeImage === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-20 w-20 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="text-sm text-muted-foreground">
            <Link to={`/products?brand=${product.brand}`}>
              {product.brand}
            </Link>
          </div>
          <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "fill-current" : "fill-none"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <div className="mb-6">
            {product.sale && product.discount ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-red-500">
                  ${finalPrice.toFixed(2)}
                </span>
                <span className="ml-3 text-lg text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="ml-2 bg-red-500 text-white px-2 py-0.5 text-xs rounded-md">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Size <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {product.availableSizes.map((size) => (
                <Button
                  key={size}
                  type="button"
                  variant={selectedSize === size ? "default" : "outline"}
                  className="h-10 px-4"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
            {selectedSize === "" && (
              <p className="text-sm text-red-500 mt-2">
                Please select a size
              </p>
            )}
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={decrementQuantity}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex items-center justify-center w-12 h-10 border-t border-b">
                {quantity}
              </div>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            className="w-full mb-4"
            size="lg"
            onClick={handleAddToCart}
            disabled={!selectedSize}
          >
            Add to Cart - ${(finalPrice * quantity).toFixed(2)}
          </Button>

          {/* Product metadata */}
          <div className="border-t border-b py-4 mb-6">
            <div className="flex text-sm">
              <Truck className="h-5 w-5 mr-2 text-muted-foreground" />
              <span>Free shipping on orders over $99</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="text-sm">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-muted-foreground">Category:</div>
              <div>
                <Link
                  to={`/products?category=${product.category}`}
                  className="hover:underline"
                >
                  {product.category}
                </Link>
              </div>

              <div className="text-muted-foreground">Brand:</div>
              <div>
                <Link
                  to={`/products?brand=${product.brand}`}
                  className="hover:underline"
                >
                  {product.brand}
                </Link>
              </div>

              <div className="text-muted-foreground">Colors:</div>
              <div className="flex gap-1">
                {product.colors.map((color, i) => (
                  <span key={i} className="capitalize">
                    {color}
                    {i < product.colors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>

              <div className="text-muted-foreground">Tags:</div>
              <div className="flex flex-wrap gap-1">
                {product.tags.map((tag, i) => (
                  <Link
                    key={i}
                    to={`/products?tag=${tag}`}
                    className="text-xs bg-muted px-2 py-1 rounded-md hover:bg-muted/80"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-6">
            <p className="text-muted-foreground mb-4">{product.description}</p>
            <p className="text-muted-foreground">
              This {product.name} from {product.brand} is designed for ultimate
              comfort and style. Perfect for {product.category.toLowerCase()} enthusiasts 
              who demand quality and performance.
            </p>
          </TabsContent>
          <TabsContent value="details" className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Brand: {product.brand}</li>
                  <li>Category: {product.category}</li>
                  <li>Gender: {product.gender.charAt(0).toUpperCase() + product.gender.slice(1)}</li>
                  <li>Available Sizes: {product.availableSizes.join(", ")}</li>
                  <li>Colors: {product.colors.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Care Instructions</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Clean with a soft, dry cloth</li>
                  <li>Store in a cool, dry place</li>
                  <li>Avoid direct sunlight for prolonged periods</li>
                  <li>Do not machine wash</li>
                  <li>Allow to air dry if wet</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-current" : "fill-none"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2">
                  {product.rating} out of 5 ({product.reviews} reviews)
                </span>
              </div>
              <Button>Write a Review</Button>
            </div>
            <div className="border-t pt-6">
              {/* Sample review items */}
              {[
                {
                  author: "John D.",
                  date: "3 weeks ago",
                  rating: 5,
                  title: "Excellent quality and comfort!",
                  content:
                    "These shoes exceeded my expectations. They're comfortable from day one and the quality is excellent. I've worn them for long walks and my feet feel great.",
                },
                {
                  author: "Sarah M.",
                  date: "1 month ago",
                  rating: 4,
                  title: "Great shoes, but sizing runs small",
                  content:
                    "I love these shoes but had to exchange for a size up. Once I got the right size, they were perfect. The color is exactly as shown in the pictures.",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className={`py-6 ${
                    index < 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{review.author}</h4>
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex text-amber-400 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "fill-current" : "fill-none"
                        }`}
                      />
                    ))}
                  </div>
                  <h5 className="font-medium mb-2">{review.title}</h5>
                  <p className="text-muted-foreground">{review.content}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
