export interface AlertSwalData {
    title: string;
    text: string;
    icon: 'success' | 'error' | 'warning' | 'info' | 'question';
    confirmButtonText: string;
}