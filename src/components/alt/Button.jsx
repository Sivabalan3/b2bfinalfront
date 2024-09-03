export const Button = ({className,names,onClick}) => {
  return (
    <button className={className} onClick={onClick}>
        {names}
    </button>
  )
}