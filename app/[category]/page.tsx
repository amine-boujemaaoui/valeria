import MoreCategory from "../components/MoreCategory";
import MostPopular from "../components/MostPopular";

export const dynamic = "force-dynamic";

export default function CategoryPage ({ params }: { params: { category: string } }) {
  return (
    <div className='bg-background'>
          <MoreCategory category={params.category} />
          <MostPopular />
    </div>
  );
};

