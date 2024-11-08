import { Link } from '@/types/Types'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaDev, FaLinkedin } from 'react-icons/fa'
import {
  FaGithub,
  FaSquareXTwitter,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import { SiFrontendmentor } from 'react-icons/si'
import Select, { components, GroupBase, SingleValue } from 'react-select'
interface Props {
  index: number
  name: string
  value: string
  onUpdate: (updatedLink: Link) => void
  onRemove: () => void
}

interface OptionType {
  value: string
  label: string
  imageUrl: ReactNode
}
const CustomSingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-4">
      {props.data.imageUrl}
      {props.data.label}
    </div>
  </components.SingleValue>
)

const CustomOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-4 bg-red-500">
      {props.data.imageUrl}
      {props.data.label}
    </div>
  </components.Option>
)

const CreateLinkCard = ({ index, name, value, onUpdate, onRemove }: Props) => {
  const { control } = useForm({
    defaultValues: { name, value },
  })

  const options: OptionType[] = [
    {
      value: 'frontendMentor',
      label: 'Frontend Mentor',
      imageUrl: <SiFrontendmentor />,
    },
    {
      value: 'twitter',
      label: 'Twitter',
      imageUrl: <FaSquareXTwitter />,
    },
    {
      value: 'github',
      label: 'Github',
      imageUrl: <FaGithub />,
    },
    {
      value: 'linkedin',
      label: 'Linkedin',
      imageUrl: <FaLinkedin />,
    },
    {
      value: 'youtube',
      label: 'Youtube',
      imageUrl: <FaYoutube />,
    },
    {
      value: 'devTo',
      label: 'DevTo',
      imageUrl: <FaDev />,
    },
  ]

  const handleChange = (updatedLink: Link) => {
    onUpdate(updatedLink) // Send the updated data back to the parent
  }

  return (
    <div className="flex flex-col text-left justify-center mb-6">
      <section className="flex justify-between w-full">
        <h4 className="paragraph font-bold">Link #{`${index + 1}`}</h4>
        <button onClick={onRemove} type="button">
          Remove
        </button>
      </section>

      <section>
        <div className="relative text-left">
          <label htmlFor="platform" className="label text-left">
            Platform
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Select<OptionType, false>
                {...field}
                options={options}
                components={{
                  SingleValue: CustomSingleValue,
                  Option: CustomOption,
                }}
                placeholder="Select a platform"
                onChange={(option) => {
                  const newName = option?.value || ''
                  field.onChange(newName)
                  handleChange({ name: newName, value: value })
                }}
                value={options.find((opt) => opt.value === field.value)}
              />
            )}
          />
          <label htmlFor="link" className="label text-left mt-2">
            Link
          </label>
          <Controller
            name="value"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="block w-full border p-2"
                placeholder="Enter link"
                onChange={(e) => {
                  field.onChange(e.target.value)
                  handleChange({ name, value: e.target.value }) // Update the link object
                }}
              />
            )}
          />
        </div>
      </section>
    </div>
  )
}

export default CreateLinkCard
