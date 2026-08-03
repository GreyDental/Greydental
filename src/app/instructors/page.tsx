import InstructorsHero from "@/components/InstructorsHero";
import InstructorsFaculty from "@/components/InstructorsFaculty";
import InstructorsWhyLearn from "@/components/InstructorsWhyLearn";
import InstructorsCta from "@/components/InstructorsCta";

export const metadata = {
  title: "Instructors | Grey Dental",
  description:
    "Meet the practicing specialists who teach Grey Dental courses, workshops, and clinical programs.",
};

export default function InstructorsPage() {
  return (
    <div className="w-full min-w-0 flex flex-col flex-1">
      <InstructorsHero />
      <InstructorsFaculty />
      <InstructorsWhyLearn />
      <InstructorsCta />
    </div>
  );
}
