import WorkshopsHero from "@/components/WorkshopsHero";
import UpcomingSessions from "@/components/UpcomingSessions";

export const metadata = {
  title: "Workshops | Grey Dental",
  description: "Hands-on Grey Dental workshop sessions.",
};

export default function WorkshopsPage() {
  return (
    <div className="w-full min-w-0 flex flex-col flex-1 overflow-x-hidden">
      <WorkshopsHero />
      <UpcomingSessions />
    </div>
  );
}
