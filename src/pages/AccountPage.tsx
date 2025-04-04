
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Package, MapPin, CreditCard, User } from "lucide-react";

const AccountPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
      setIsLoading(false);
    }, 1000);
  };

  // Sample orders data
  const orders = [
    {
      id: "BLU-846253",
      date: "Apr 3, 2023",
      status: "Delivered",
      total: 238.99,
      items: [
        { name: "Air Max Comfort", quantity: 1, price: 159.99 },
        { name: "Classic Canvas Sneaker", quantity: 1, price: 54.99 },
      ],
    },
    {
      id: "BLU-721845",
      date: "Feb 16, 2023",
      status: "Delivered",
      total: 129.99,
      items: [{ name: "Blue Wave Runner", quantity: 1, price: 129.99 }],
    },
  ];

  // Sample addresses data
  const addresses = [
    {
      id: "addr-1",
      type: "Home",
      name: "John Doe",
      address: "123 Main St, Apt 4B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94103",
      country: "USA",
      phone: "(555) 123-4567",
      isDefault: true,
    },
    {
      id: "addr-2",
      type: "Work",
      name: "John Doe",
      address: "456 Market St, Floor 3",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "USA",
      phone: "(555) 987-6543",
      isDefault: false,
    },
  ];

  // Sample payment methods data
  const paymentMethods = [
    {
      id: "pm-1",
      type: "Visa",
      last4: "4242",
      expiry: "05/25",
      name: "John Doe",
      isDefault: true,
    },
    {
      id: "pm-2",
      type: "Mastercard",
      last4: "5678",
      expiry: "12/24",
      name: "John Doe",
      isDefault: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <Tabs defaultValue="profile" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="orders" className="flex items-center gap-2">
            <Package className="h-4 w-4" /> Orders
          </TabsTrigger>
          <TabsTrigger value="addresses" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Addresses
          </TabsTrigger>
          <TabsTrigger value="payment" className="flex items-center gap-2">
            <CreditCard className="h-4 w-4" /> Payment
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details and contact information.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleProfileSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                  />
                </div>

                <div className="pt-2">
                  <Button variant="outline" asChild>
                    <Link to="/change-password">Change Password</Link>
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                View and track your recent orders.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {orders.length > 0 ? (
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded-md p-4">
                      <div className="flex flex-col sm:flex-row justify-between mb-4">
                        <div>
                          <h3 className="font-medium">Order #{order.id}</h3>
                          <p className="text-sm text-muted-foreground">
                            Placed on {order.date}
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:text-right">
                          <div className="font-medium">
                            ${order.total.toFixed(2)}
                          </div>
                          <div
                            className={`inline-block px-2 py-1 text-xs rounded-full ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {order.status}
                          </div>
                        </div>
                      </div>

                      <Separator className="my-3" />

                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between text-sm"
                          >
                            <span>
                              {item.quantity} x {item.name}
                            </span>
                            <span>${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4">
                        <Button size="sm" variant="outline" asChild>
                          <Link to={`/order/${order.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <h3 className="font-medium mb-2">No orders yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You haven't placed any orders yet.
                  </p>
                  <Button asChild>
                    <Link to="/products">Start Shopping</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Addresses Tab */}
        <TabsContent value="addresses">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Shipping Addresses</CardTitle>
                  <CardDescription>
                    Manage your shipping addresses.
                  </CardDescription>
                </div>
                <Button className="mt-4 sm:mt-0" asChild>
                  <Link to="/add-address">Add Address</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className="border p-4 rounded-md relative"
                  >
                    {address.isDefault && (
                      <span className="absolute top-2 right-2 text-xs font-medium text-primary">
                        Default
                      </span>
                    )}
                    <div className="font-medium mb-1">
                      {address.name} ({address.type})
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{address.address}</p>
                      <p>
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                      <p>{address.country}</p>
                      <p>{address.phone}</p>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/edit-address/${address.id}`}>Edit</Link>
                      </Button>
                      {!address.isDefault && (
                        <Button size="sm" variant="outline">
                          Set as Default
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Manage your saved payment methods.
                  </CardDescription>
                </div>
                <Button className="mt-4 sm:mt-0" asChild>
                  <Link to="/add-payment">Add Payment Method</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentMethods.map((payment) => (
                  <div
                    key={payment.id}
                    className="border p-4 rounded-md relative"
                  >
                    {payment.isDefault && (
                      <span className="absolute top-2 right-2 text-xs font-medium text-primary">
                        Default
                      </span>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      {payment.type === "Visa" ? (
                        <span className="font-bold text-blue-600">VISA</span>
                      ) : (
                        <span className="font-bold text-orange-600">MC</span>
                      )}
                      <span className="font-medium">
                        •••• {payment.last4}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Expires {payment.expiry}</p>
                      <p>{payment.name}</p>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link to={`/edit-payment/${payment.id}`}>Edit</Link>
                      </Button>
                      {!payment.isDefault && (
                        <Button size="sm" variant="outline">
                          Set as Default
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountPage;
