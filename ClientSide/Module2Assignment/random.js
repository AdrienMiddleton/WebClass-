function showImage(image){
    largeImg = document.getElementById('large_img');
    largeImg.src = image;

}


console.log(image);
if (image.includes("mountain"))
{
    document.getElementById('imgDescr').innerHTML = "mountain landscape";
}
if (image.includes("snow"))
{
    document.getElementById('imgDescr').innerHTML = "snow among the road";
}
if (image.includes("waterfall"))
{
    document.getElementById('imgDescr').innerHTML = "waterfall landscape";
}
