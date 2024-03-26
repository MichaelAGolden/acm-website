// useSmoothScroll.ts
import { useCallback } from 'react';

const useSmoothScroll = () => {
    const smoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');

        if (href && href.startsWith("#")) {
            const element = document.querySelector(href) as HTMLElement;

            if (element) {
                const offsetTop = element.offsetTop; // Adjust the offset as needed for your layout
                const sheet = document.querySelector('[data-state="open"]') as HTMLElement;
                if (sheet) {
                    sheet.click();
                    setTimeout(() => {
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }, 300);
                } else {
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, []);

    return smoothScroll;
};

export default useSmoothScroll;