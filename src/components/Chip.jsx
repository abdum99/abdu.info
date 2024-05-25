import { ProjectStatus } from "@/lib/projects";

ProjectStatus.v10

const colorMap = {
    "v0.1": "bg-emerald-200/50 text-emerald-800/80 dark:bg-emerald-600/50 dark:text-emerald-50",
    "In Progress": "bg-yellow-200/50 text-yellow-800/80 dark:bg-yellow-600/50 dark:text-yellow-50",
};

export default function Chip({
    status,
    props
}) {
    const colors = colorMap[status]
    return (
        <div
        className={`relative grid items-center px-2 text-xs font-bold rounded-full select-none whitespace-nowrap uppercase ${colorMap[status]}`}>
        <span>{status}</span>
        </div>
    )
}