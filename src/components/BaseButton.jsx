function BaseButton({children, styleName, ...props}) {
    return (
        <button {...props} className={`max-w-xs w-full px-3 py-3 rounded border-solid border-2 font-bold text-red-500
        focus:ring focus:border-blue-500 outline-none border-blue-400 bg-blue-500 text-white ${styleName}`}>
            {children}
        </button>
    );
  }
  
  export default BaseButton;
  