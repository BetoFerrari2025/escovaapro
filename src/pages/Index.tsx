import { useState } from "react";
import TopBanner from "@/components/store/TopBanner";
import Header from "@/components/store/Header";
import ImageGallery from "@/components/store/ImageGallery";
import ProductInfo from "@/components/store/ProductInfo";
import CustomerReviews from "@/components/store/CustomerReviews";
import BundleOffer from "@/components/store/BundleOffer";
import FAQ from "@/components/store/FAQ";
import ProductDescription from "@/components/store/ProductDescription";
import Footer from "@/components/store/Footer";
import StickyBuyBar from "@/components/store/StickyBuyBar";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("rosa");

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      <main className="container py-4 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ImageGallery selectedColor={selectedColor} />
          <ProductInfo selectedColor={selectedColor} onColorChange={setSelectedColor} />
        </div>

        <CustomerReviews />
        <BundleOffer />
        <FAQ />
        <ProductDescription />
      </main>

      <Footer />
      <StickyBuyBar />
    </div>
  );
};

export default Index;
