// src/components/Content.js
import { useTheme } from '../context/ThemeContext';

function Content() {
  const { theme, themeStyles } = useTheme();

  return (
    <div className="content" style={themeStyles[theme]}>
      <h1>Theme Switcher Demo</h1>
      <p>This is a sample content area that changes with the theme.</p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Content;