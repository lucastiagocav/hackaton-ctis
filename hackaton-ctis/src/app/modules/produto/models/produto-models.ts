import { StatusEnum } from '../../enum/status-enum.enum';

export class ProdutoModels {
    id : number;
    nome : string;
    preco: number;
    dataDeCriacao: number;
    categorias : string[];
    status: StatusEnum;

}