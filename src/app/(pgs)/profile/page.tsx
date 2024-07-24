import Image from 'next/image'

const Profile = () => {
  return (
    <section className="flex mt-8 bg-white">
      <div className="flex w-full max-w-[560px] max-h-[834px] h-full justify-center items-center basis-[35%]">
        <Image src="/images/phone.svg" alt="phone" width={300} height={630} />
      </div>
      <div className="basis-[60%] p-4">
        <h2 className="text-xl font-bold mb-4">Profile Details</h2>
        <p className="mb-6">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="mb-6">
          <p className="mb-2">Profile Picture</p>
          <input
            type="file"
            placeholder="Choose an image"
            className="mb-2 p-2 border"
          />
          <p className="text-sm text-gray-600">
            Image must be below 1024x1024px. <br />
            Use PNG or JPG format.
          </p>
        </div>
        <div className="mb-6">
          <div className="mb-4">
            <label className="block mb-1">Firstname</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Lastname</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
      </div>
    </section>
  )
}

export default Profile
