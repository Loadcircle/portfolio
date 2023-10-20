//check if element is anchor or button
export const isAnchorOrButton = (element: Element | null): boolean => {
    if (element?.closest('a') || element?.closest('button')) return true;
    return false;
};