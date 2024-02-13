export interface Apartment {
    name: string;
    price: string;
    details: string;
    id: number;
  }
  
  export interface ApartmentList {
    apartments: Apartment[];
  }