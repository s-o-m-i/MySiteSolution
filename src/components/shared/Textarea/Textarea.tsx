// Import React and necessary components from Material-UI
import * as React from 'react';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

// MuiTextArea component that takes the minimum number of rows as a prop
export default function MuiTextArea({ minRow }: { minRow: number }) {

  // Style the BaseTextareaAutosize component using the styled utility from MUI
  const Textarea = styled(BaseTextareaAutosize)(
    () => `
      // Styling for the textarea
      width: 100%;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 8px 12px;
      border-radius: 8px;
      color: #fff;
      background: transparent;
      border: 1px solid '#1C2025';
      box-shadow: 0px 2px 2px '#1C2025';

      // Hover state styling
      &:hover {
        border-color: '#1C2025';
      }

      // Focus state styling
      &:focus {
        border-color: '#1C2025';
        box-shadow: 0 0 0 3px '#1C2025';
      }

      // Focus state styling for Firefox
      &:focus-visible {
        outline: 0;
      }
    `,
  );

  // Render the TextareaAutosize component with the specified styles
  return (
    <Textarea aria-label="minimum height" minRows={minRow} placeholder="Minimum 3 rows" />
  );
}
