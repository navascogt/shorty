// 1. Load all the urls from redirects.yml
const YAML = require('yaml')
const fs = require('fs')
// For Windows
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirects = YAML.parse(redirectsFile)

console.log(redirects)

// 2. Generate an html page for each redirect ur; from template.jtml
const templateHTML = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')

