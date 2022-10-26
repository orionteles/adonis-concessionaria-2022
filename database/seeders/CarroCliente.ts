import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CarroCliente from 'App/Models/CarroCliente'

export default class extends BaseSeeder {
  public async run () {
    
    await CarroCliente.createMany([
      {carroId: 1, clienteId: 1},
      {carroId: 2, clienteId: 2},
      {carroId: 3, clienteId: 3},
      {carroId: 4, clienteId: 4},
      {carroId: 5, clienteId: 5},
      {carroId: 1, clienteId: 5},
      {carroId: 2, clienteId: 5},
    ])

  }
}
