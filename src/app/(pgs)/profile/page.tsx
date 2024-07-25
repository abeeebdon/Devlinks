import ProfileImage from '@/features/ProfileImage'
import Image from 'next/image'

const Profile = () => {
  return (
    <section className="flex mt-8 gap-6 justify-between ">
      <div className="hidden md:flex w-full p-[40px] h-[834px] rounded-lg max-w-[560px] bg-white  justify-center items-center basis-[40%] ">
        <Image src="/images/phone.svg" alt="phone" width={300} height={630} />
      </div>
      <div className="bg-white w-full basis-[60%] p-[40px] pb-0 rounded-lg">
        <h2 className="heading text-dgrap ">Profile Details</h2>
        <p className="paragraph">
          Add your details to create a personal touch to your profile.
        </p>
        <ProfileImage />
        <div className="bg-lgray p-5">
          <div className="flex justify-between items-center">
            <label className="paragraph">First name*</label>
            <input
              type="text"
              placeholder="Ben"
              className=" p-3 bg-white paragraph w-full max-w-[344px] text-dgrap border border-[#D9D9D9] rounded"
            />
          </div>
          <div className="flex justify-between items-center my-3">
            <label className="paragraph">Lastname</label>
            <input
              type="text"
              placeholder="Wright"
              className="p-3 bg-white paragraph w-full max-w-[344px] text-dgrap border border-[#D9D9D9] rounded"
            />
          </div>
          <div className="flex justify-between items-center ">
            <label className="paragraph">Email</label>
            <input
              type="email"
              placeholder="ben@example.com"
              className="p-3 bg-white w-full max-w-[344px] paragraph text-dgrap border border-[#D9D9D9] rounded"
            />
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
