function BaseInput({styleName, ...props}) {
    return (
        <input type="text" {...props} className={`bg-white rounded text-base px-4 py-3 border-2 border-gray-300 w-full 
        focus:outline-none focus:ring focus:border-blue-500 ${styleName}`}/>
    );
  }
  
  export default BaseInput;
  