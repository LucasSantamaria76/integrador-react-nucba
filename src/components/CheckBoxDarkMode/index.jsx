import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../redux/slices'
import { Input, Slider, Switch, SwitchContainer } from './styles'

export const CheckBoxDarkMode = ({ color = '#000' }) => {
  const dispatch = useDispatch()
  const { theme } = useSelector((store) => store.theme)
  const [toggle, setToggle] = useState(theme === 'dark')

  useEffect(() => {
    dispatch(toggleTheme(toggle))
  }, [toggle])

  return (
    <SwitchContainer>
      <p onClick={(e) => (toggle ? setToggle(false) : e.preventDefault())}>☀️</p>
      <Switch>
        <Input
          {...{ color }}
          type='checkbox'
          defaultChecked={toggle}
        />
        <Slider
          {...{ toggle, color }}
          onClick={() => setToggle(!toggle)}
        />
      </Switch>
      <p onClick={(e) => (!toggle ? setToggle(true) : e.preventDefault())}>🌑</p>
    </SwitchContainer>
  )
}
