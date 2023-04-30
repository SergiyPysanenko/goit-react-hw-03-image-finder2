import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.container}>
      <BeatLoader className={css.element}/>
    </div>
  );
}

export default Loader;


