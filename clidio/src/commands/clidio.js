const command = {
  name: 'clidio',
  run: async (toolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  },
}

module.exports = command
