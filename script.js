const num=document.getElementsByClassName('ball');
document.onmousemove=(a)=>{
    const x=(a.clientX*100)/window.innerWidth+'%';
    const y=(a.clientY*100)/window.innerHeight+'%';
    for(i=0;i<100;i++)
    {    num[i].style.left=x;
        num[i].style.top=y;
        num[i].transform='translate(-'+x+',-'+y+')';
}};