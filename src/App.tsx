import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ThemeLabel } from './components/ThemeLabel';
import { ToggleThemeButton } from './components/ToggleThemeButton';

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: '2rem',
        minHeight: '100vh',
        backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
        color: theme === 'light' ? '#000000' : '#ffffff',
        transition: 'all 0.3s ease',
      }}
    >
      <h1>Orange Nile Demo</h1>
      <ThemeLabel />
      <ToggleThemeButton />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
