import EducationHero from "@/components/EducationHero";
import EducationCategories from "@/components/EducationCategories";
import Featured from "@/components/Featured";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Dental Education | Grey Dental",
  description: "Learn through self-paced online courses, hybrid programs, live workshops, and accredited certification pathways.",
};

export default function EducationPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <EducationHero />

      {/* Course Categories Section */}
      <EducationCategories />

      {/* Featured Courses Section */}
      <Featured />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
