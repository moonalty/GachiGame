import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { questRenderAC } from "../../redux/actionCreator/questAC";

function Home() {
  // const { themes } = useSelector((state) => state.themes);
  const { questions } = useSelector((state) => state.questions);
  console.log("questions!!!!>>>", questions);
  

  // console.log("themes>>>>", themes);
  // console.log('QQQQQQ>>>>>',questions);
  // const dispatch = useDispatch((store) => store.themes);
  const dispatch = useDispatch((store) => store.questions);
  // const { state, setState } = useState(false)

  useEffect(() => {
    // fetch("/gameForm")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(themesRenderAC(data)));

    fetch("/home")
      // .then((res) => console.log("res", res.text()))
      .then((res) => res.json())
      .then((data) => dispatch(questRenderAC(data)));

    // .then((data) => dispatch(questRenderAC(data)));
  }, []);
  return (
    <div className="home">
      <Link
        to="/gameForm"
        id="gamePoint"
        className="waves-effect waves-light btn-large"
      >
        Play
      </Link>
    </div>
  );
}

export default Home;
