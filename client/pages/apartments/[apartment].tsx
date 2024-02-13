'use client'

import React, {useEffect, useState} from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { getApartments } from '../../../server/controllers/ApartmentController';
import { useParams } from 'next/navigation'
import {faker} from '@faker-js/faker'
import Image from 'next/image';


export default function Apartment() {   
    const router = useRouter();
    const apartmentID = router.query.apartment;

    //initializng type apartment
    type apartment ={
        name: string; 
        img_file: string; 
        price:string;
        details:string; 
        id:number
    }
    const [apartment, setApartment] = useState<apartment>();
    
    //faker API for images
    const randomImage = faker.image.urlPicsumPhotos();

    //fetching apartment with selected ID from backend 
    useEffect(() => {
        fetch(`http://localhost:3000/apartment/${apartmentID}`)
        .then((res) => res.json())
        .then((data) => {
            setApartment(data);
          })
      })
      if (!apartment) return <p>No apartment data</p>

    return (
        <div>
            <div className="drop-shadow-lg py-10">
                <h1 className= {` text-2xl md:text-3xl text-blue-400 text-center`}>Apartment details</h1>
            </div>
            <div className='p-5 border-2 border-black w-[60%] m-5'>
                <div className='w-full rounded-t-[24px]'>
                    <Image
                        src={randomImage}
                        className='w-full rounded-t-[24px] object-cover'
                        width={200}
                        height={90}
                        alt=''
                    />
                </div>
                <div className="flex flex-col gap-1 lg:w-[87%]">
                    <div className= {`text-[18px] font-bold`}>{ apartment.name}</div>
                    <div className= {`text-[14px] text-[#454545]`}>{ apartment.price}</div>
                    <div className= {`text-[14px] text-[#454545]`}>{ apartment.details}</div>
                </div>
            </div>
        </div>
        
    )
}
