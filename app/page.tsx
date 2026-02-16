import Header from "@/components/header/header";
import ImageCarousel from "@/components/header/image-carousel";
import Services from "@/components/services/services";
import Stats from "@/components/stats/stats";

export default async function Home() {
  return (
    <div className="text-primary overflow-hidden">
      <Header />
      <Stats />
      <ImageCarousel />
      <Services />
    </div>
  );
}
