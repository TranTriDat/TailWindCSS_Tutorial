import { UserProfile } from "./One/UserProfile";
import { Collections } from "./Three/Collections";
import { JobList } from "./Two/JobList";
import { ReviewForm } from "./Four/ReviewForm";
import { UsersList } from "./Five/UsersList";
import { Notification } from "./Six/Notification";
import { Subscriptions } from "./Seven/Subscriptions";
import { JobPositions } from "./Eight/JobCard";
import { AccountList } from "./Nine/AccountList";
import { LandingPage } from "./Ten/LandingPage";

function App() {
  return <div className="w-full min-h-screen bg-[#E6EFFA] flex items-center justify-center">
    {/* <UserProfile /> */}
    {/* <JobList /> */}
    {/* <Collections /> */}
    {/* <ReviewForm /> */}
    {/* <UsersList />  */}
    {/* <Notification /> */}
    {/* <Subscriptions /> */}
    {/* <JobPositions /> */}
    <AccountList />
    {/* <LandingPage /> */}
    </div>;
}

export default App;
