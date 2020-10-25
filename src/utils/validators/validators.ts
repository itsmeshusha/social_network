export const required = (value: any) => {
    if (value) return undefined;
    else return "Field is required!";
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength) return `Max Length must be less than ${maxLength} symbols`;
    else return undefined;
}