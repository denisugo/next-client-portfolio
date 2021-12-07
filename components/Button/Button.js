import style from "../../styles/Button/Button.module.css";

function Button({ width, height, text, callback, label = "button" }) {
  return (
    <div
      className={style.button}
      style={{ width, height }}
      data-testid="button"
      role="button"
      aria-label={label}
      onClick={callback}
      onSelect={callback}
    >
      <p>{text}</p>
    </div>
  );
}

export default Button;
