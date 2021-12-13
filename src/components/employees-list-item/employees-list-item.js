import './employees-list-item.css';

const EmployeesListItem = ({name, salary, increase}) => {

    let classNames = "list-group-item d-flex justify-content-between";
        // if(increase){            два варианта условия, либо отдельно. либо в строке но синтаксиз условного(тернарного) оператора
        //     classNames += ' increase';
        // }
    
    return (
        <li className={increase? classNames += ' increase': classNames} /* пример с тернарным оператором*/ >
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + " USD"} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;