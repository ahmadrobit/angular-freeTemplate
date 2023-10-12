import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service

@Injectable({
  providedIn: 'root'
})
export class UsersDataProService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/usersDataPro`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter des informations professionnelles pour un utilisateur
  createUsersDataPro(userDataPro: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, userDataPro);
  }

  // Récupérer toutes les informations professionnelles des utilisateurs
  getAllUsersDataPro(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer des informations professionnelles spécifiques pour un utilisateur
  getUsersDataProById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour des informations professionnelles pour un utilisateur
  updateUsersDataPro(id: string, updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update/${id}`, updatedData);
  }

  // Supprimer des informations professionnelles pour un utilisateur
  deleteUsersDataPro(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`);
  }
}
