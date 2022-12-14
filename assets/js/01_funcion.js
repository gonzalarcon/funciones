
agregarBordes = (elementID, color) => {

const element=document.querySelector('#'+ elementID, 'blue');
element.style.border="solid 2px red";



    if(element.style.border == 'solid 2px red') {
        element.style.border = '0px'
    } else {
        element.style.border='solid 2px red'
    }

}

