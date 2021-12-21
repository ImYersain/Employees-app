import './employees-list-item.css';


const  EmployeesListItem =  (props) => {

    // onIncrease = () => {
    //     this.setState(({increase}) => ({    /* круглые скобки для того чтобы не прописывать return */
    //         increase: !increase             /* задаем новое свойство increase которое будет противоположно тому что было до этого в этом свойстве, то есть работает как тогл */
    //     }))
    // }

    // onLike = () => {
    //     this.setState(({like}) => ({
    //         like: !like
    //     }))    
    // }
    const {name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like} = props;  /* деструктуризируем (разбиваем объект) здесь обьект пропс, который получили с эмплойс-лист(выше по иерархии)*/
        let classNames = "list-group-item d-flex justify-content-between";
        // if(increase){            два варианта условия, либо отдельно. либо в строке но синтаксиз условного(тернарного) оператора
        //     classNames += ' increase';
        // }
        if(like){
            classNames += ' like';
        }
    
    return (
        <li className={increase? classNames += ' increase': classNames} /* пример с тернарным оператором*/ >
            <span className="list-group-item-label" onClick={onToggleLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + " USD"} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie" onClick={onToggleIncrease}></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;