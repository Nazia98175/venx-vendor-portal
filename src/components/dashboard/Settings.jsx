import SettingsForm from "./SettingsForm";

const Settings = () => {

  return (
    <div className="max-w-full">
      <div className="dashboard-main-heading-container">
        <h1 className="dashboard-main-heading-style">Settings</h1>
      </div>
      <div className="table-container-style">
        <SettingsForm />
      </div>
      <div className="right-bottom-style"></div>
      <div className="left-bottom-style"></div>
    </div>
  );
};

export default Settings;
