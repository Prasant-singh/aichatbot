import React, { useEffect } from 'react';

function EnableInspect() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if the pressed keys are Ctrl+Shift+I (or Cmd+Option+I on Mac)
      if ((e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'i')) {
        e.preventDefault();
        
        // Create a temporary input element
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        
        // Focus and select the input
        tempInput.focus();
        tempInput.select();
        
        // Execute the 'inspect' command
        try {
          document.execCommand('inspect');
        } catch (err) {
          console.log('Inspection failed:', err);
        }
        
        // Remove the temporary input
        document.body.removeChild(tempInput);
      }
    };

    // Add the event listener
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default EnableInspect;