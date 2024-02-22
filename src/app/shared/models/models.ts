export interface User {
   uid: string;
   email: string;
   displayName: string;
   photoURL: string;
   address: string;
   phoneNo: string;
   residents: number;
   isOrganisation: boolean;
   emailVerified: boolean;
}

export interface Donation {
   description: string;
   quantity: number;
   pickupDate: Date;
   photo: string;
   pickupTime: string;
   expiryDate: Date;
   instruction: string;

}