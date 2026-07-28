import CoursesHero from "@/components/CoursesHero";
import CoursesListing from "@/components/CoursesListing";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Courses | Grey Dental",
  description:
    "Browse Grey Dental courses — online, hybrid, and hands-on workshops taught by practicing specialists.",
};

export default function CoursesPage() {
  return (
    <main className="w-full">
      {/* Hero — first section after header */}
      <CoursesHero />

      {/* Courses listing */}
      <CoursesListing />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}

