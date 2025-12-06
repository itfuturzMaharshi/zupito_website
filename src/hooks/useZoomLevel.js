import { useEffect } from 'react';

/**
 * Hook to detect browser zoom level and apply CSS classes
 * This helps fix layout issues at specific zoom levels (150%, 175%)
 */
export const useZoomLevel = () => {
  useEffect(() => {
    const detectZoom = () => {
      let detectedZoom = 100;
      
      // Method 1: Using visualViewport API (most accurate for browser zoom)
      if (window.visualViewport && window.visualViewport.width > 0) {
        // Calculate zoom based on the difference between outerWidth and visualViewport width
        const zoomRatio = window.outerWidth / window.visualViewport.width;
        detectedZoom = Math.round(zoomRatio * 100);
      } else {
        // Method 2: Using devicePixelRatio and screen dimensions
        // This is less accurate but works as fallback
        const screenWidth = window.screen.width;
        const windowWidth = window.outerWidth;
        
        if (windowWidth > 0 && screenWidth > 0) {
          const zoomRatio = screenWidth / windowWidth;
          detectedZoom = Math.round(zoomRatio * 100);
        }
      }
      
      // Round to nearest common zoom level (100, 110, 125, 150, 175, 200)
      const commonZooms = [100, 110, 125, 150, 175, 200];
      const nearestZoom = commonZooms.reduce((prev, curr) => {
        return Math.abs(curr - detectedZoom) < Math.abs(prev - detectedZoom) ? curr : prev;
      });
      
      // Only apply class if zoom is significantly different from 100%
      // This prevents false positives
      if (Math.abs(nearestZoom - detectedZoom) <= 15) {
        // Remove all zoom classes from both html and body
        const zoomClasses = ['zoom-100', 'zoom-110', 'zoom-125', 'zoom-150', 'zoom-175', 'zoom-200'];
        document.documentElement.classList.remove(...zoomClasses);
        document.body.classList.remove(...zoomClasses);
        // Add the detected zoom class to both html and body
        const zoomClass = `zoom-${nearestZoom}`;
        document.documentElement.classList.add(zoomClass);
        document.body.classList.add(zoomClass);
      } else {
        // Default to 100% if detection is uncertain
        const zoomClasses = ['zoom-100', 'zoom-110', 'zoom-125', 'zoom-150', 'zoom-175', 'zoom-200'];
        document.documentElement.classList.remove(...zoomClasses);
        document.body.classList.remove(...zoomClasses);
        document.documentElement.classList.add('zoom-100');
        document.body.classList.add('zoom-100');
      }
    };

    // Initial detection with a small delay to ensure DOM is ready
    const initTimeout = setTimeout(detectZoom, 50);

    // Listen for resize events (zoom changes trigger resize)
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(detectZoom, 150);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Also listen for visualViewport changes if available
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize);
      window.visualViewport.addEventListener('scroll', handleResize);
    }

    return () => {
      clearTimeout(initTimeout);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize);
        window.visualViewport.removeEventListener('scroll', handleResize);
      }
    };
  }, []);
};

