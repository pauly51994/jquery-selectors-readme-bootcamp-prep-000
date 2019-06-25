// declare your functions here...
function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  let images = $('img');
  let lastImage = [images[images.length - 1]];
  return lastImage;
}
