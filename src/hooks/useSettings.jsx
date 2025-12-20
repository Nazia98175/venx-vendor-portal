import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  logisticNo: z.string().min(1, ""),
  poNo: z.string().min(1, ""),
});

export default function useSettings() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logisticNo: "",
      poNo: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [modalType, setModalType] = useState(null);
  const handleViewChange = (submit) => {
    setModalType(submit);
  };

  const [email, setEmail] = useState("girish@venxitsolutions.com");
  const [mobile, setMobile] = useState("9030990115");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const increaseFontSize = () => {
    setFontSize((prev) => {
      const newSize = prev + 1;
      localStorage.setItem("fontSize", newSize);
      return newSize;
    });
  };

  // Function to decrease font size
  const decreaseFontSize = () => {
    setFontSize((prev) => {
      const newSize = prev > 10 ? prev - 1 : prev; // Limit minimum size
      localStorage.setItem("fontSize", newSize);
      return newSize;
    });
  };

  return {
    form,
    onSubmit,
    modalType,
    handleViewChange,
    email,
    setEmail,
    mobile,
    setMobile,
    theme,
    setTheme,
    mounted,
    setModalType,
   
  };
}
