


function Calcul(){
    let Textarea = document.getElementById("textarea");
    let SplittedText = Textarea.value.split("");
    let arrayLength = SplittedText.length;
    let problem;
    
    
    for (let i = 0; i < arrayLength; i++) {
        if(isFinite(SplittedText[i]) == false){
            console.log("thats not a number!")
            
        }else{
            
            problem = eval(Textarea.value)
            
          

        }
    }
    if(problem == undefined||problem == Infinity){
        problem = "Error!";
    }
    Textarea.value = problem;
    
};

function Plus(){
    document.getElementById("textarea").value +="+"
};
function Minus(){
    document.getElementById("textarea").value +="-"
}
function Times(){
    document.getElementById("textarea").value +="*"
};
function Devide(){
    document.getElementById("textarea").value +="/"
};
function Back(){
    
    document.getElementById("textarea").value = document.getElementById("textarea").value.substring(0, document.getElementById("textarea").value.length - 1);
};
function AllBack(){
    
    document.getElementById("textarea").value = ""
};

function One(){
    document.getElementById("textarea").value +="1"
};
function Two(){
    document.getElementById("textarea").value +="2"
};
function Three(){
    document.getElementById("textarea").value +="3"
};
function Four(){
    document.getElementById("textarea").value +="4"
};
function Five(){
    document.getElementById("textarea").value +="5"
};
function Six(){
    document.getElementById("textarea").value +="6"
};
function Seven(){
    document.getElementById("textarea").value +="7"
};
function Eight(){
    document.getElementById("textarea").value +="8"
};
function Nine(){
    document.getElementById("textarea").value +="9"
};
