import { Helmet } from "react-helmet-async";
import { useProducts } from "@/hooks/useProducts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";

// Replace with your actual WhatsApp business number (include country code, no + or spaces)
const WHATSAPP_NUMBER = "15551234567";

const Index = () => {
  const { data: products, isLoading } = useProducts();

  const earrings = products?.filter((p) => p.category === "earrings") ?? [];
  const bangles = products?.filter((p) => p.category === "bangles") ?? [];
  const accessories = products?.filter((p) => p.category === "accessories") ?? [];

  return (
    <>
      <Helmet>
        <title>Chrome Traders | Handcrafted Fashion Jewelry</title>
        <meta 
          name="description" 
          content="Discover timeless elegance with Chrome Traders. Shop our curated collection of handcrafted earrings, bangles, and ladies' accessories." 
        />
        <meta name="keywords" content="jewelry, earrings, bangles, fashion accessories, handcrafted jewelry, Chrome Traders" />
        <link rel="canonical" href="https://chrometraders.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <Hero />

        {isLoading ? (
          <div className="luxury-container py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-[4/5] rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <ProductSection
              id="earrings"
              title="Earrings"
              subtitle="From subtle studs to statement drops, find your perfect pair"
              products={earrings}
              whatsappNumber={WHATSAPP_NUMBER}
            />

            <div className="bg-cream-dark">
              <ProductSection
                id="bangles"
                title="Bangles"
                subtitle="Wrap your wrist in elegance with our curated bangle collection"
                products={bangles}
                whatsappNumber={WHATSAPP_NUMBER}
              />
            </div>

            <ProductSection
              id="accessories"
              title="Accessories"
              subtitle="The finishing touches that elevate every look"
              products={accessories}
              whatsappNumber={WHATSAPP_NUMBER}
            />
          </>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Index;
