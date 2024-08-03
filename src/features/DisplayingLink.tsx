type Props = {
  data: { id: number; ref: string; identifier: string }
}
const DisplayingLink = (props: Props) => {
  const DisplayLinks = [
    {
      identifier: 'Google',
      bgColor: 'red',
    },
    {
      identifier: 'Facebook',
      bgColor: 'blue',
    },
    {
      identifier: 'React',
      bgColor: 'green',
    },
  ]
  const { data } = props
  const { identifier } = data
  const content = DisplayLinks.find(
    (data) => data.identifier.toLowerCase() === identifier.toLowerCase()
  )
  console.log(content)
  return (
    <div
      className={`w-full max-w-[237px] m-0 px-4 py-[11px] bg-${content?.bgColor}`}
    >
      <p>{content?.identifier}</p>
    </div>
  )
}

export default DisplayingLink
