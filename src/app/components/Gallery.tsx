const Gallery = () => {
    return (
      <div className="flex justify-center items-center min-h-screen w-screen"> {/* Center the gallery vertically and horizontally */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl"> {/* Set a max width for the gallery */}
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers1.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers2.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers3.jpg" alt=""/>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers4.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers5.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers6.jpg" alt=""/>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers7.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers1.jpg" alt=""/>
            </div>
            <div>
              <img className="h-auto max-w-full rounded-lg" src="/media/volunteers2.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Gallery;
