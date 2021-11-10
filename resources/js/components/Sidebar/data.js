import dashboardDark from "../../../img/icon/dashboard-dark.svg";
import dashboardLight from "../../../img/icon/dashboard-white.svg";
import temanDark from "../../../img/icon/teman-dark.svg";
import temanLight from "../../../img/icon/teman-white.svg";
import forumDark from "../../../img/icon/forum-dark.svg";
import forumLight from "../../../img/icon/forum-white.svg";
import logoutDark from "../../../img/icon/logout-dark.svg";
import logoutLight from "../../../img/icon/logout-white.svg";
import profilDark from "../../../img/icon/profil-dark.svg";
import profilLight from "../../../img/icon/profil-white.svg";

export const Menus = [
    {
        menu: "Dashboard",
        href: "/dashboard",
        iconDark: dashboardDark,
        iconLight: dashboardLight,
        method: "get",
    },
    {
        menu: "Teman Belajar",
        href: "/teman",
        iconDark: temanDark,
        iconLight: temanLight,
        method: "get",
    },
    {
        menu: "Forum Diskusi",
        href: "/forum",
        iconDark: forumDark,
        iconLight: forumLight,
        method: "get",
    },
    {
        menu: "Profil",
        href: "/user",
        iconDark: profilDark,
        iconLight: profilLight,
        method: "get",
    },
    {
        menu: "Logout",
        href: "/logout",
        iconDark: logoutDark,
        iconLight: logoutLight,
        method: "post",
    },
];
