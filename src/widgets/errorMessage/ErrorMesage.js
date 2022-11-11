import img from './error.gif';


const ErrorMesage = () => {

    return (
        <img style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "0 auto" }} src={img} alt="error" />
    )
}
//<img src={process.env.PUBLIC_URL + '/error.gif'} alt="error" />

export default ErrorMesage;