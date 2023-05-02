fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const imageGallery = document.querySelector('.gallery-row');
    for (let i = 0; i < data.images.length; i++) {
      const image = data.images[i];
      const imageDiv = document.createElement('div');
      imageDiv.className = 'col-md-4 mb-4';
      const galleryImage = document.createElement('div');
      galleryImage.className = 'gallery-image';
      const imageFile = document.createElement('img');
      imageFile.className = 'img-fluid';
      imageFile.setAttribute('src', image.url);
      const caption = document.createElement('div');
      caption.className = 'caption';
      const fullSize = document.createElement('a');
      fullSize.setAttribute('href', image.url);
      fullSize.setAttribute('target', '_blank');
      fullSize.innerHTML = '<span class="material-icons material-icons-outlined">zoom_in</span>';
      const title = document.createElement('h2');
      title.innerText = image.title;
      const description = document.createElement('p');
      description.innerText = image.description;
      galleryImage.appendChild(imageFile);
      galleryImage.appendChild(fullSize);
      caption.appendChild(title);
      caption.appendChild(description);
      galleryImage.appendChild(caption);
      imageDiv.appendChild(galleryImage);
      imageGallery.appendChild(imageDiv);
    }
  })
  .catch(error => console.error(error));


  fetch('images.json')
  .then(response => response.json())
  .then(data => {
    const carousel = document.querySelector('#carousel .carousel-inner');
    for (let i = 0; i < data.images.length; i++) {
      const carouselImage = data.images[i];
      const carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';
      carouselItem.style.backgroundImage = `url(${carouselImage.url})`;
      const carouselCaption = document.createElement('div');
      carouselCaption.className = 'carousel-caption';
      const carouselTitle = document.createElement('h2');
      carouselTitle.innerText = carouselImage.title;
      const carouselDescription = document.createElement('p');
      carouselDescription.innerText = carouselImage.description;
      carouselCaption.appendChild(carouselTitle);
      carouselCaption.appendChild(carouselDescription);
      carouselItem.appendChild(carouselCaption);
      carousel.appendChild(carouselItem);
      if (i === 0) carouselItem.classList.add('active');
    }
  })
  .catch(error => console.error(error));