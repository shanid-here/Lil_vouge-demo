import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cur = cursorRef.current;
    if (!cur) return;

    const handleMouseMove = (e) => {
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
    };

    const handleMouseEnter = () => cur.classList.add('hover');
    const handleMouseLeave = () => cur.classList.remove('hover');

    document.addEventListener('mousemove', handleMouseMove);

    // Attach hover effect to interactive elements
    const attachHoverEvents = () => {
      document.querySelectorAll('button, a, [onclick], .group').forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachHoverEvents();

    // Re-attach if DOM changes (simple approach for React)
    const observer = new MutationObserver(attachHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('button, a, [onclick], .group').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return <div id="cursor" ref={cursorRef}></div>;
}
