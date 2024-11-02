import React, { useEffect } from "react";
import "./gallery.css";

const Gallery = () => {
  useEffect(() => {
    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        const scrollerInner = scroller.querySelector(".inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicate = item.cloneNode(true);
          duplicate.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicate);
        });
      });
    }
    addAnimation();
  });
  return (
    <div className="gallery">
      <div className="top-gallery scroller">
        <div className="inner top-inner">
          <div className="g-image">
            <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80" />
          </div>
          <div className="g-image">
            <img src="https://img.freepik.com/premium-photo/blurred-bokeh-calm-flowing-river_734841-2259.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723507200&semt=ais_hybrid" />
          </div>
          <div className="g-image">
            <img src="https://st3.depositphotos.com/18630962/31856/i/450/depositphotos_318568256-stock-photo-huai-mae-kamin-waterfall-srinakarin.jpg" />
          </div>
          <div className="g-image">
            <img src="https://img.lovepik.com/photo/48005/0655.jpg_wh860.jpg" />
          </div>
          <div className="g-image">
            <img src="https://thumbs.dreamstime.com/b/serene-hidden-forest-pool-cascading-waterfall-natural-rock-formations-ai-generated-334492813.jpg" />
          </div>
          <div className="g-image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/040/692/838/small_2x/ai-generated-tranquil-scene-flowing-water-green-forest-and-colorful-autumn-leaves-generated-by-ai-photo.jpg" />
          </div>
        </div>
      </div>
      <div className="bottom-gallery scroller">
        <div className="inner bottom-inner">
          <div className="g-image">
            <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80" />
          </div>
          <div className="g-image">
            <img src="https://img.freepik.com/premium-photo/blurred-bokeh-calm-flowing-river_734841-2259.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723507200&semt=ais_hybrid" />
          </div>
          <div className="g-image">
            <img src="https://st3.depositphotos.com/18630962/31856/i/450/depositphotos_318568256-stock-photo-huai-mae-kamin-waterfall-srinakarin.jpg" />
          </div>
          <div className="g-image">
            <img src="https://img.lovepik.com/photo/48005/0655.jpg_wh860.jpg" />
          </div>
          <div className="g-image">
            <img src="https://thumbs.dreamstime.com/b/serene-hidden-forest-pool-cascading-waterfall-natural-rock-formations-ai-generated-334492813.jpg" />
          </div>
          <div className="g-image">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/040/692/838/small_2x/ai-generated-tranquil-scene-flowing-water-green-forest-and-colorful-autumn-leaves-generated-by-ai-photo.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
