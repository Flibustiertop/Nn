import { BenefitsSection } from "@/components/marketing/benefits-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FlavorsSection } from "@/components/marketing/flavors-section";
import { GallerySection } from "@/components/marketing/gallery-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { IngredientsSection } from "@/components/marketing/ingredients-section";
import { ReviewsSection } from "@/components/marketing/reviews-section";
import { SocialProofSection } from "@/components/marketing/social-proof-section";
import { StorySection } from "@/components/marketing/story-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { kidsBenefits, parentBenefits } from "@/data/site-content";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <BenefitsSection
        id="why-kids"
        eyebrow="Почему дети обожают Tiggi"
        title="Первый экран зажигает интерес, а эти карточки превращают интерес в желание."
        description="Детям нужен не сухой список преимуществ, а ощущение, что продукт веселый, вкусный и связан с удовольствием, игрой и движением."
        items={kidsBenefits}
      />
      <BenefitsSection
        id="why-parents"
        eyebrow="Почему родители выбирают Tiggi"
        title="Рациональная ценность бренда должна быть такой же сильной, как и эмоция."
        description="Для родителя Tiggi выглядит как продуманный бренд: с понятной пользой, аккуратной визуальной системой и ясным сценарием покупки."
        items={parentBenefits}
      />
      <IngredientsSection />
      <GallerySection />
      <FlavorsSection />
      <StorySection />
      <SocialProofSection />
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
