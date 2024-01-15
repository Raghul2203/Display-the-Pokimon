const show = async () => {
    let input = document.getElementById('input').value.toLowerCase();
    let displayimg = document.getElementById('displayimg');
    
    try{
        const fetching = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data = await fetching.json();
        if(!data.is_default){
            throw new Error("Enter the valid pokimon name")
        }
        displayimg.src = data.sprites.front_default;
        displayimg.style.display = "block";
    }
    catch(error){
        alert(error)
    }
}
//guess the number
//increase and decrease the number
//get two number and display with addition
//check property 
//guess the number with only js 
//temperatur conversion
//Roll the dice 
//digital clock
//stopwatch
//calculator
//stone paper scissor
//fetching the data and displaying the img from the pokiapi


