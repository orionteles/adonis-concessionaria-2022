import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Carro from 'App/Models/Carro'

export default class extends BaseSeeder {
  public async run () {
    
    await Carro.createMany([
      {potencia: '150', ano: 2018, placa: 'ABC 1E34', cor: 'branco', modeloId: 2},
      {potencia: '220', ano: 1983, placa: 'EEE 1E34', cor: 'preto', modeloId: 1},
      {potencia: '66', ano: 2000, placa: 'AAA 1E34', cor: 'vermelho', modeloId: 7},
      {potencia: '100', ano: 2020, placa: 'BBB 1E34', cor: 'azul', modeloId: 8},
      {potencia: '120', ano: 2022, placa: 'CCC 1E34', cor: 'prata', modeloId: 9},
    ])

  }
}
