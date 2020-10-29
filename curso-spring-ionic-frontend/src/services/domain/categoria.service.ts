import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";
import { CategoriaDTO } from "../../models/categoria.dto";

type NewType = CategoriaDTO;

@Injectable()
export class CategoriaService {
    constructor(public http: HttpClient) {
    }

    findAll(): Observable<NewType[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}
