let mediaList = document.querySelector('.media-list');
let mediaItems = mediaList.querySelectorAll('img');
let mediaWidth = 0;

// calculate the total width of all media items
mediaItems.forEach(function(item) {
  mediaWidth += item.offsetWidth + 10; // add 10px margin
});

// set the width of the media list container
mediaList.style.width = mediaWidth + 'px';
