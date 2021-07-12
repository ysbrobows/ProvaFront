import { Usuario } from './models/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  BaseUrl = "https://localhost:44380/";

  constructor(private http: HttpClient) { 
  }
  getAll()
  {
      return this.http.get<any[]>(`${this.BaseUrl}` + 'api/usuario/GetUsuarios');
  }
  criar(usuario : Usuario)
  {
      return this.http.post<any[]>(`${this.BaseUrl}` + 'api/usuario/post' , usuario);
  }
  editar(usuario : any)
  {
      return this.http.post<any[]>(`${this.BaseUrl}` + 'api/usuario/update' , usuario);
  }
  excluir(usuario : any)
  {
      return this.http.post<any[]>(`${this.BaseUrl}`  + 'api/usuario/delete', usuario);
  }
}
