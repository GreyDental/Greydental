import CommunityHero from "@/components/CommunityHero";
import CommunityEcosystem from "@/components/CommunityEcosystem";
import CommunityClinicalCircles from "@/components/CommunityClinicalCircles";
import CommunityMembership from "@/components/CommunityMembership";
import CommunityJoinCta from "@/components/CommunityJoinCta";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Community | Grey Dental",
  description: "Connect with the Grey Dental community of practicing clinicians.",
};

export default function CommunityPage() {
  return (
    <div className="w-full min-w-0 flex flex-col flex-1">
      <CommunityHero />
      <CommunityEcosystem />
      <CommunityClinicalCircles />
      <CommunityMembership />
      <CommunityJoinCta />
      <Newsletter />
    </div>
  );
}
