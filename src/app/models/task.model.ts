export interface Task {
    name: string;
    status: 'Completed' | 'Pending' | 'Planned';
    date: string;
    description: string;
    descriptionVisible?: boolean;
}