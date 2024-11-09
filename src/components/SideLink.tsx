import DisplayingLink from '@/features/DisplayingLink'
import { Link } from '@/types/Types'
import React, { Fragment } from 'react'

interface Props {
  links: Link[]
  height: string
}
const SideLink = ({ links, height }: Props) => {
  return (
    <div
      className="w-full px-4 max-w-[260px] left-0 right-0 mx-auto absolute top-[44%] flex flex-col gap-4 overflow-auto"
      style={{ height: height }}
    >
      {links?.map((data, index) => (
        <Fragment key={index}>
          <DisplayingLink {...data} />
        </Fragment>
      ))}
    </div>
  )
}

export default SideLink
