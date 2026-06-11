import { useTheme } from '../context/ThemeContext';

export const ThemeLabel = () => {
  const { theme } = useTheme();
  return <p>Current theme: {theme}</p>;
};
