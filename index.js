// 1. Load all the urls from redirects.yml
const YAML = require('yaml')
const fs = require('fs')
// For Windows
const path = require('path')

const redirectsFile = fs.readFileSync(path.join(__dirname, 'redirects.yml'), 'utf-8')
const redirect = YAML.parse(redirectsFile)

console.log(redirectsFile)

// 2. Generate an html page for each redirect ur; from template.jtml