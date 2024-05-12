import os from 'os'

console.log(os.userInfo())
// {
//     uid: -1,
//     gid: -1,
//     username: 'Siddhesh',
//     homedir: 'C:\\Users\\Siddhesh',
//     shell: null
// }

console.log(os.totalmem())
// 16856203264

console.log(os.freemem())
// 9600245760

console.log(os.cpus())
// [
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: {
//             user: 3459812,
//             nice: 0,
//             sys: 7450140,
//             idle: 71064921,
//             irq: 422421
//         }
//     },
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: {
//             user: 1676765,
//             nice: 0,
//             sys: 1255921,
//             idle: 79042218,
//             irq: 28046
//         }
//     },
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: {
//             user: 2590484,
//             nice: 0,
//             sys: 1972031,
//             idle: 77412375,
//             irq: 41234
//         }
//     },
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: { user: 1592343, nice: 0, sys: 784750, idle: 79597812, irq: 15562 }
//     },
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: { user: 1557375, nice: 0, sys: 800390, idle: 79617109, irq: 24875 }
//     },
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: { user: 1054500, nice: 0, sys: 608671, idle: 80311734, irq: 13843 }
//     },
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: { user: 1406937, nice: 0, sys: 699078, idle: 79868859, irq: 17734 }
//     },
//     {
//         model: '11th Gen Intel(R) Core(TM) i5-11300H @ 3.10GHz',
//         speed: 3110,
//         times: { user: 1070078, nice: 0, sys: 566000, idle: 80338828, irq: 9531 }
//     }
// ]


