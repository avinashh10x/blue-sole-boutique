
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question or need assistance? We're here to help! Fill out the form below or use our contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                required
                value={formData.subject}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                rows={6}
                required
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          {/* Map */}
          <div className="rounded-xl overflow-hidden h-64 mb-8">
            <img
              src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-2">
                    We'll respond within 24 hours
                  </p>
                  <a
                    href="mailto:support@bluesole.com"
                    className="text-primary hover:underline"
                  >
                    support@bluesole.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us</h3>
                  <p className="text-muted-foreground mb-2">Mon-Fri, 9am-6pm</p>
                  <a
                    href="tel:+18005551234"
                    className="text-primary hover:underline"
                  >
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground mb-2">
                    Our flagship store
                  </p>
                  <p className="text-sm">
                    123 Market Street
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Hours</h3>
                  <p className="text-muted-foreground mb-2">Open daily</p>
                  <p className="text-sm">
                    Monday - Saturday: 10am - 8pm
                    <br />
                    Sunday: 11am - 6pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-medium mb-2">What is your return policy?</h4>
                <p className="text-sm text-muted-foreground">
                  We offer a 30-day return policy on all unworn items. Returns are free
                  and can be processed online through your account.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <h4 className="font-medium mb-2">How long does shipping take?</h4>
                <p className="text-sm text-muted-foreground">
                  Standard shipping takes 3-5 business days. Expedited shipping is available
                  at checkout for 1-2 day delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
