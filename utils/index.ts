import pdf from 'pdf-parse'
import fs from 'fs'

export type Words = {c: string, e: string, key: number}[]

function removeSpace(str: string) {
  return str.replace(/\u200B/g,'')
}

const reg = /(\S*)\s*-\s*([^,.]*)/g

export async function getPdfData(path: string) {
  const pdfBuffer = fs.readFileSync(path);
  const data = await pdf(pdfBuffer)
  const text = removeSpace(data.text)
  return [...text.matchAll(reg)].map((item,index) => ({c: item[2], e: item[1], key: item[1] + '-' + item[2]}))
}



