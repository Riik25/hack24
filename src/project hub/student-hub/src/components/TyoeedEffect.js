import React, { useEffect } from 'react';
import Typed from 'typed.js';

function TypedEffect() {
  useEffect(() => {
    const typed = new Typed('#element', {
      strings: ['Projects', 'Potential', 'Career'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="element"></span>;
}

export default TypedEffect;