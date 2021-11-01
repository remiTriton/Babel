const fs = require('fs')

let Element = Document[i].toString().replace(/\"/g,'').split(SeparatorColumn)

let Columns = Document[0]

Document.shift()

Columns = Columns.split(',')

let Json = []

for (let i = 0; i < Document.length; i++) {
    let Data = {}
    let Element = Document[i].split(SeparatorColumn)
    for (let j = 0; j < Element.length; j++) {
        let Length = (Element[j].split(SeparatorValues)).length
        if (Length > 1) {
            Data[Columns[j]] = Element[j].split(SeparatorValues)
        } else {
            Data[Columns[j]] = Element[j]
        }
    }
    Json.push(Data)
}

let SeparatorColumn
let SeparatorValues

if (Columns.includes(',') === true) {
    SeparatorColumn = ','
    SeparatorValues = ';'
} else if (Columns.includes(';') === true) {
    SeparatorColumn = ';'
    SeparatorValues = ','
}

Data = JSON.stringify(Json)
fs.writeFileSync('data.json', Data, function (err) {
    if (err) throw err
})