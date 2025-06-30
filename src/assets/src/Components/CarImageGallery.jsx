import  { useState } from "react";
import "../css/CarImageGallery.css"
const CarImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Main image */}
      <div className="flex-1">
        <img
          src={selectedImage}
          alt="Selected Car"
          className="w-full h-auto rounded shadow-md mainimg"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:w-24">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer rounded border otherimages ${
              selectedImage === img ? "border-blue-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarImageGallery;
