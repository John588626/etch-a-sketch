let number=0;

const container = document.querySelector("#container");

function Input(){
    number=prompt("Enter the number of grids you want.");
    container.innerHTML = "";
    for(let i=0;i<number;i++){
        const row = document.createElement("div");
        row.classList.add("row");   
        for(let j=0;j<number;j++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}


const button=document.querySelector("#button");
button.addEventListener("click",()=>Input());

container.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("column")) {
        e.target.style.backgroundColor = "red";
    }
});



