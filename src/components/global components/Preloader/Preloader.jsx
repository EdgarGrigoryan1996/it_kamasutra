import preloader from "../../../assets/images/preloader.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.preloaderBlock}>
      <img src={preloader} alt={"preloader"} />
    </div>
  );
};

export default Preloader;
