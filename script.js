// WRONG CODE..
{
// document.getElementById("box-1").style.backgroundColor = "red";
// let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
// console.log(r)
// console.log(g)
// console.log(b)
// let p="rgb ("+ r +","+ g +","+ b +")";
// console.log(p)
// document.getElementById("box-2").style.backgroundColor="p";
}
let r = Math.floor(Math.random() * 256); 
let g = Math.floor(Math.random() * 256); 
let b = Math.floor(Math.random() * 256); 

console.log(r); 
console.log(g); 
console.log(b); 

let p = `rgb(${r},${g},${b})`;  // Corrected the RGB format
console.log(p);

document.getElementById("container").style.backgroundColor = p;  // Use variable p, not a string


const back_Color = () => {
    let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    document.querySelectorAll(".box").forEach(element => {
        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}
// back_Color();

// const text_Color = (x,y,z)=>{
//     let col=`rgb(${x}, ${y}, ${z})`
// }
// back_Color(r,g,b);
// document.getElementById("box-2").style.backgroundColor=back_Color(r,g,b);

// document.getElementById("box-2").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

let boxes = document.getElementsByClassName("box");
console.log(boxes)

//BACKGROUND_COLOR
for (let index = 0; index < boxes.length; index++) {
    const element = boxes[index];
    let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
//COLOR
for (let index = 0; index < boxes.length; index++) {
    const element = boxes[index];
    let r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    element.style.color = `rgb(${r}, ${g}, ${b})`;

}