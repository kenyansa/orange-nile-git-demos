import { useTheme } from '../context/ThemeContext';

export const ToggleThemeButton = () => {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
