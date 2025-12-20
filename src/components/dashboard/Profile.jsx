"use client";
import useProfile from "src/hooks/useProfile";
import { CameraSvg } from "../icons/CommonDashboardSvg";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Profile = () => {
  const { image, handleImageUpload, handleDeleteImage, handleUploadClick } =
    useProfile();

  return (
    <div className="max-w-full">
      <div className="dashboard-main-heading-container">
        <h1 className="dashboard-main-heading-style">Profile Details</h1>
      </div>
      <div className="table-container-style">
        <div className="max-w-3xl p-[10px] lg:p-[30px]">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-12 ">
            <div className="relative w-28 h-28 overflow-visible">
              <img
                src={image || "/profilepage-img.svg"}
                alt="Profile"
                className="w-full h- h-full object-cover rounded-full relative"
              />
              <label
                htmlFor="file-upload"
                className="absolute bottom-1 -right-5 rounded-full shadow-md cursor-pointer"
              >
                <CameraSvg size={18} className="text-gray-700" />
              </label>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*" // Ensure only images are uploaded
                onChange={handleImageUpload}
              />
            </div>

            <div className="flex gap-3">
              <Button
                className="w-fit mt-5 rounded-[4px] py-2 px-4 text-sm lg:text-base"
                onClick={handleUploadClick}
              >
                Upload New
              </Button>
              <Button
                variant="secondary"
                className="bg-whiteedgar hover:bg-lavender hover:text-whiteedgar text-lavender w-fit mt-5 rounded-[4px] py-2 px-4 text-sm lg:text-base"
                onClick={handleDeleteImage}
              >
                Delete
              </Button>
            </div>
          </div>

          {/* Profile Details Form */}
          <form
            className="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 items-start gap-2 lg:gap-4 md:gap-3"
            id="upload-form"
          >
            {/* First Name */}
            <div className="flex flex-col gap-[8px]">
              <Label htmlFor="first-name" className="profile-label-style">
                First Name
              </Label>
              <Input
                id="first-name"
                placeholder="Enter your first name"
                defaultValue="Girish"
                className="profile-input-style px-[11px] py-2 rounded-[4px]"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-[8px]">
              <Label htmlFor="last-name" className="profile-label-style">
                Last Name
              </Label>
              <Input
                id="last-name"
                placeholder="Enter your last name"
                defaultValue="Singh"
                className="profile-input-style px-[11px] py-2 rounded-[4px]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[8px]">
              <Label htmlFor="email" className="profile-label-style">
                Email Id
              </Label>
              <Input
                id="email"
                defaultValue="girish@venxitsolutions.com"
                placeholder="Enter your email id  "
                className="profile-input-style px-[11px] py-2 rounded-[4px]"
              />
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-[8px]">
              <Label htmlFor="mobile" className="profile-label-style">
                Mobile No
              </Label>
              <Input
                id="mobile"
                type="tel"
                defaultValue="9030990115"
                className="profile-input-style px-[11px] py-2 rounded-[4px]"
              />
            </div>

            {/* Update Profile Button */}
          </form>
          <div className="flex w-full justify-start">
            <Button
              className="w-fit mt-[50px] rounded-[4px] py-2 px-4 text-sm lg:text-base"
              onClick={() =>
                document.getElementById("upload-form").requestSubmit()
              }
            >
              Update Profile
            </Button>
          </div>
        </div>
      </div>
      <div className="right-bottom-style"></div>
      <div className="left-bottom-style"></div>
    </div>
  );
};

export default Profile;
