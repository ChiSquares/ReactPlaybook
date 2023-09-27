export interface Routing {
    path?: string;
    exact?: boolean;
    component?: any;
    title?: string;
    protected?: boolean;
    data?: Record<string, any>;
    permissions?: string[];
    children?: Routing[];
}
