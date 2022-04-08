parentdiv=document.getElementById("parent")
output=document.createElement("p")
output.classList.add("mt-4")
parentdiv.appendChild(output)
parentdiv.classList.add("col-sm-12","col-md-12","col-lg-12","col-xl-12","text-center")
image=document.createElement("img")
parentdiv.appendChild(image)

widlabel=document.createElement("label")
widlabel.innerHTML=`Image Width:`
widlabel.classList.add("fs-4")
output.appendChild(widlabel)
width=document.createElement("input")
width.setAttribute("type","number")
width.setAttribute("oninput","displayimage()")
width.setAttribute("placeholder","Enter the width")
output.appendChild(width)
br=document.createElement("br")
output.appendChild(br)
br=document.createElement("br")
output.appendChild(br)

hilabel=document.createElement("label")
hilabel.innerText="Image Height:"
hilabel.classList.add("fs-4")
output.appendChild(hilabel)
height=document.createElement("input")
height.setAttribute("type","number")
height.setAttribute("oninput","displayimage()")
height.setAttribute("placeholder","Enter the height")
output.appendChild(height)


// button=document.createElement("button")
// button.innerText="Submit"
// output.appendChild(button)
// button.addEventListener("click",function()
// {
 function displayimage()
 {   
x=width.value;
y=height.value;
    console.log(x,y)
 fetch(`https://placekitten.com/${x}/${y}`)
.then((data)=>data.blob())
.then((blob)=>
{
    image.src=URL.createObjectURL(blob);    
        
    })
}