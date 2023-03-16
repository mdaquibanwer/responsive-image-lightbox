const galleryImage = document.querySelectorAll(".gallery .image"),
previewBox = document.querySelector(".preview-box"),
shadow = document.querySelector(".shadow"),
previewImg = previewBox.querySelector(".img-box img"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
prevImgBtn = previewBox.querySelector(".prev"),
nextImgBtn = previewBox.querySelector(".next"),
closePreviewBox = document.querySelector(".preview-box .icon");

window.onload = ()=>{
    for(let i=0;i<galleryImage.length;i++){
        let newIndex = i;
        let clickImgIndex;
        galleryImage[i].onclick = ()=>{     // adding onclick event on individual image
            clickImgIndex = newIndex;
            function preview(){     // preview image function declared
                let selectedImgURL = galleryImage[newIndex].querySelector("img").src;   // getting the source of image called
                previewImg.src = selectedImgURL;   // assigning image to preview
                currentImg.innerText = newIndex+1;  // showing current image count on preview the image
                totalImg.innerText = galleryImage.length;   // total image count
            }
            if(newIndex === 0){     // if the first image is clicked 
                prevImgBtn.style.display = "none";
            }
            if(newIndex >= galleryImage.length -1){     // if last image is clicked
                prevImgBtn.style.display = "none";
            }

            prevImgBtn.addEventListener("click",()=>{   // added event listener on the previous icon
                newIndex--;
                if(newIndex===0){
                    preview();
                    prevImgBtn.style.display = "none";
                }else{
                    preview();
                    nextImgBtn.style.display = "block";
                }
            })
            nextImgBtn.addEventListener("click",()=>{    // added event listener on the previous icon
                newIndex++;
                if(newIndex >=galleryImage.length-1){
                    preview();
                    nextImgBtn.style.display = "none";
                }else{
                    preview();
                    prevImgBtn.style.display = "block";
                }
            })
            
            preview();      // preview function called
            previewBox.classList.add("show");   // added show class in the preview box to show the preview image
            shadow.classList.add("show");       // added show class in the shadow to blur the background
            document.querySelector("body").style.overflow = "hidden";
            closePreviewBox.addEventListener("click",()=>{      // added event listener on the close icon
                newIndex = clickImgIndex;
                prevImgBtn.style.display = "block";
                nextImgBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.classList.remove("show");
                document.querySelector("body").style.overflow = "auto";
            })
        }
    }

}