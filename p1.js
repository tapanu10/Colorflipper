document.getElementById('clickme').addEventListener('click',changecolor);

function changecolor(){
    const red=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const yellow =Math.floor(Math.random()*256);
    const newcolor=`rgb(${red},${green},${blue},${yellow})`

    document.body.style.backgroundColor=newcolor;
}
