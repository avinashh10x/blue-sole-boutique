
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const OrderConfirmationPage = () => {
  // Generate a random order number
  const orderNumber = `BLU-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Simulate estimated delivery date (5-7 days from now)
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 5 + Math.floor(Math.random() * 3));
  
  const formattedDeliveryDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(deliveryDate);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-3">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your order has been placed successfully. We've sent a confirmation to your email.
        </p>
        
        <div className="bg-muted/30 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-lg mb-4">Order Details</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-medium">{orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Estimated Delivery</p>
              <p className="font-medium">{formattedDeliveryDate}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Shipping Method</p>
              <p className="font-medium">Standard Shipping (Free)</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            You will receive updates about your order status via email. If you have any questions,
            please contact our customer support.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/account">View Order History</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
