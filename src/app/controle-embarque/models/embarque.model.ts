import { Usuario } from 'src/app/funcionarios/models/usuario.model';
import { Plataforma } from './plataforma.model';

export interface Embarque {
	id: string;
	plataforma: Plataforma;
	funcionario: Usuario;
	dataInicio: Date;
	dataTermino: Date;
}
