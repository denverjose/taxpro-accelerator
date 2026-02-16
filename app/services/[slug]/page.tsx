import Stats from "@/components/stats/stats";
import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";
import Development from "@/components/development/development";
import FeaturesTable from "@/components/pricing-table/features-table";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/constants/services-constants";
import { servicesMetadata } from "@/lib/metadata";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return servicesMetadata({ params });
}

export function generateStaticParams() {
  return services?.map((service: any) => ({
    slug: service.title.replace(/ /g, "-").toLowerCase(),
  }));
}

export default function Page({ params }: Props) {
  let content;

  if (params.slug === "tax-software") {
    content = (
      <div>
        <h1 className="hidden">TaxPro Software Packages</h1>
        <Stats />
        <FeaturesTable />
      </div>
    );
  } else if (params.slug === "development") {
    content = <Development />;
  } else {
    notFound();
  }
  return (
    <MotionWrapper className="text-primary mx-auto relative pt-32 xs:pt-36 md:pt-44">
      {content}
    </MotionWrapper>
  );
}
