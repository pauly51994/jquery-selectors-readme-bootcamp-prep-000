// declare your functions here...
function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  let images = $('img');
  return images[images.length - 1];
}
