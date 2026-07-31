import ResourcesHero from "@/components/ResourcesHero";
import CoreClinicalPublications from "@/components/CoreClinicalPublications";
import ClinicalToolkits from "@/components/ClinicalToolkits";
import StayInformed from "@/components/StayInformed";
import ResourcesWebinarFaq from "@/components/ResourcesWebinarFaq";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Resources | Grey Dental",
  description: "Clinical resources and learning materials from Grey Dental.",
};

export default function ResourcesPage() {
  return (
    <div className="w-full min-w-0 flex flex-col flex-1">
      <ResourcesHero />
      <CoreClinicalPublications />
      <ClinicalToolkits />
      <StayInformed />
      <ResourcesWebinarFaq />
      <div id="newsletter">
        <Newsletter />
      </div>
    </div>
  );
}
