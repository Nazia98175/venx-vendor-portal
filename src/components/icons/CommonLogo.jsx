export const CommonLogo = () => {
  return (
    <div className="flex absolute justify-center items-start -top-[50px] lg:-top-[60px] left-1/2 -translate-x-1/2 mb-6 ">
      <div className="bg-white relative  p-14 lg:p-16  custom-shadow flex flex-col justify-center items-center ">
        <img
          src="/images/venx-main-logo.svg"
          alt="logo"
          className=" absolute top-3 lg:top-4 h-12 lg:h-auto"
        />

        <img
          src="/images/venx-rect.png"
          alt="logo"
          className="absolute top-7 lg:top-9 left-3/4 -translate-x-4 lg:-translate-x-5 border-transparent  border-2"
        />
        <img
          src="/images/venx-logo.svg"
          alt="logo"
          className=" absolute top-12 lg:top-16 h-12 lg:h-auto"
        />
      </div>
    </div>
  );
};

export default CommonLogo;

export const XLSSvg = () => {
  return <img src="/images/xls.png" alt="logo" className="w-auto h-auto" />;
};

export const LogoImg = () => {
  return (
    <div className="flex items-center">
      <img
        src="/images/sidebar-main-logo.svg"
        alt="Website Logo"
        className="h-8"
      />
      <img
        src="/images/venx-logo.svg"
        alt="Website Logo"
        className="h-10 block lg:block xl:hidden"
      />
    </div>
  );
};

export const PDFLogo = () => {
  return <img src="/images/pdflogo.png" alt="" />;
};

// Create a function that returns the image URL
export const getPDFLogoUrl = () => {
  return "/images/pdflogo.png";
};
