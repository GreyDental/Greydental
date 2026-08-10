import CourseDetailLanding from "@/components/CourseDetailLanding";
import CourseCurriculum from "@/components/CourseCurriculum";
import CourseInstructor from "@/components/CourseInstructor";
import CertificateRules from "@/components/CertificateRules";
import CourseTestimonials from "@/components/CourseTestimonials";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Foundations of Clinical Endodontics | Grey Dental",
  description:
    "Module titles and learning outcomes for Foundations of Clinical Endodontics — from patient care through complication management.",
};

type CourseDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="w-full min-w-0 flex flex-col" data-course-slug={slug}>
      {/* Landing section */}
      <CourseDetailLanding />

      {/* Course Curriculum */}
      <CourseCurriculum />

      {/* Your Instructor */}
      <CourseInstructor />

      {/* Certificate Rules */}
      <CertificateRules />

      {/* Student Testimonials */}
      <CourseTestimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
