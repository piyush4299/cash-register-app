const getDOMElements = () => {
    return {
        billAmtInput: document.querySelector(".billAmt"),
        cashGivenInput: document.querySelector(".cashGiven"),
        oneNote: document.querySelector(".oneNote"),
        fiveNote: document.querySelector(".fiveNote"),
        tenNote: document.querySelector(".tenNote"),
        twentyNote: document.querySelector(".twentyNote"),
        hundredNote: document.querySelector(".hundredNote"),
        fivehundredNote: document.querySelector(".fivehundredNote"),
        twothousandNote: document.querySelector(".twothousandNote")
    }
}

const evaluateCashReturn = () => {
    
    const notesAvailable = [2000,500,100,20,10,5,1];

    const notesClassMap = {
        2000: getDOMElements().twothousandNote,
        500: getDOMElements().fivehundredNote,
        100: getDOMElements().hundredNote,
        20: getDOMElements().twentyNote,
        10: getDOMElements().tenNote,
        5: getDOMElements().fiveNote,
        1: getDOMElements().oneNote
    }
    
    const billAmt = parseInt(getDOMElements().billAmtInput.value);
    const cashGiven = parseInt(getDOMElements().cashGivenInput.value);

    if(billAmt && cashGiven){ 
        let balance = cashGiven - billAmt;

        if(balance > 0){
            notesAvailable.map((note) => {
                if(balance !== 0){
                    noteMultiple = Math.floor(balance/note);
                    notesClassMap[note].innerHTML = noteMultiple.toString();
                    balance -= note*noteMultiple;
                }
                else{
                    notesClassMap[note].innerHTML = "0";
                }
            });
        }
        else{
            notesAvailable.map((note) => {
                notesClassMap[note].innerHTML = "0";
            });
        }   
    }
    else{
        alert("give input properly");
    } 
}

