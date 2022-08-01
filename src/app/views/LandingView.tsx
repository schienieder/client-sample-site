import Navbar from "../components/Navbar"
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ServiceSection from "./ServiceSection"
import ProductsSection from "./ProductsSection"
import ReviewsSection from "./ReviewsSection"
import Footer from "../components/Footer"

const LandingView = () => {
    return (
        <div className="w-full min-h-screen flex flex-col font-red">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ProductsSection />
            <ReviewsSection />
            <Footer />
        </div>
    )
}

export default LandingView