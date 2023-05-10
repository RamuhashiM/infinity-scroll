const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let photosArray=[];

// Unsplash API
const count=10;
const apiKey='Rl4sbinQ_mf8wp1Fi524OnOl9U4_UKZVyfIrfl1hpjU';
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
// Helper function to set Attributes on DOM Elements
function setAttributes(element,attributes){
  for (const key in attributes){
    element.setAttribute(key,attributes[key]);
  }
}
// Create Elements for links & Photos,Add to DOM
function displayPhotos(){
    // Run Function for each object in PhotosArray
    photosArray.forEach((photo) =>{
     //  Create <a> to link to Unsplash 
     const item = document.createElement('a');
    
     setAttributes(item, {
          href:photo.links.html,
          target:'_blank',
        })
      // Create <img> for photo
     const img=document.createElement('img');
      setAttributes(img, {
          src: photo.urls.regular,
          alt:photo.alt_description,
          title:photo.alt_description,
        })
     //  Put <img> inside <a> , then put both inside imageContainer Element
      item.appendChild(img);
      imageContainer.appendChild(item);
    });
 }
// Get photos from Unsplash Api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}
//  on load 
getPhotos();
