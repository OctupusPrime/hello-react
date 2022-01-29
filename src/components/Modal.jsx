function Modal({children, visible, setVisible}) {
    return (
        <div className={"modal" + (visible ? " active" : "")}
                onClick={() => setVisible(false)}>
            <div className="p-6 bg-white rounded min-w-[250px]"
                    onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
  
export default Modal;
  