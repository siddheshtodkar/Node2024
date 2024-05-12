// check for arguments, by default 2
console.log(process.argv)
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\projects\\Nodejs\\traversy2024\\processDemo'
// ]

// 'node processDemo 68'
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'C:\\projects\\Nodejs\\traversy2024\\processDemo',
//     '68'
// ]

console.log(process.env)

console.log(process.pid)
// 6444

console.log(process.cwd())
// C:\projects\Nodejs\traversy2024

console.log(process.title)
// C:\WINDOWS\System32\WindowsPowerShell\v1.0\powershell.exe

console.log(process.memoryUsage())
// {
//     rss: 21000192,
//     heapTotal: 4931584,
//     heapUsed: 4260160,
//     external: 333349,
//     arrayBuffers: 12163
// }

console.log(process.uptime())
// 0.0944895

process.on('exit', (code) => {
    console.log('exited with code', code)
    // exited with code 0
})

process.exit(0)

console.log('will not execute after exit')