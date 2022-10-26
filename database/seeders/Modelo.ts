import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Modelo from 'App/Models/Modelo'

export default class extends BaseSeeder {
  public async run () {
    
    await Modelo.createMany([
      {nome: '147', marcaId: 2},
      {nome: 'Pálio', marcaId: 2},
      {nome: 'Uno', marcaId: 2},

      {nome: 'Gol', marcaId: 1},
      {nome: 'Virtus', marcaId: 1},

      {nome: 'Astra', marcaId: 3},
      
      {nome: 'Ka', marcaId: 6},
      {nome: 'Focus', marcaId: 6},
      {nome: 'Fiesta', marcaId: 6},
      {nome: 'Fusion', marcaId: 6},
    ])

  }
}
