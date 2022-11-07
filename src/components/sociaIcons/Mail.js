const Mail = (props) => {
  const mailDefaultColor = '#ffa930'


  const iconColor = props.iconColor || mailDefaultColor;
  const height = props.height || '20';
  const width = props.width || '20';

  return (

    <a href="mailto:buh.expert29@mail.ru" target="blank">
      <svg
        height={height}
        width={width}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill={iconColor}
          // fill-rule="evenodd" 
          d="M15.4643156,15.6048546 C14.5656234,16.468853 13.3445798,17 11.9994802,17 C9.23805641,17 6.99948016,14.7614237 6.99948016,12 C6.99948016,9.23857625 9.23805641,7 11.9994802,7 C13.1250861,7 14.1638196,7.37194482 14.9994802,7.99963381 L14.9994802,7 L16.9994802,7 L16.9994802,12 C16.9994802,14.4709309 17.188962,15 17.9994802,15 C19.3038017,15 19.9994802,14.3831576 19.9994802,12 C19.9994802,6.71065115 17.3465307,4 11.9996058,3.99999999 C8.53556463,4.00043539 5.4653428,6.23026454 4.39333267,9.52425543 C3.32132254,12.8182463 4.49109971,16.4279584 7.29137888,18.4670804 C10.0916581,20.5062023 13.8861769,20.5114172 16.6920503,18.48 L17.86491,20.1 C14.3575682,22.6392716 9.61441973,22.6327529 6.11407076,20.0838505 C2.6137218,17.5349481 1.15150033,13.0228079 2.49151299,8.90531931 C3.83152566,4.78783069 7.66930295,2.00054425 11.9994802,2 C18.4608466,2 21.9994802,5.61559885 21.9994802,12 C21.9994802,15.5448749 20.3583817,17 17.9994802,17 C16.6556122,17 15.8865319,16.5667027 15.4643156,15.6048546 Z M11.9994802,15 C13.6563344,15 14.9994802,13.6568542 14.9994802,12 C14.9994802,10.3431458 13.6563344,9 11.9994802,9 C10.3426259,9 8.99948016,10.3431458 8.99948016,12 C8.99948016,13.6568542 10.3426259,15 11.9994802,15 Z" />
      </svg>
    </a>

  );
}

export default Mail;
