import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    
    await Cliente.createMany([
      {nome: 'Joãozinho', cpf: '123456789', telefone: '(61) 99999-4321'},
      {nome: 'Maria', cpf: '6547987', telefone: '(61) 98888-4321'},
      {nome: 'Orion', cpf: '222222', telefone: '(61) 98777-4321'},
      {nome: 'Chica', cpf: '555555555', telefone: '(61) 98766-4321'},
      {nome: 'Ana', cpf: '3333333333', telefone: '(61) 98765-4321'},
    ])

  }
}
