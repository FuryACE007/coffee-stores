import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStorePage = () => {
  const router = useRouter();
  // console.log("router:", router.query.storeId);
  return <div className=' text-white text-lg'> Coffee Store Page <Link href= "/"><a>Back to Home</a></Link> </div>;
};

export default CoffeeStorePage;
