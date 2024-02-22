import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, map, from } from 'rxjs';
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

  async upLoadDonation(donation: Donation, docId: any): Promise<void> {
    if (!donation) {
      throw new Error('Donation object is null or undefined.');
    }

    try {
      await this.fireStore.collection('users').doc(docId).collection('donations').add(donation);
    } catch (error) {
      throw new Error('Error adding donation to Firestore: ' + error);
    }
  }

  getDonationsByUser(docId: any): Observable<any[]> {
    return from(
      this.fireStore.collection("users").doc(docId).collection("donations").get()
    ).pipe(
      map(snapshot => {
        const donations: any[] = [];
        snapshot.forEach(doc => {
          donations.push({ id: doc.id, ...doc.data() });
        });
        return donations;
      })
    );
  }
}
