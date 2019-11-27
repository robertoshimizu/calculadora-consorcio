document.getElementById('amount').addEventListener('blur',validateAmount);
document.getElementById('term').addEventListener('blur',validateTerm);

document.getElementById("list").addEventListener("click",pickInterest);


// Listen for submit
document.getElementById('consorcio-form').addEventListener('submit',calculateResults);


// functions to validate inputs


function validateAmount(){
    const amount = document.getElementById('amount');
    const re = /\d+/;
    if(!re.test(amount.value)){
        amount.classList.add('is-invalid');
    } else {
        amount.classList.remove('is-invalid');
    };
};

function validateTerm(){
    const term = document.getElementById('term');
    const re = /\d+/;
    if(!re.test(term.value)){
        term.classList.add('is-invalid');
    } else {
        term.classList.remove('is-invalid');
    };
};

function pickInterest(){
    //console.log(document.getElementById("list").value);
};


// function to calculate results

function calculateResults(e){
    //console.log('Calculando com a Caloi')

    // Grab Variables
    const amount = document.getElementById('amount');
    const term = document.getElementById('term');
    const interest = document.getElementById("list");

    let total = amount.value*1.00;
    let html=`<tr>
                <th scope="row">1</th>
                <td>R$ ${total.toLocaleString('pt-BR',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                <td>R$ ${(total/term.value).toLocaleString('pt-BR',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>`;
    

    for(let i = 2; i <= term.value;i++){
        total = total * (1 + (interest.value/100));
        html += `<tr>
                    <th scope="row">${i}</th>
                    <td>R$ ${total.toLocaleString('pt-BR',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td>R$ ${(total/term.value).toLocaleString('pt-BR',{ minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                </tr>`;
    };

    // Insert data in UI

    document.querySelector('#item-list').innerHTML = html;

    e.preventDefault();
}

document.getElementById('limpar').addEventListener('click',limparTela);

function limparTela(){
    location.reload();
};

// let re;
// re = /hello/i;  // i = case insensitive



// exec() returns the position of array that matches the world evaluated
// const result = re.exec('hello world');
// console.log(result);

// test() returns true or false if there is a match
// const resulted = re.test('Hello world');
// console.log(resulted);

// match() returns result array or null
// const str = 'Hell There';
// const resulta = str.match(re);
// console.log(resulta);

// declare regex variable
// let re;

// Define Regex
// Literal Characters
// re = /sd2e/;

// Metacharacters Symbols
// re = /^h/i; // must start with
// re = /d$/i; // must end with
// re = /world$/i; // must end with
// re = /[0-9]/; // [] Character Sets
// re = /Hel{2,}/; // {} Quantifiers must occur at least {m} times
// re = /([0-9]x){3,3}$/; // () Grouping

// Shorthand Character Classes
// re = /\w/; // word character - alphanumeric or _
// re = /\d+/;


// String to match
// const str = 'ase';

// Log results

// const result = re.exec(str);
// console.log(result);

// function reTest(re, str){
//     if(re.test(str)){
//         console.log(`${str} matches ${re.source}`);
//     } else {
//         console.log(`${str} does NOT match ${re.source}`);
//     }

// }

// reTest(re,str);