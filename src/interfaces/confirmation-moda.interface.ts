export interface IConfirmationModal {
    title: string;
    buttonText: string;
    buttonColor?: string;
    onButtonClick: (item?: any) => void;
    isVisible: boolean;
}
