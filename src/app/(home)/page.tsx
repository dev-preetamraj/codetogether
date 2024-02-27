import AboutSection from "@/components/home/AboutSection"
import HeroSection from "@/components/home/HeroSection"
import SubscriptionPlanSection from "@/components/home/SubscriptionPlanSection"

const HomePage = () => {
  return (
    <div className='flex flex-col space-y-20'>
      <HeroSection />
      <AboutSection />
      <SubscriptionPlanSection />
    </div>
  )
}

export default HomePage