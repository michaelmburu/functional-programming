export const Button = ({size, color, text, ...props}) => {

        // Compostion allows creation of different versions of components
    return (
        <>
            <button style={{
                padding: size === 'large' ? '32px' : '8px',
                fontSize: size === 'large' ? '32px' : '16px',
                backgroundColor: color,

            }} {...props}>
                {text}
            </button>
        </>
    )
}


// Use case 1
export const DangerButton = props => {
    return (
        <Button {...props} color='red' />
    )
}

//Use case 2
export const BigSuccessButton = props => {
    return (
        <Button {...props} size="large" color="green" />
    )
}