function getButtonStyling(styleType) {
    const primaryButtonStyling = 'bg-blue-500 border border-blue-700 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300';
    const secondaryButtonStyling = 'bg-gray-500 border border-gray-700 text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300';
    const warningButtonStyling = 'bg-yellow-500 border border-yellow-700 text-white hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300';

    if(styleType === 'primary') {
        return primaryButtonStyling;
    }   
    else if(styleType === 'secondary') {
        return secondaryButtonStyling;
    }
    else if(styleType === 'warning') {
        return warningButtonStyling;
    }

}

export default getButtonStyling;