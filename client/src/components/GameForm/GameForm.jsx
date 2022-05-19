import React, { useEffect } from 'react';
import style from './gameForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import ThemeCard from '../ThemeCard/ThemeCard';
import { themesRenderAC } from '../../redux/actionCreator/themeAC';


function GameForm() {
  const { themes } = useSelector(state => state.themes)
  console.log(themes);
  const dispatch = useDispatch(store => store.themes)
  // const { state, setState } = useState(false)


  useEffect(() => {
    fetch("/gameForm")
      .then(res => res.json())
      .then(data => console.log('puki', data))
      .then(data => dispatch(themesRenderAC(data)))
  }, [themes])

  return (

    <div>
      <table className={style.table}>
        <tbody>
          <tr>
            <th scope="row">{themes.map(theme => <ThemeCard key={themes.id} themeCard={theme} />)}</th>
          </tr>

        </tbody>
      </table>
    </div>

  );
}

export default GameForm;
