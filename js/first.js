

var myImages= Array.from( document.querySelectorAll(".item img") );
var lightboxContainer= document.querySelector(".lightbox-container")
var close= document.getElementById('close');
var next= document.getElementById('next');
var prev= document.getElementById('prev');


var currentImgIndex= 0;


for(i=0 ; i<myImages.length ; i++)
{
    myImages[i].addEventListener('click' ,showLightBox )
}



function showLightBox(e)
{
    
    lightboxContainer.style.transform="scale(1,1)";
    lightboxContainer.firstElementChild.style.transform="scale(1,1)";
    var imgSrc=e.target.src;

    var currentImgIndex= myImages.indexOf(e.target);
    
    lightboxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")"
    


}

function hideLightBox()
{
    lightboxContainer.style.transform="scale(0,0)";
}

close.addEventListener('click' , hideLightBox )
next.addEventListener('click' , goNext)
prev.addEventListener('click' , goPrev)



function goNext()
{
    currentImgIndex++;
    if(currentImgIndex==myImages.length)
    {
        currentImgIndex=0;
    }
    lightboxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentImgIndex].src+")"
}

function goPrev()
{
    currentImgIndex--;
    if(currentImgIndex<0)
    {
        currentImgIndex = myImages.length - 1;
    }

    lightboxContainer.firstElementChild.style.backgroundImage="url("+myImages[currentImgIndex].src+")"

}




document.addEventListener('keydown' , function(e){


    if(e.keyCode == 39)
    {
        goNext();
    }
    else if(e.keyCode == 37)
    {
        goPrev();
    }
    else if(e.keyCode == 27)
    {
        hideLightBox();
    }




})
