// return masked string

//4556364607935616" --> "############5616"
//     "64607935616" -->      "#######5616"
//               "1" -->                "1"
//                "" -->                 ""

function maskify(cc) {
return cc.slice(-4).padStart(cc.length,'#')
}
