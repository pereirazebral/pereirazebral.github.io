const toastLive = document.getElementById('liveToast')
const toast = new bootstrap.Toast(toastLive)
// 

//somente números
function onlyNumber(value ){
     return value.replace(/[^\d]/g, '')
}

//permite numeros,ponto,traço e barra invertida
function onlyCPFOrCNPJ(value ){
    return value.replace(/[^\d\-\.\/]/g, '')
}

function getValueSelector (selector){
    return document.querySelector(`#${selector}`).value
}

function getSelectorAll (selector){
    return document.querySelectorAll(`${selector}`)
}


function getSelector (selector){
    return document.querySelector(`${selector}`)
}

function setValueSelector(selector, value) {
    return document.querySelector(`#${selector}`).value = value
}

function onkeyupCPFOrCNPJ (selector){
    let value = getValueSelector(selector)
    value = onlyCPFOrCNPJ(value)
    setValueSelector(selector, value)
}

function toastShow(message) {
    let toastBody = document.querySelector('#toast-body')
    toastBody.innerHTML = message
    toast.show()
}

function searchCPForCNPH(selector1 , selector2){
    let value1 = getValueSelector(selector1)
    value1 = onlyNumber(value1)
    let value2 = getValueSelector(selector2)
    if(value1.length === 11){
        if(value1 === '66180634009'){
            value2 = 'Bootstrap Da Silva Santos'
        }else{
            toastShow('Nenhuma pessoa encontrada para este CPF.')
        }
    }else if(value1.length === 14){
        if(value1 === '39935349000150'){
            value2 = 'Bootstrap Company LTDA.'    
        }else{
            toastShow('Nenhuma empresa encontrada para este CNPJ.')
        }
    }else {
        toastShow('Dígite um CPF/CNPJ válido.')
    }

    setValueSelector(selector2, value2)
}

function onkeyupDate(selector){
    let value = getValueSelector(selector)
    value = setMaskDate(value)
    setValueSelector(selector, value)
}

//date
function setMaskDate(value){
    if(value.length === 2){
        value = value+"/"
    }else if(value.length === 5){
        value = value+"/"
    }
    return value
}

//mask date
function setMaskDate(value){
    if(value.length === 2){
        value = value+"/"
    }else if(value.length === 5){
        value = value+"/"
    }
    return value
}

//time
function onkeyupTime(selector){
    let value = getValueSelector(selector)
    value = setMaskTime(value)
    setValueSelector(selector, value)
}

//mask time
function setMaskTime(value){
    if(value.length === 2){
        value = value+":"
    }
    return value
}

function onchangeSeguro(selector){
    let value = getValueSelector(selector)
    let selectorStep02 = Array.from(getSelectorAll('.step-02-comunicacao-protocolo-sinistro'))
    selectorStep02.map((item) => {
        if(value >= 1){
            setAddCssClass(item, 'active')
        }else{
            setRemoveCssClass(item, 'active')
        }    
    })
    
}

function onClickCardInsurance(value){
    
    let cardActive = getSelector(`.card.active`)
    cardActive && setRemoveCssClass(cardActive, 'active')

    let card = getSelector(`.card-insurance-${value}`)
    card && setAddCssClass(card, 'active')
    
    let selectorStep02 = Array.from(getSelectorAll('.step-02-comunicacao-protocolo-sinistro'))
    selectorStep02.map((item) => {
        if(value >= 1){
            setAddCssClass(item, 'active')
        }else{
            setRemoveCssClass(item, 'active')
        }    
    })
} 
 
function setAddCssClass(selector,CssClass){
    selector.classList.add(CssClass);
}

function setRemoveCssClass(selector,CssClass){
    selector.classList.remove(CssClass);
}

function onclickSearch(){
    let value1 = getValueSelector('estipulante-subestipulante-cpf-cnpj')
    let value2 = getValueSelector('segurado-sinistrado-cpf-cnpj')
    let selectorStep03 = Array.from(getSelectorAll('.step-03-comunicacao-protocolo-sinistro'))
    selectorStep03.map((item) => {
        if(value1 === "" && value2 === ""){
            setRemoveCssClass(item, 'active')
            toastShow('Dígite um CPF/CNPJ válido para fazer a pesquisa.')
        }else{
            setAddCssClass(item, 'active')
        }    
    })
}