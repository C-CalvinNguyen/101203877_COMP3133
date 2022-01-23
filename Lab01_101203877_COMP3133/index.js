const fs = require('fs') // fs module
const path = require('path') // path module (for file seperator)
const csv = require('csv-parser') // csv-parser module

let csvPath = `${__dirname}${path.sep}input_countries.csv`
let canadaPath = `${__dirname}${path.sep}canada.txt`
let usaPath = `${__dirname}${path.sep}usa.txt`

// Delete canada.txt & usa.txt if it exists
fs.unlink(canadaPath, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("Deleted file canada.txt")
    }
})
fs.unlink(usaPath, (err) => {
    if (err) {
        console.error(err)
    }
    else {
        console.log("Deleted file usa.txt")
    }
})

// Functions to Read CSV file & Write Text File
function readFilterData(textPath, csvPath, country) {
    let textArray = []
    textArray.push(['country', 'year', 'population'])

    fs.createReadStream(csvPath)
    .pipe(csv())
    .on('data', (row) => {
        const column =   Object.keys(row)
        if (row[column[0]] === country) {
            textArray.push([row.country, row.year, row.population])
        }
    })
    .on('end', () => {
        console.log(`CSV read, writing to ${textPath}`)
        console.log(textArray)
        writeFilterData(textPath, textArray)
    })
}

function writeFilterData(textPath, textArray) {
    var writeStream = fs.createWriteStream(textPath)
    writeStream.on('error', (err) => console.log(err))
    for (let row of textArray) {
        writeStream.write(`${row[0]}, ${row[1]}, ${row[2]}\n`)
    }
    writeStream.end(console.log('text file written'))
}

// Filter data of Canada & write data to canada.txt
readFilterData(canadaPath, csvPath, 'Canada')

// Filter data of USA & write data to usa.txt
readFilterData(usaPath, csvPath, 'United States')