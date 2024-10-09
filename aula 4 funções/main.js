/*      FUNÇÕES 

é um trecho de codigo que só é executado somente quando é chamado

FUNÇÃO VOID: quando não existe um retorno ex:*/

function nomee(){
    const meunome = 'thiago'
    console.log(meunome)
}

/*FUNCÃO COM PARÂMETROS:*/

function soma (n1, n2){
    const res = n1 + n2
    console.log(res)
}

soma(2,6)


/*FUNÇÃO RETURN: retorna o resultado para o parametro*/

function menos (nu1, nu2){
    const res = nu1 - nu2
    return res
}
console.log(menos(5, 1))

/*ARROW FUNCTION: é uma forma mais moderna de representar uma função*/

const digameunome = () => {
    console.log('Thiago')
}
digameunome()