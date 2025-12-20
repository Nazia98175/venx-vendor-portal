import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  product: z.string().min(1, "Product is required"),
  invoiceDate: z.date(),
  poNo: z.string().min(1, "PO No is required"),
  invoiceNo: z.string().min(1, "Invoice No is required"),
  ageSlab: z.string().min(1, "Age Slab is required"),
  priceSlab: z.string().min(1, "Price Slab is required"),
  viewBy: z.string().min(1, "View By is required"),
});

const useStockRegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
      invoiceDate: new Date(),
      poNo: "",
      invoiceNo: "",
      ageSlab: "",
      priceSlab: "",
      viewBy: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return { form, onSubmit };
};

export default useStockRegisterForm;
