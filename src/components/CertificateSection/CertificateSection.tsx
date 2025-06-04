"use client";

import DesktopCertificateSection from "./DesktopCertificateSection";
import MobileCertificateSection from "./MobileCertificateSection";

export default function CertificateSection() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopCertificateSection />
      </div>
      <div className="block lg:hidden">
        <MobileCertificateSection />
      </div>
    </>
  );
}
