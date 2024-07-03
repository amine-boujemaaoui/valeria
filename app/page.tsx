import Hero from "./components/Hero";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import MostPopular from "./components/MostPopular";
import Newest from "./components/Newest";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <MaxWidthWrapper className='pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <Newest />
      <MostPopular />
    </MaxWidthWrapper>
  );
}
