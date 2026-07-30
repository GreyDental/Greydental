import CourseDetailLanding from "@/components/CourseDetailLanding";
import CourseCurriculum from "@/components/CourseCurriculum";
import CourseInstructor from "@/components/CourseInstructor";
import CertificateRules from "@/components/CertificateRules";
import CourseTestimonials from "@/components/CourseTestimonials";
import Newsletter from "@/components/Newsletter";

export const metadata = {
  title: "Course Detail | Grey Dental",
  description: "Course details and enrollment for Grey Dental continuing education.",
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
