// Ex 1:

function doX(): void{
    const element = document.querySelector(".foo") as HTMLInputElement;
    console.log(element.value)
}

// Ex 2:

const element = document.querySelector(".foo");
element?.addEventListener('input',(event) =>{
    const target = event.target as HTMLInputElement;
    console.log(target.value)
})

// const domElement = document.querySelector('.foo') as HTMLInputElement;

//     domElement.addEventListener('input', function(event) {
//         const e = event.target as HTMLInputElement;
//         console.log(e.value);
//     });

// const someElement = document.querySelector(".foo");

// someElement?.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event", target.value); // WORKS
// });