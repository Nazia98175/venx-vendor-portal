import { useRouter } from "next/navigation";
import { useState } from "react";
import { initialData } from "src/components/common/Helper";

export default function useLogistics() {
  const [data, setData] = useState(initialData);

  const router = useRouter();
  const handleSubmit = (e) => {
    router.push("/logistics/add");
  };
  return {
    data,
    handleSubmit,
  };
}
