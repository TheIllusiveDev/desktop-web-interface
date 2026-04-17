export type AppWindow = {
    id: string;
    title: string;
    component: 'terminal' | 'browser';
    isOpen: boolean;
    zIndex: number;
}