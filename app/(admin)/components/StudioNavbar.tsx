import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-2 bg-[#101112] border-b border-b-[#BBC0CA]/20">
        <Link href="/" className="text-[#BBC0CA] flex items-center">
          <BiArrowBack className="w-6 h-6 text-[#BBC0CA] mr-2" /> Back to
          website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
