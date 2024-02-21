import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Donation } from 'src/app/shared/models/models';

@Injectable({
  providedIn: 'root'
})
export class MenuDonationService {

  constructor(private fireStorage: AngularFireStorage, private fireStore: AngularFirestore) { }

  upLoadDonationImage(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      if (file) {
        const filePath = `donationImg/${file.name}`;
        const fileRef = this.fireStorage.ref(filePath);
        const uploadTask = this.fireStorage.upload(filePath, file);

        uploadTask.then(() => {
          fileRef.getDownloadURL().subscribe(url => {
            resolve(url); // Resolve the promise with the download URL
          }, error => {
            reject(error); // Reject the promise if there's an error
          });
        });
      } else {
        reject('No file provided'); // Reject if no file is provided
      }
    });
  }

  upLoadDonation(donation: Donation): Promise<void> {
    return new Promise((resolve, reject) => {
      if (donation) {
        this.fireStore.collection('donations').add(donation)
          .then(() => {
            resolve();
          })
          .catch((error) => {
            reject('Error adding donation to Firestore: ' + error);
          });
      } else {
        reject('Donation object is null or undefined.');
      }
    });
  }
}

