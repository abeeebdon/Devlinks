import { Link } from '@/types/Types'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Select, { GroupBase, SingleValue } from 'react-select'

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
}

const CreateLinkCard = ({ index, name, value, onUpdate, onRemove }: Props) => {
  const { control } = useForm({
    defaultValues: { name, value },
  })

  const options: OptionType[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
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
              <Select<OptionType, false, GroupBase<OptionType>>
                {...field}
                options={options}
                placeholder="Select a platform"
                onChange={(option: SingleValue<OptionType>) => {
                  const newName = option?.value || ''
                  field.onChange(newName)
                  handleChange({ name: newName, value: value }) // Update the link object
                }}
                value={options.find((opt) => opt.value === field.value)} // Set the selected value
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
