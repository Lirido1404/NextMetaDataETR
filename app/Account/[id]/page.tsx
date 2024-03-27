import React from 'react'
import { Metadata } from 'next';

type Props={
    params:{
        id:string;
    };
};
export const generateMetadata = ({params}:Props):Metadata=>{
    return {
        title: `Product ${params.id}`
    }
}
function page({params}:Props) {
  return (
    <div>page</div>
  )
}

export default page