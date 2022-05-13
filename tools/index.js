const fs = require('fs')
const path = require('path')
const rootPath = path.resolve(__dirname, '../../XG_Blog')
const sourcePath = path.resolve(__dirname, '../dist')


function delDir(filePath) {
  const files = fs.readdirSync(filePath)
  if (!files.length) fs.rmdirSync(filePath)
  files.forEach(function(filename, i) {
    const filedir = path.join(filePath, filename);
    const stats = fs.statSync(filedir)
    const isFile = stats.isFile()
    const isDir = stats.isDirectory()
    if (isFile) {
      fs.unlinkSync(filedir)
      if (i == files.length - 1 && filePath != rootPath) {
        fs.rmdirSync(filePath)
      }
    }
    if (isDir) {
      delDir(filedir)
    }
  })
}

function moveDir(filePath) {
  const files = fs.readdirSync(filePath)
  files.forEach(function(filename) {
    const filedir = path.join(filePath, filename);
    const stats = fs.statSync(filedir)
    const isFile = stats.isFile()
    const isDir = stats.isDirectory()
    let destPath = filedir.replace(sourcePath, rootPath)
    if (isFile) {
      const readStream = fs.createReadStream(filedir)
      const wirteStrea = fs.createWriteStream(destPath)
      readStream.pipe(wirteStrea)
    }
    if (isDir) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath)
      moveDir(filedir)
    }
  })

}

delDir(rootPath)
moveDir(sourcePath)