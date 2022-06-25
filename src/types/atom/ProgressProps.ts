export type ProgressType = 'circle' | 'line' | 'dashboard'
export type ProgressStatus = 'active' | 'exception' | 'normal' | 'success'

export interface ProgressProps
{
    type?: ProgressType;
    percent: number;
    status?: ProgressStatus;
    className?: string | undefined
}