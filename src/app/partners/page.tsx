import PartnersHero from "@/components/PartnersHero";
import TrustedPartnerships from "@/components/TrustedPartnerships";
import WhyPartner from "@/components/WhyPartner";
import PartnersMeeting from "@/components/PartnersMeeting";
import PartnershipProcess from "@/components/PartnershipProcess";
import PartnersCta from "@/components/PartnersCta";

export const metadata = {
  title: "Partners | Grey Dental",
  description: "Partner with Grey Dental to advance clinical education worldwide.",
};

export default function PartnersPage() {
  return (
    <div className="w-full min-w-0 flex flex-col flex-1">
      <PartnersHero />
      <TrustedPartnerships />
      <WhyPartner />
      <PartnersMeeting />
      <PartnershipProcess />
      <PartnersCta />
    </div>
  );
}
