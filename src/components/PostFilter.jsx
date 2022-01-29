import BaseInput from './BaseInput';
import BaseSelect from './BaseSelect';

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <BaseInput 
                styleName='mb-4'
                placeholder="Поиск..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}/>
            <BaseSelect
                defaultVal='Сортировка по' 
                options={[
                {value: 'title', title: 'По названию'}, 
                {value: 'body', title: 'По описанию'}
                ]}
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}/>
        </div>
    );
}
  
  export default PostFilter;
  