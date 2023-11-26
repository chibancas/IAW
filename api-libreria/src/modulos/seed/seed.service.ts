import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { AutoresService } from '../autores/autores.service';
import { Autore } from '../autores/entities/autore.entity';
import { CreateAutoreDto } from '../autores/dto/create-autore.dto';
import * as autoresIniciales from '../seed/data/authors.json'
import * as clientesIniciales from '../seed/data/clientes.json'
import { ClientesService } from '../clientes/clientes.service';
import { CreateClienteDto } from '../clientes/dto/create-cliente.dto';
import { Cliente } from '../clientes/entities/cliente.entity';
@Injectable()
export class SeedService {

  constructor(
    private readonly autoresService: AutoresService,
    private readonly clientesService: ClientesService){ }

  public cargardatos(){
    this.insertNewAutores();
    this.insertNewClientes();
    return {
      msg: 'Carga de datos masiva finalizada, los autores y clientes anteriores se han borrado'
    }
  }


  private async insertNewAutores(){
    await this.autoresService.deleteAllAutores();
    const insertPromisesAutores = [];
    const seedAutores = autoresIniciales
    seedAutores.forEach(async (autor: CreateAutoreDto) => {
    insertPromisesAutores.push(this.autoresService.create(autor));
  });
  const results = await Promise.all(insertPromisesAutores);
  return {
    msg: 'autores borrados, insertados autores del json',
    status: 200
  }
  }

  private async insertNewClientes(){
    await this.clientesService.deleteAllClientes();
    const insertPromisesClientes = [];
    const seedClientes = clientesIniciales
    seedClientes.forEach(async (cliente:CreateClienteDto) => {
    insertPromisesClientes.push(this.clientesService.create(cliente));
  });
  const results = await Promise.all(insertPromisesClientes);
  return {
    msg: 'clientes borrados, insertados clientes del json',
    status: 200
  }
  }


  // create(createSeedDto: CreateSeedDto) {
  //   return 'This action adds a new seed';
  // }

  // findAll() {
  //   return `This action returns all seed`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} seed`;
  // }

  // update(id: number, updateSeedDto: UpdateSeedDto) {
  //   return `This action updates a #${id} seed`;
  // }

  
}