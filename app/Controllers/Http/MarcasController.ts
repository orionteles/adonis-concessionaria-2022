// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Marca from "App/Models/Marca";

export default class MarcasController {

    index(){
        return Marca.query()
                    .preload('modelos')
                    .paginate(1)
    }

    store({request}){
        const dados = request.only(['nome'])
        return Marca.create(dados)
    }

    async show({request}){
        const id = request.param('id')
        return await Marca.query().where('id', id).preload('modelos')
    }

    async update({request}){
        const id = request.param('id')
        const dados = request.only(['nome'])
        const marca = await Marca.findOrFail(id)

        marca.merge(dados)
        return marca.save()
    }

    async destroy({request}){
        const id = request.param('id')
        const marca = await Marca.findOrFail(id)

        return marca.delete()
    }

}
