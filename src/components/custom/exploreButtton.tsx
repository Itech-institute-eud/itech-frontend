import { Button } from "@/components/ui/button";
import Link from "next/link";

const ExploreBtn = () => {
  return (
    <div className="w-full flex items-center justify-center py-2">
      <Link href="/courses">
        <Button
          variant="outline"
          className="md:w-[416px] h-[46px] rounded-xl bg-black text-white border-none transition-colors" 
        >
          Explore more courses
        </Button>
      </Link>
    </div>
  );
};

export default ExploreBtn;
