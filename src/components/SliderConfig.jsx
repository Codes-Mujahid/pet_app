import HeroImageSlider from "../components/HeroImageSlider";
import { assets } from "../assets/assets";

const images = [
  { 
    src: assets.SLIDE_01, 
    title: "Trusted Pet Clinic", 
    subtitle: "Emergency Veterinary Care Anytime"
  },
  { 
    src: assets.SLIDE_02, 
    title: "Compassionate Pet Care", 
    subtitle: "Personalized Health Plans for Your Pets"
  },
  { 
    src: assets.SLIDE_03,
    title: "Healthy & Happy Pets", 
    subtitle: "Professional Grooming and Wellness Services"
  },
  { 
    src: assets.SLIDE_04,
    title: "Reliable Vaccinations", 
    subtitle: "Keep Your Pets Protected and Healthy"
  },
];

const SliderConfig = () => {
  return (
    <main>
      <HeroImageSlider 
        images={images} 
        height="h-[90vh]" 
        interval={4000} 
        autoplay={true}
      />
    </main>
  );
}

export default SliderConfig;
