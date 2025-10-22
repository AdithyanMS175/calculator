const result = document.getElementById("result")

function displayContent(content){
    result.value += content
    
    
    
}

function clearCalcDisp() {
    result.value = ""
}


function deletelast(){
    result.value =result.value.slice(0,-1);
}


function calc(){
    try{
        const expression = result.value.replace(/x/g, '*').replace(/÷/g, '/');
        result.value = eval(expression);
    }catch(error){
        console.log(error);
        result.value = "Error"
        
    }
    
}