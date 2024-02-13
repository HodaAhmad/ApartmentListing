import React, {useEffect, useState, FormEvent} from 'react'
import { Apartment } from '../../server/controllers/types';
import  ApartmentCard  from '../components/apartmentCard';

//fetch apartments data from backend
export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/apartments");
  const data = await response.json();
  //console.log(data)
  return {
    props: {
      data,
    },
  };
}

//create apartment api 
type apartment ={
  name: string; 
  img_file: string; 
  price:string;
  details:string; 
  id:number
}


export default function home({data}:any) {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
  
    try {
      const formData = new FormData(event.currentTarget);

      for (var [key, value] of formData.entries()) { 
        console.log(key, value);
      }
        const response = await fetch('http://localhost:3000/apartments', {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'form-data',
          'accept': 'application/json'  
        }
      })
  
      const data = await response.json()
  
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }
  
  return (
    <div>
      <div className="drop-shadow-lg py-10">
        <h1 className= {`lg:pt-3 text-2xl md:text-4xl lg:text-4xl text-blue-400 text-center `}>All Apartments</h1>
      </div>
      <div className="grid xs: grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full px-20 py-6">
          {data.apartments.map((item:any, index:number) =>{
            return(
              <ApartmentCard
                  key={index}
                  image_file={item.img_file}
                  name = {item.name}
                  price={item.price}
                  details={item.details}
                  id = {item.id}
              />
            )}
          )}
          
      </div>
      <div className="drop-shadow-lg py-10">
        <h1 className= {`lg:pt-3 text-2xl md:text-4xl lg:text-4xl text-blue-400 text-center `}>Add Apartments</h1>
      </div>
      <div className='p-5'>
        <form className='p-10 items-center' onSubmit={onSubmit} method='POST'>
          <div className='p-5 flex items-center justify-center gap-3'>
            <label>Name</label>
            <input type="text" name="name" className='border-2 border-black'/>
          </div>
          <div className='p-5 flex items-center justify-center gap-3'>
            <label>Price</label>
            <input type="text" name="price" className='border-2 border-black'/>
          </div>
          <div className='p-5 flex items-center justify-center gap-3'>
            <label>Details</label>
            <input type="text" name="details" className='border-2 border-black'/>
          </div>
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='xl:ml-5 whitespace-nowrap flex items-center justify-center
              rounded-[30px] text-[14px] w-[90px] bg-blue-500 lg:text-[16px] 
                text-white border-4 border-blue-500 hover:bg-blue-500 p-2 lg:px-5 h-[35px]
              transition delay-300 duration-150 ease-in-out hover:-translate-y-1 hover:scale-110'>
                Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 

