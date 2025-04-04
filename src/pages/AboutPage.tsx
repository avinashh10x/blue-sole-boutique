
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center">About BlueSole</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
          Your destination for premium footwear. We're passionate about quality shoes that combine comfort, style, and durability.
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2010, BlueSole began as a small boutique in San Francisco with a simple mission: to provide customers with high-quality, comfortable, and stylish footwear at fair prices.
          </p>
          <p className="text-muted-foreground mb-4">
            Our founder, Michael Chen, was frustrated with having to choose between comfort and style. He believed that great shoes should offer both, along with durability and affordability.
          </p>
          <p className="text-muted-foreground">
            From our humble beginnings with just five shoe models, we've grown into a trusted brand offering hundreds of styles for men, women, and children. Despite our growth, we remain committed to Michael's original vision and values.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt="Our store"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16 bg-gray-50 py-12 px-6 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality",
              description:
                "We're committed to sourcing the best materials and working with manufacturers who share our passion for craftsmanship and attention to detail.",
              icon: "🔍",
            },
            {
              title: "Comfort",
              description:
                "We believe comfort should never be sacrificed for style. Every shoe we sell is designed with ergonomic principles in mind.",
              icon: "👣",
            },
            {
              title: "Sustainability",
              description:
                "We're constantly working to reduce our environmental footprint by using eco-friendly materials and implementing sustainable practices.",
              icon: "🌱",
            },
          ].map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Michael Chen",
              role: "Founder & CEO",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
            {
              name: "Sarah Johnson",
              role: "Head of Design",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
            {
              name: "David Kim",
              role: "Operations Manager",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
            {
              name: "Emily Rodriguez",
              role: "Customer Experience",
              image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 rounded-full overflow-hidden h-40 w-40 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground rounded-xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the BlueSole Family</h2>
        <p className="text-xl mb-6 max-w-xl mx-auto">
          Experience the perfect blend of comfort, style, and quality with our
          extensive collection of footwear.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
