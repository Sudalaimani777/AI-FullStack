import profile  from "./index.module.css"

const Profile = () => {
    return (
        <>
            <h1 style={{ backgroundColor: "orange", marginTop:"20px" }}>Inline Style</h1>

            <h1 className="external">This is the style from the global css</h1>

            <h1 className={profile.inter}>This is the style from the external css</h1>
        </>
    )
}
export default Profile;