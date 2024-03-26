// useSmoothScroll.ts
import { useCallback } from 'react';

const useSmoothScroll = () => {
    const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');

        if (href && href.startsWith("#")) {
            const element = document.querySelector(href) as HTMLElement;
            if (element) {
                 const offsetTop = element.offsetTop - 70; // Adjust the offset as needed for your layout
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }, []);

    return smoothScroll;
};

export default useSmoothScroll;