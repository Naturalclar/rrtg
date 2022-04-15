function generateRandomText (n) {
  const length = Number(n)
  if (!length) {
    console.error('Expected a number, received:',n)
    process.exit(1)
  }
  if (length < 1) {
    console.error('Expected a number greater than 0, received:',n)
    process.exit(1)
  }

  return [...Array(Number(n))].reduce((memo)=>`${memo}あ`,'')
}

function main (argv) {
  if (argv.length < 3) {
    process.exit(1)
  }

  const length = argv[2]

  console.log(generateRandomText(length))
  process.exit(0)
}

module.exports = main