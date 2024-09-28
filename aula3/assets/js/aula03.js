/**
 * 
 * Prompts em JavaScript
 * 
 * let variavel = prompt ("Mensagem")
 * 
 * 
 * 
 */


let nome = prompt("Digite o nome do Colaborador:")
let cargo = prompt("Digite o cargo:")
let salario = prompt("Digite o Salário bruto:")
let valorVr = prompt("Digite o Valor do VR:")



document.getElementById("nome").innerHTML = "<b>Nome: </b>" + nome
document.getElementById("cargo").innerHTML = "<b>cargo: </b>" + cargo
document.getElementById("salario").innerHTML = "<b>salario: </b>" + salario 



let descontoVt = parseFloat(salario) * 0.06
document.getElementById("desconto-vt").innerHTML = "<b>Desconto-VT: </b>" + descontoVt


let descontoVR = parseFloat(valorVr) * 0.03
document.getElementById("desconto-vr").innerHTML = "<b>Desconto-VR: </b>" + descontoVR


let salarioLiquido = parseFloat(salario) - descontoVt - descontoVR
document.getElementById("salario-liquido").innerHTML = "<b>Salário Líquido: </b>" + salarioLiquido 
