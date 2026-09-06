import profileImage from "../../assets/Profile/Profile.jpg"
import emailIcon from "../../assets/Icons/Mail.png";
import linkedinIcon from "../../assets/Icons/linkedin.png";

const Info = () => {
  return (
    <section>
      <img src={profileImage} alt="Profile" className="h-79.25 w-full object-cover" />

      <div className="px-9 pb-6 pt-5 text-center">
        <h2 className="text-[25px] font-bold text-white">K.Sudalaimani</h2>
        <p className="mt-1 text-[12.8px] text-[#F3BF99]">Frontend Developer</p>
        <small className="mt-2 block text-[10.24px] text-[#F5F5F5]">sudalaimani.website</small>

        <div className="mt-4 flex items-center justify-center gap-4">
          <button className="flex h-8.5 w-28.75 items-center justify-center gap-2 rounded-md border border-[#D1D5DB] bg-white text-[14px] font-medium text-[#374151]">
            <img src={emailIcon} alt="Email" className="h-4 w-4" />
            Email
          </button>
          <button className="flex h-8.5 w-28.75 items-center justify-center gap-2 rounded-md bg-[#5093E2] text-[14px] font-medium text-white">
            <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  )
}

export default Info