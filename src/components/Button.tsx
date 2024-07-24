type Props = {
  className: string
  text: string
}
const Button = (props: Props) => {
  const { className, text } = props
  return (
    <div>
      <button className={className}>{text}</button>
    </div>
  )
}

export default Button
