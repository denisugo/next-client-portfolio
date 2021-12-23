import style from "../../styles/Button/Button.module.css";

function Button({
  width,
  height,
  text,
  callback,
  fontSize = undefined,
  label = "button",
  className = "",
}) {
  return (
    <button
      //className={style.button}
      className={`${style.button} ${className}`}
      style={{ width, height, fontSize }}
      data-testid="button"
      role="button"
      aria-label={label}
      onClick={callback}
      onSelect={callback}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
