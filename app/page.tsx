import Hero from "./components/Hero";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Newest from "./components/Newest";

export default function Home() {
  return (
    <MaxWidthWrapper className='pb-6 sm:pb-8 lg:pb-12 bg-white'>
      <Hero />
      <Newest />
    </MaxWidthWrapper>
  );
}
