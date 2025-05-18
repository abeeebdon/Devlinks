import { Link } from "@/types/Types";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Controller, useForm } from "react-hook-form";

import Select, { components, GroupBase, SingleValue } from "react-select";
import { options } from "./data";
import { OptionType } from "./types";
interface Props {
  index: number;
  name: string;
  value: string;
  onUpdate: (updatedLink: Link) => void;
  onRemove: () => void;
}

const CustomSingleValue = (props: any) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-4">
      {props.data.imageUrl}
      {props.data.label}
    </div>
  </components.SingleValue>
);

const CustomOption = (props: any) => (
  <components.Option {...props}>
    <div className="flex items-center gap-4 bg-red-500">
      {props.data.imageUrl}
      {props.data.label}
    </div>
  </components.Option>
);

const CreateLinkCard = ({ index, name, value, onUpdate, onRemove }: Props) => {
  const { control } = useForm({
    defaultValues: { name, value },
  });

  const handleChange = (updatedLink: Link) => {
    onUpdate(updatedLink); // Send the updated data back to the parent
  };

  return (
    <div className="bg-lgray p-3 rounded-lg flex flex-col text-left justify-center ">
      <section className="flex justify-between w-full">
        <div className="flex gap-2">
          <Image src="/images/TwoBar.svg" width={20} height={20} alt="link" />

          <h4 className="paragraph font-bold">Link #{`${index + 1}`}</h4>
        </div>
        <button onClick={onRemove} type="button">
          Remove
        </button>
      </section>

      <div className="relative text-left">
        <label
          htmlFor="platform"
          className="label text-left  text-[12px] text-dgrap leading-[18px]"
        >
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
              className="border-[#D9D9D9] rounded-lg"
              placeholder="Select a platform"
              onChange={(option) => {
                const newName = option?.value || "";
                field.onChange(newName);
                handleChange({ name: newName, value: value });
              }}
              value={options.find((opt) => opt.value === field.value)}
            />
          )}
        />
        <label
          htmlFor="link"
          className="label text-left mt-2 text-[12px] text-dgrap leading-[18px]"
        >
          Link
        </label>
        <Controller
          name="value"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="block border-[#D9D9D9] rounded-lg w-full border p-2"
              placeholder="Enter link"
              onChange={(e) => {
                field.onChange(e.target.value);
                handleChange({ name, value: e.target.value }); // Update the link object
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default CreateLinkCard;
