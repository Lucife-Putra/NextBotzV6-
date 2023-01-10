const { spawn } = require('child_process')
const cp = require('child_process')
// const chalk = require('chalk')
const { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)


function start(cmd) {
	return spawn(cmd, [], {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
}

start('clear')

// start('screenfetch')

start('bash')

console.log('terminal ready to use!')
