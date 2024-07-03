"use server";

import MoreCategory from "../components/MoreCategory";
import MostPopular from "../components/MostPopular";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  return (
    <div className='bg-background'>
          <MoreCategory category={params.category} />
          <MostPopular />
    </div>
  );
};

export default CategoryPage;
