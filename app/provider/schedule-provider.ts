import { EventEmitter, Injectable } from '@angular/core';
import { Storage, LocalStorage } from 'ionic-angular';


@Injectable()
export class ScheduleProvider {

    Obj: any;
    
    constructor() {
      var objJson = '{ "schedule" : [' +
        '{ "title":"Credenciamento e Welcome Coffee" , "lastHour":"9:00", "firstHour":"8:00" },' +
        '{ "title":"Boas-vindas" , "lastHour":"9:30", "firstHour":"9:00" },' +
        '{ "title":"Cloud open source utilizando OpenStack" , "lastHour":"10:20", "firstHour":"9:40" },' +
        '{ "title":"Liderança técnica efetiva" , "lastHour":"11:10", "firstHour":"10:30" },' +
        '{ "title":"Gestão de produtos: como aumentar as chances de sucesso do seu software" , "lastHour":"12:00", "firstHour":"11:20" },' +
        '{ "title":"Almoço" , "lastHour":"13:30", "firstHour":"12:00" },' +
        '{ "title":"Dicas de produtividade com Domain Driven Design (Case em Microsoft.NET Framework)" , "lastHour":"14:20", "firstHour":"13:40" },' +
        '{ "title":"Introdução ao UX - Uma visão geral" , "lastHour":"15:10", "firstHour":"14:30" },' +
        '{ "title":"Panorama do Desenvolvimento de Jogos no Brasil" , "lastHour":"16:00", "firstHour":"15:20" },' +
        '{ "title":"Coffee Break" , "lastHour":"16:30", "firstHour":"16:00" },' +
        '{ "title":"Desenvolvimento Mobile: Híbrido vs Nativo" , "lastHour":"15:10", "firstHour":"16:30" },' +
        '{ "title":" A nuvem: Sem raios nem trovões" , "lastHour":"18:00", "firstHour":"17:20" },' +
        '{ "title":"Encerramento / Networking" , "lastHour":"", "firstHour":"18:00" }]}';

         this.Obj = JSON.parse(objJson);

    }

}


