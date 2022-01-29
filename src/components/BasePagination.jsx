function BasePagination({totalPage, page, changePage}) {
    return (
        <div className="flex justify-center mt-4">
            {totalPage.map((p) => 
            <button 
                className={p === page ? 'page-index current' : 'page-index'} 
                key={p}
                onClick={() => changePage(p)}>
                {p}
            </button>
            )}
        </div>
    );
}
  
export default BasePagination;
  