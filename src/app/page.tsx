"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import { Award, BookOpen, CheckCircle, Heart, Lock, Mail, MessageCircle, Shield, Sparkles, Star, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ShopZone"
          button={{
            text: "Start Shopping",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Your One-Stop Shopping Destination"
          description="Discover thousands of quality products from trusted brands with fast shipping and secure payments. Shop with confidence at ShopZone."
          tag="Now Open"
          tagIcon={Sparkles}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/8939806/pexels-photo-8939806.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern ecommerce shopping experience"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why Choose ShopZone"
          description="We're committed to providing you with the best online shopping experience through quality products, exceptional service, and unbeatable value."
          tag="Our Promise"
          tagIcon={Shield}
          bulletPoints={[
            {
              title: "Curated Selection",
              description: "Hand-picked products from trusted brands and verified sellers",
              icon: CheckCircle
            },
            {
              title: "Fast & Reliable",
              description: "Quick processing and shipping with real-time tracking",
              icon: Zap
            },
            {
              title: "Secure Shopping",
              description: "Your data and payments are protected with enterprise-grade security",
              icon: Lock
            },
            {
              title: "Customer First",
              description: "24/7 support and hassle-free returns within 30 days",
              icon: Heart
            }
          ]}
          imageSrc="https://images.pexels.com/photos/12820603/pexels-photo-12820603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern warehouse and distribution center"
          imagePosition="right"
          buttons={[
            { text: "Start Shopping", href: "products" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Shopping Made Simple"
          description="Everything you need for a seamless shopping experience, from browse to delivery"
          tag="Features"
          tagIcon={Star}
          features={[
            {
              title: "Fast Delivery",
              description: "Free shipping on orders over $50 with 2-day delivery to most locations",
              imageSrc: "https://images.pexels.com/photos/6699421/pexels-photo-6699421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fast delivery truck"
            },
            {
              title: "Secure Payments",
              description: "Multiple payment options with bank-level security and fraud protection",
              imageSrc: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Secure payment processing"
            },
            {
              title: "24/7 Support",
              description: "Our customer service team is always here to help with any questions",
              imageSrc: "https://images.pexels.com/photos/7709255/pexels-photo-7709255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Customer support team"
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Products"
          description="Discover our most popular items across all categories"
          tag="Best Sellers"
          tagIcon={TrendingUp}
          products={[
            {
              id: "electronics-1",
              name: "Wireless Bluetooth Headphones",
              price: "$89.99",
              imageSrc: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Wireless bluetooth headphones"
            },
            {
              id: "fashion-1",
              name: "Premium Cotton T-Shirt",
              price: "$24.99",
              imageSrc: "https://images.pexels.com/photos/34423904/pexels-photo-34423904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium cotton t-shirt"
            },
            {
              id: "home-1",
              name: "Modern Table Lamp",
              price: "$49.99",
              imageSrc: "https://images.pexels.com/photos/6970025/pexels-photo-6970025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern table lamp"
            }
          ]}
          buttons={[
            { text: "View All Products", href: "products" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Don't just take our word for it - hear from thousands of satisfied customers"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Verified Buyer",
              company: "Regular Customer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/30688912/pexels-photo-30688912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Prime Member",
              company: "Frequent Shopper",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7621263/pexels-photo-7621263.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Business Account",
              company: "Corporate Buyer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4473098/pexels-photo-4473098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "VIP Customer",
              company: "Loyal Shopper",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Join millions of customers who trust us with top brands worldwide"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1032109/pexels-photo-1032109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Shopping Insights"
          description="Tips, trends, and guides to help you shop smarter"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Guide",
              title: "The Complete Guide to Online Shopping",
              excerpt: "Everything you need to know about shopping online safely and effectively",
              imageSrc: "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Online shopping guide",
              authorName: "Jessica Parker",
              authorAvatar: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Trends",
              title: "Top Shopping Trends for 2025",
              excerpt: "Discover the latest trends shaping the future of retail and ecommerce",
              imageSrc: "https://images.pexels.com/photos/5868737/pexels-photo-5868737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Shopping trends 2025",
              authorName: "Alex Thompson",
              authorAvatar: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Tips",
              title: "How to Find the Best Deals",
              excerpt: "Smart strategies for saving money and finding great deals online",
              imageSrc: "https://images.pexels.com/photos/1325735/pexels-photo-1325735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Shopping tips and deals",
              authorName: "Morgan Lee",
              authorAvatar: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "10 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          title="Stay Updated"
          description="Get the latest deals, new arrivals, and exclusive offers delivered straight to your inbox"
          tag="Newsletter"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing you agree to receive marketing emails. Unsubscribe at any time."
          imageSrc="https://images.pexels.com/photos/8483486/pexels-photo-8483486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Customer service and shopping support"
          mediaPosition="right"
        />
      </div>
    </ThemeProvider>
  );
}