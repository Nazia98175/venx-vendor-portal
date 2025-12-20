"use client";
import useChangePassword from "src/hooks/useChangePassword";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const ChangePasswordModal = ({ open, setOpen }) => {
  const { register, handleSubmit, errors, onSubmit } =
    useChangePassword(setOpen);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="dialog-change-password-container-style h-auto">
        <DialogTitle></DialogTitle>
        <DialogHeader></DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Old Password */}
          <div className="change-password-form-container">
            <label className="change-password-label-style">
              Old <span> Password:</span>
            </label>
            <div className="col-span-2">
              <input
                type="password"
                {...register("oldPassword")}
                className="change-password-input-style"
              />
              {errors.oldPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.oldPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* New Password */}
          <div className="change-password-form-container">
            <label className="change-password-label-style">
              New <span> Password:</span>
            </label>
            <div className="col-span-2">
              <input
                type="password"
                {...register("newPassword")}
                className="change-password-input-style"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="change-password-form-container">
            <label className="another-change-password-label">
              Re-Enter <span> Password:</span>
            </label>
            <div className="col-span-2">
              <input
                type="password"
                {...register("confirmPassword")}
                className="another-change-password-input"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex w-full justify-end">
            <Button
              type="submit"
              className="w-fit mt-5 rounded-md py-2 
              px-4 text-sm lg:text-base justify-end flex"
            >
              Apply
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
