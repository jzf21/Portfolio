import React, { useRef } from 'react';
import { useParallax } from 'react-scroll-parallax';
import imageBg from '../image/parallax-demon-woods-bg.png';
import imageClose from '../image/parallax-demon-woods-close-trees.png';
import imageMid from '../image/parallax-demon-woods-mid-trees.png';
import imageFar from '../image/parallax-demon-woods-far-trees.png';


export default function ParallaxExample() {
  const target = useRef(null);

  const mid = useParallax({
    speed: 50,
    targetElement: target.current,
  });
  const close = useParallax({
    speed: 100,
    targetElement: target.current,
  });

  const midExtend = 50 * 5 * -1;
  const closeExtend = 100 * 5 * -1;

  return (
    <div>
     
      <div className="root2" ref={target}>
        <div style={{ backgroundImage: `url(${imageBg})`, left: 0, right: 0 }} className="layer" />
        <div
          style={{
            backgroundImage: `url(${imageFar})`,
            left: 0,
            right: 0,
          }}
          className="layer"
        />
        <div
          style={{
            backgroundImage: `url(${imageMid})`,
            left: midExtend,
            right: midExtend,
          }}
          className="layer"
          ref={mid.ref}
        />
        <div
          style={{
            backgroundImage: `url(${imageClose})`,
            left: closeExtend,
            right: closeExtend,
          }}
          className="layer"
          ref={close.ref}
        />
      </div>
    </div>
  );
}
