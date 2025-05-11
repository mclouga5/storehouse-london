const Gallery = () => {
  // Array of image sources
  const images = [
    "/media/volunteers1.jpg",
    "/media/volunteers2.jpg",
    "/media/volunteers3.jpg",
    "/media/volunteers4.jpg",
    "/media/volunteers5.jpg",
    "/media/volunteers6.jpg",
    "/media/volunteers7.jpg",
    "/media/IMG_3757.JPG",
    "/media/IMG_3968.JPG",
    "/media/IMG_3762.JPG",
    "/media/IMG_5190.JPG",
    "/media/IMG_5404.JPG",
    "/media/IMG_1876.JPG",
    "/media/IMG_3743.JPG",
    "/media/IMG_6226.JPG",
    "/media/IMG_5409.JPG",
    "/media/IMG_3974.JPG",
    "/media/IMG_1680.JPG",
  ];

  // Helper function to chunk the images array
  const chunkArray = (arr: string[], size: number): string[][] => {
    const chunks: string[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedImages = chunkArray(images, 3);

  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      {/* Center the gallery vertically and horizontally */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl">
        {chunkedImages.map((group, groupIndex) => (
          <div key={groupIndex} className="grid gap-4">
            {group.map((src, index) => (
              <img
                key={index}
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={`Gallery image ${groupIndex * 3 + index + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

