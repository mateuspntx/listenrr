import useDarkMode from 'use-dark-mode';
import { lightModeIcon, darkModeIcon } from '../../utils/Icons';

const ThemeSwitcher = (props) => {
  const darkMode = useDarkMode(true)

  return (
    <>
      { 
      darkMode.value ? 
      <img {...props} src={lightModeIcon} onClick={darkMode.disable}/>
      :
      <img {...props} src={darkModeIcon} onClick={darkMode.enable}/> 
      }
    </>
  )
}

export default ThemeSwitcher;