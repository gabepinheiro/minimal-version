const { ESLint } = require('eslint')

const removeIgnoredFiles = async files => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map(file => {
      return eslint.isPathIgnored(file)
    }),
  )
  const filteredFiles = files.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn type-check',

  // Lint then format TypeScript and JavaScript files
  '**/*.{ts,tsx}': async files => {
    const filesToLint = await removeIgnoredFiles(files)
    return [
      `yarn eslint src --fix --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ${filesToLint}`,
      `yarn prettier --write ${filesToLint}`,
    ]
  },
}
