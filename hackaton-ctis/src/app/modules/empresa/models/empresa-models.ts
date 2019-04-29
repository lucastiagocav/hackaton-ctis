import { EnderecoModels } from '../../models/endereco-models';
import { TelefoneModels } from '../../models/telefone-models';
import { StatusEnum } from '../../enum/status-enum.enum';

export class EmpresaModels{
    endereco: EnderecoModels;
    razaoSocial : string;
    nomeFantasia : string;
    email : string;
    cnpj : string;
    telefones: [TelefoneModels];
    status: StatusEnum;

    
}