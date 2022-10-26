// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Modelo from "App/Models/Modelo";

export default class ModelosController {

    index(){
        return Modelo.query().preload('marca').paginate(1)
    }

    store({request}){
        const dados = request.only(['nome', 'marcaId'])
        return Modelo.create(dados)
    }

    async show({request}){
        const id = request.param('id')
        return await Modelo.findOrFail(id)
    }

    async update({request}){
        const id = request.param('id')
        const dados = request.only(['nome', 'marcaId'])
        const modelo = await Modelo.findOrFail(id)

        modelo.merge(dados)
        return modelo.save()
    }

    async destroy({request, response}){
        const id = request.param('id')
        const modelo = await Modelo.findOrFail(id)

        await modelo.delete()

        let retorno
        let status = 201
        if(modelo.$isDeleted){
            retorno = {
                type: 'success',
                message: 'Registro excluído com sucesso'
            }
        } else {
            retorno = {
                type: 'error',
                message: 'Erro'
            }
            status = 400
        }

        return response.status(status).send(retorno)
    }

}
