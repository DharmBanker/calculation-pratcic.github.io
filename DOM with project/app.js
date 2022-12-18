
// claculation pratic for students

let submitbutton = document.getElementById('SubmitAns')

let value1 = Math.floor(Math.random()*100);
document.getElementById('num1').value = value1;
// console.log(value1)

let value2 = Math.floor(Math.random()*100);
document.getElementById('num2').value = value2;
// console.log(value2)


let ComputerCalculate1 = value1;
let ComputerCalculate2 = value2;

// let computerAns = console.log('Computer ans is ',value1+value2)
// console.log(computerAns)





// submit answer working proces 

function SubmitAns()
{
    let computerAns = console.log('Computer ans is ',ComputerCalculate1+ComputerCalculate2)

    let humanAnswer = document.getElementById('sum').value;
    console.log('Human answer is ',humanAnswer);
        if (computerAns == humanAnswer)
    {
       console.log('Correct')
    }
        else if(computerAns != humanAnswer)
    {
        console.log('Incorrect')
    }
    else
    {
        console.log('correct')
    }
     document.getElementById('sum').value = '';

}

submitbutton.addEventListener("click",SubmitAns)











