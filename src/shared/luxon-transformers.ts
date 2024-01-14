import { DateTime } from "luxon";
import { ValueTransformer } from "typeorm";

export const LuxonDateTransformer: ValueTransformer = {
    to: (valor: DateTime) => {
        return valor.toFormat('yyyy-MM-dd')
    },
    from: (valor: string) => {
        DateTime.fromFormat(valor, 'yyyy-MM-dd')
    }
}

export const LuxonDateTimeTransformer: ValueTransformer = {
    to: (valor: DateTime) => {
        return valor.toFormat('yyyy-MM-dd hh:mm:ss')
    },
    from: (valor: string) => {
        console.log('from', valor)
        return DateTime.fromISO(valor)
    }
}