import pdf from 'pdf-parse'
import fs from 'fs'

export type Words = string[][]

function removeSpace(str: string) {
  return str.replace(/\u200B/g,'')
}

const reg = /(\S*)\s*-\s*([^,.]*)/g

export async function getPdfData(path: string) {
  const pdfBuffer = fs.readFileSync(path);
  const data = await pdf(pdfBuffer)
  const text = removeSpace(data.text)
  return [...text.matchAll(reg)].map(item => [item[1], item[2]])
}



