import './Button.css';

export default function Button({text, onClick}) {
  return (
    <div>
      <div className='reg-nav-button'>
            <button
              title=""
              onClick={onClick}
            >{text}
            </button>
        </div>
    </div>
  )
}