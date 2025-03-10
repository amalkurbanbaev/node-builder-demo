import {
  Calendar1Icon,
  FileIcon,
  GitPullRequestArrowIcon,
  PlayIcon,
  SheetIcon,
  SplitIcon,
  UndoDotIcon,
} from "lucide-react";

export const FLOW_SIDEBAR_DATA = {
  components: [
    {
      title: "Триггеры",
      icon: PlayIcon,
      items: [
        {
          title: "Google Calendar",
          icon: Calendar1Icon,
        },
        {
          title: "Google Sheets",
          icon: SheetIcon,
        },
        {
          title: "Google Drive",
          icon: FileIcon,
        },
      ],
    },
    {
      title: "Логические операции",
      icon: GitPullRequestArrowIcon,
      items: [
        {
          title: "Если",
          icon: GitPullRequestArrowIcon,
        },
        {
          title: "И",
          icon: SplitIcon,
        },
        {
          title: "Или",
          icon: UndoDotIcon,
        },
      ],
    },
  ],
};
