import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".cardhi");
    const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
    const THRESHOLD = 15;

    function handleHover(e) {
      const { clientX, clientY, currentTarget } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;
      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

      currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function resetStyles(e) {
      e.currentTarget.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    if (!motionMatchMedia.matches) {
      cards.forEach((card) => {
        card.addEventListener("mousemove", handleHover);
        card.addEventListener("mouseleave", resetStyles);
      });
    }

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleHover);
        card.removeEventListener("mouseleave", resetStyles);
      });
    };
  }, []);

  return (
    <div className='allhi'>
      <div className="containerhi">
        <article className="cardhi" id="card1hi">
          <div className="contenthi">
            <h2 className='h2hi'>The Best Bouquet</h2>
            <p className='phi'>Architectural flowers usually feature bold blossoms</p>
            <Link className="buti" to="/mens">
              <button type="button" className='buttonhi'>Explore</button>
            </Link>
          </div>
        </article>

        <article className="cardhi" id="card2hi">
          <div className="contenthi">
            <h2 className='h2hi'>Delicious cakes</h2>
            <p className='phi'>It's layered with rich, luscious frosting the cakes</p>
            <Link className="buti" to="/womens">
              <button type="button" className='buttonhi'>Discover</button>
            </Link>
          </div>
        </article>

        <article className="cardhi" id="card3hi">
          <div className="contenthi">
            <h2 className='h2hi'>Personalized Gifts</h2>
            <p className='phi'>Endeavor to provide a range of personalized gifts</p>
            <Link className="buti" to="/kids">
              <button type="button" className='buttonhi'>Visit</button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Gallery;
