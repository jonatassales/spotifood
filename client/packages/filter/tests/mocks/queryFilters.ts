import { GET_FILTERS } from '../../src/Filters'

export default {
  request: {
    query: GET_FILTERS
  },
  result: {
    "data":{
      "filters":[
        {
          "id":"locale",
          "name":"Locale",
          "values":[
            {
              "value":"en_AU",
              "name":"en_AU",
              "__typename":"FilterValue"
            },
            {
              "value":"de_DE",
              "name":"de_DE ",
              "__typename":"FilterValue"
            },
            {
              "value":"pt_BR",
              "name":"pt_BR",
              "__typename":"FilterValue"
            },
            {
              "value":"fr_FR",
              "name":"fr_FR",
              "__typename":"FilterValue"
            },
            {
              "value":"en_US",
              "name":"en_US",
              "__typename":"FilterValue"
            },
            {
              "value":"es_AR",
              "name":"es_AR",
              "__typename":"FilterValue"
            }
          ],
          "validation":null,
          "__typename":"Filter"
        },
        {
          "id":"country",
          "name":"País",
          "values":[
            {
              "value":"AU",
              "name":"Australia",
              "__typename":"FilterValue"
            },
            {
              "value":"DE",
              "name":"Alemanhã",
              "__typename":"FilterValue"
            },
            {
              "value":"BR",
              "name":"Brasil",
              "__typename":"FilterValue"
            },
            {
              "value":"PT",
              "name":"Portugal",
              "__typename":"FilterValue"
            },
            {
              "value":"en_US",
              "name":"EUA",
              "__typename":"FilterValue"
            },
            {
              "value":"RU",
              "name":"Rússia",
              "__typename":"FilterValue"
            }
          ],
          "validation":null,
          "__typename":"Filter"
        },
        {
          "id":"limit",
          "name":"Quantidade",
          "values":null,
          "validation":{
            "primitiveType":"INTEGER",
            "entityType":null,
            "pattern":null,
            "min":1,
            "max":50,
            "__typename":"Validation"
          },
          "__typename":"Filter"
        },
        {
          "id":"offset",
          "name":"Página",
          "values":null,
          "validation":{
            "primitiveType":"INTEGER",
            "entityType":null,
            "pattern":null,
            "min":null,
            "max":null,
            "__typename":"Validation"
          },
          "__typename":"Filter"
        }
      ]
    }
  }
}
