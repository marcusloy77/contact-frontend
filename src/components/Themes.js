const Themes = ({resTheme, darkTheme, lightTheme}) => {
  return (
    <div  className='themeTop'>
      <div className="title themeTitle">Themes!</div>
      <div className="theme themeOp1" onClick={resTheme}>
        <div className='themeBtn sunset'>Sunset</div>
        
      </div>
      <div className="theme themeOp2" onClick={darkTheme}>
      <div className='themeBtn themeOp2'>Dark Matter </div>
      </div>
      <div className="theme themeOp3" onClick={lightTheme}>
      <div className='themeBtn themeOp3'>Paladin</div>
      </div>
    </div>
  )
}

export default Themes