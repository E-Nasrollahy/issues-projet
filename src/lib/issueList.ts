import type { issuse } from "@/Context/types";

export const issueList : issuse[] = [
        {
            id: 1,
            title: "login redirect not working properly",
            description: "After successful login, users are not being redirected to the dashboard. They remain on the login page instead.",
            isOpen: false,
            labels: [
                "bug",
                "authentication",
                "frontend"
            ],
            priority: "high",
            commentCount: 2,
            time: "3d ago"
        },
        {
            id: 2,
            title: "performance issues on issue list page",
            description: "The issue list page is loading slowly when there are many issues. We need to implement pagination or virtual scrolling to improve performance.",
            isOpen: true,
            labels: [
                "performance",
                "optimization",
                "frontend"
            ],
            priority: "high",
            commentCount: 0,
            time: "5d ago"
        },
        {
            id: 3,
            title: "add dark mode support",
            description: "Users have requested dark mode support throughout the application. This should include proper theming for all components and user preference persistence.",
            isOpen: true,
            labels: [
                "ui",
                "enhancement",
                "theming"
            ],
            priority: "medium",
            commentCount: 1,
            time: "4d ago"
        },
        {
            id: 4,
            title: "email notifications not being sent",
            description: "Users are not receiving email notifications when they're mentioned in comments or assigned to issues.",
            isOpen: true,
            labels: [
                "bug",
                "notification",
                "backend"
            ],
            priority: "medium",
            commentCount: 0,
            time: "7d ago"
        },
        {
            id: 5,
            title: "add keyboard shortcuts for common actions",
            description: "Add keyboard shortcuts for common actions like creating a new issue (Ctrl+N), searching (Ctrl+K), etc. to improve user productivity.",
            isOpen: true,
            labels: [
                "enhabcement",
                "accessibility",
                "ux"
            ],
            priority: "low",
            commentCount: 1,
            time: "6d ago"
        }
    ]