import ModeSwitcher from "../../skin/bgModeSwitcher/ModeSwitcher";
import ProfileItems from "./ProfileItems";
import ProfileImg from "./ProfileImg";

const Profile = () => {
  return (
    <div className="relative card lg:h-full border lg:scale-y-105 lg:border-gray-100 dark:border-neutral-900 dark:bg-neutral-900 overflow-auto">
      <div className="flex flex-col items-center dark:text-neutral-100">
        <ModeSwitcher />
        <ProfileImg/>
        <ProfileItems />
      </div>
    </div>
  );
};

export default Profile;
