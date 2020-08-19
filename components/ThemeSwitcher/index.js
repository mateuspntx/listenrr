import useDarkMode from 'use-dark-mode';

const ThemeSwitcher = () => {
  const darkMode = useDarkMode(true)

  return (
    <>
      { 
      darkMode.value ? 
      <img src="../../assets/images/lightmode-icon.svg" onClick={darkMode.disable}/>
      :
      <img src="../../assets/images/darkmode-icon.svg" onClick={darkMode.enable}/> 
      }
    </>
  )
}

export default ThemeSwitcher;