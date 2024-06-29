import { useRouteError } from 'react-router-dom';
import './errorPage.style.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error-page'>
      <div className='error-container'>
        <h1 className='error-title'>Oops!</h1>
        <p className='error-message'>Sorry, an unexpected error has occurred.</p>
        <p className='error-status'>
          <i>{error.statusText || error.message}</i>
        </p>
        <a
          href='/'
          className='error-link'
        >
          Go back
        </a>
      </div>
    </div>
  );
}
