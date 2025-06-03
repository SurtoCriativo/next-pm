// CourseHighlightSection.tsx
"use client";

import DesktopCourseHighlight from "./DesktopCourseHighlight";
import MobileCourseHighlight from "./MobileCourseHighlight";

export default function CourseHighlightSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopCourseHighlight />
      </div>
      <div className="block lg:hidden">
        <MobileCourseHighlight />
      </div>
    </>
  );
}
