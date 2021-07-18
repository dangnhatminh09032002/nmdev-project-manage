import Attendance from "../components/Icons/Attendance";
import Grades from "../components/Icons/Grades";
import Courses from "../components/Icons/Courses";
import Dashboard from "../components/Icons/Dashboard";
import Materials from "../components/Icons/Materials";
import Settings from "../components/Icons/Settings";
import Transcripts from "../components/Icons/Transcripts";
import Calender from "../components/Icons/Calender";

const linkList = [
  { title: "Dashboard", href: "/dashboard", component: Dashboard },
  { title: "Courses", href: "/courses", component: Courses },
  { title: "Materials", href: "/materials", component: Materials },
  { title: "Calender", href: "/calender", component: Calender },
  { title: "Transcripts", href: "/transcripts", component: Transcripts },
  { title: "Grades", href: "/grades", component: Grades },
  { title: "Attendance", href: "/attendance", component: Attendance },
  { title: "Settings", href: "/settings", component: Settings },
];

export default linkList;
