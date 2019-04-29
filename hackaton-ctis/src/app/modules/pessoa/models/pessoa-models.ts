import { EnderecoModels } from '../../models/endereco-models';
import { TelefoneModels } from '../../models/telefone-models';
import { StatusEnum } from '../../enum/status-enum.enum';

export class PessoaModels {
    //Pessoa
    id: number;
    endereco:EnderecoModels;
    nome: string;
    sobrenome: string;
    email: string;
    cpf: string;
    telefones:[TelefoneModels];
    status: StatusEnum;

}