import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.container}>
      <BeatLoader className={css.element}  color="#3f51b5"/>
    </div>
  );
}

export default Loader;


