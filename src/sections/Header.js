"use client";

import MobileHeader from "@/components/header/MobileHeader";
import DesktopHeader from "@/components/header/DesktopHeader";

export default function Header() {
  return (
    <section id="header ">
      {/* BIG SCREEN */}
      <div className="invisible h-0 lg:visible lg:h-fit ">
        <DesktopHeader />
      </div>

      {/* MOBILE */}
      <div className="visible h-fit lg:invisible lg:h-0">
        <MobileHeader />
      </div>
    </section>
  );
}
