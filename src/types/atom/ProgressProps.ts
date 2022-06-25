export interface ProgressProps {
    type?: "circle" | "line" | "dashboard";
    percent: number;
    status?: "active" | "exception" | "normal" | "success";
}