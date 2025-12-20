import { useRef, useState } from "react";

export default function useProfile() {
  const [image, setImage] = useState("/images/profilepage-img.svg");
  const fileInputRef = useRef(null);

  // Handle Image Upload
  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle Delete Image
  const handleDeleteImage = () => {
    setImage("/images/no-img-profile.svg");
    URL.revokeObjectURL(image);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return {
    image,
    handleImageUpload,
    handleDeleteImage,
    handleUploadClick,
  };
}
