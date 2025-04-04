
import { Link } from "react-router-dom";
import { Trash2, ChevronLeft, Plus, Minus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();

  const handleQuantityChange = (id: string, size: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, size, newQuantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {items.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm border">
              {/* Cart Header */}
              <div className="p-6 border-b">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Your Items ({items.length})</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Clear Cart
                  </Button>
                </div>
              </div>

              {/* Cart Items List */}
              <div>
                {items.map((item, index) => (
                  <div key={`${item.id}-${item.size}`} className="p-6 border-b last:border-b-0">
                    <div className="flex flex-col sm:flex-row">
                      {/* Product Image */}
                      <div className="sm:w-1/4 mb-4 sm:mb-0">
                        <Link to={`/product/${item.id}`} className="block">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-24 sm:h-28 object-cover rounded-md"
                          />
                        </Link>
                      </div>
                      
                      {/* Product Details */}
                      <div className="sm:w-3/4 sm:pl-6 flex flex-col">
                        {/* Product Info */}
                        <div className="flex justify-between mb-4">
                          <div>
                            <Link 
                              to={`/product/${item.id}`}
                              className="text-lg font-medium hover:text-primary"
                            >
                              {item.name}
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">
                              Size: {item.size}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">
                              ${item.price.toFixed(2)} each
                            </div>
                          </div>
                        </div>
                        
                        {/* Quantity and Remove */}
                        <div className="flex justify-between items-center mt-auto">
                          <div className="flex items-center">
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.size, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => handleQuantityChange(item.id, item.size, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${(subtotal * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />
              
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Total</span>
                <span>${(subtotal + subtotal * 0.08).toFixed(2)}</span>
              </div>
              
              <Button className="w-full" size="lg" asChild>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              
              <Alert className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Free Shipping!</AlertTitle>
                <AlertDescription>
                  Free standard shipping on all orders.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg bg-white">
          <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild>
            <Link to="/products">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
