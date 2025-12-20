"use client";
import useSettings from "src/hooks/useSettings";
import ChangePasswordModal from "./ChangePasswordModal";
import { Button } from "../ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import FontSizeToggle from "../common/FontSizeToggle ";

const SettingsForm = () => {
  const {
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
  } = useSettings();

  if (!mounted) return null;

  // Function to increase font size

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="settings-form-container-style"
      >
        <FormField
          control={form.control}
          name="logisticNo"
          render={({}) => (
            <FormItem className="settings-input-label-form-container-style">
              <FormLabel>Email Id:</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="settings-form-input-style"
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="poNo"
          render={({}) => (
            <FormItem className="settings-input-label-form-container-style">
              <FormLabel>Mobile No:</FormLabel>
              <Input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="settings-form-input-style"
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="viewBy"
          render={({ field }) => (
            <FormItem className="settings-darkmode-switch-container">
              <FormLabel>Dark Mode:</FormLabel>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                name="darkMode"
                className="data-[state=checked]:bg-commodore "
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center gap-10 mt-4">
          <FormLabel>Font Size:</FormLabel>
          <FontSizeToggle />
        </div>

        <div className="flex w-full justify-end mt-[32px]">
          <div className="flex gap-4">
            <Button
              type="submit"
              onClick={() => handleViewChange("changepassword")}
              className="text-sm lg:text-base w-fit mt-5 
                rounded-md py-2 px-4 justify-end flex"
            >
              Change Password
            </Button>
            <Button
              type="submit"
              onClick={() => handleViewChange("save")}
              className="w-fit mt-5 rounded-md py-2 px-4
               text-sm lg:text-base justify-end flex"
            >
              Save
            </Button>
          </div>
        </div>
        {modalType === "changepassword" && (
          <ChangePasswordModal open={true} setOpen={() => setModalType(null)} />
        )}
      </form>
    </Form>
  );
};

export default SettingsForm;
