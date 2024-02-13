import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {faker} from '@faker-js/faker'

type Props = {
    image_file: string;
    name: string;
    price: string;
    details: string;
    id: number;
};
const ApartmentCard = ({
    image_file,
    name,
    price,
    details,
    id,
  }: Props) => {
    
    //create random image files
    const randomImage = faker.image.urlPicsumPhotos();

    return(
        <div className = 'relative z-10 flex flex-col items-center justify-end w-full'>
        <div className="h-10 w-3/4 blur-md absolute shadow-lg shadow-[rgba(0,0,0,0.3)]" />
        <div className='z-10 rounded-[24px] bg-[#F4F4F4] w-full h-full'>
          <div className='w-full rounded-t-[24px]'>
            <Image
              src={randomImage}
              className='w-full rounded-t-[24px] object-cover'
              width={200}
              height={140}
              alt=''
            />
          </div>
          <div className='p-3'>
            <div className="flex items-start justify-between mb-1">
              <div className="flex flex-col gap-1 lg:w-[87%]">
                <div className= {`text-[18px] font-bold`}>{name}</div>
                <div className= {`text-[14px] text-[#454545]`}>{price}</div>
                <div className= {`text-[14px] text-[#454545]`}>{details}</div>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col items-center justify-center pb-5">
                <button
                    className='xl:ml-5 whitespace-nowrap flex items-center justify-center  
                    rounded-[30px] text-[14px] w-[90px] bg-blue-500 lg:text-[16px] 
                     text-white border-4 border-blue-500 hover:bg-blue-500 p-2 lg:px-5 h-[35px]
                    transition delay-300 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110'>
                    <Link href={{
                        pathname: "/apartments/[id]",
                        query:{id}
                    }}>View</Link>

                </button>
            </div>
        </div>
      </div>
    )
}  

export default ApartmentCard;

