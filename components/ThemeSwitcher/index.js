import useDarkMode from 'use-dark-mode';

const ThemeSwitcher = () => {
  const darkMode = useDarkMode(true)

  return (
    <>
      { 
      darkMode.value ? 
      <img style={{marginRight: '0px'}} src="../../assets/images/lightmode-icon.svg" onClick={darkMode.disable}/>
      :
      <img style={{marginRight: '0px'}} src="../../assets/images/darkmode-icon.svg" onClick={darkMode.enable}/> 
      }
    </>
  )
}

export default ThemeSwitcher;