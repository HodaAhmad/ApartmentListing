import { Request, Response } from 'express';
import { Apartment, ApartmentList } from './types';
import fs from 'fs/promises';

const dataPath = 'data/apartments.json';


// logic to fetch apartments from the database
export const getApartments = async (req: Request, res: Response) => {
    try {
        const data = await fs.readFile(dataPath, {
          encoding: 'utf8',
        });
        res.status(200).send(JSON.parse(data)); 
      } catch (error) {
        res.status(500).send('An error occurred when fetching the users');
      }
};

// logic to fetch apartment details
export const getApartment = async (req: Request, res: Response) => {
    try {
        let apartment = {};
        const aptId = req.params.id;
        const data = await fs.readFile(dataPath, {
          encoding: 'utf8',
        });
    
        if (data.length > 0) {
          const allApartments: ApartmentList = JSON.parse(data);
          apartment = {
            ...allApartments.apartments.find((apartment) => apartment.id === Number(aptId)),
          };
        }
    
        res.status(200).send(JSON.stringify(apartment))
      } catch (error) {
        res
          .status(500)
          .send(
            'An error occurred when fetching the apartment with id ' + req.params.id
          );
      }
};
  
// logic to create a new listing

export const createListing = async (req: Request, res: Response) => {
    try {
        const data = await fs.readFile(dataPath, {
          encoding: 'utf8',
        });
        
        const allApartments: ApartmentList = JSON.parse(data);
        const newApartment: Apartment = req.body;
        
        //to make a unique id 
        //to make a unique id 
        const newUserId = Date.now();

        //newApartment.id = newUserId;
        console.log("new"+JSON.stringify(req.body))
        
        allApartments.apartments.push(newApartment);
    
        await fs.writeFile(dataPath, JSON.stringify(allApartments, null, 2), {
          encoding: 'utf8',
        });
                
        res.status(200).send(newApartment);
      } catch (error) {
        res.status(500).send('An error occurred when adding the new apartment listing');
      }
};

export default {
    getApartments,
    createListing,
    getApartment,
  };