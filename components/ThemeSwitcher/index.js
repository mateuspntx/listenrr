import useDarkMode from 'use-dark-mode';

const ThemeSwitcher = (props) => {
  const darkMode = useDarkMode(true)

  return (
    <>
      { 
      darkMode.value ? 
      <img {...props} src="../../assets/images/lightmode-icon.svg" onClick={darkMode.disable}/>
      :
      <img {...props} src="../../assets/images/darkmode-icon.svg" onClick={darkMode.enable}/> 
      }
    </>
  )
}

export default ThemeSwitcher;