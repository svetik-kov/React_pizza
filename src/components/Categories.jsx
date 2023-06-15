import React, {useState} from 'react';

/*export class Categories  extends React.Component{
    state={
        activeItems:3,
    };

    onSelectItem=(index)=>{
       this.setState({
           activeItems:index
       })
    }

   render() {
       const {onClick,items}=this.props
       return (
           <div className="categories">
               <ul>
                   <li >Все</li>
                   {items.map((name,index)=> (
                       <li
                           className={this.state.activeItems===index?"active":''}
                           key={`${name}_${index}`}
                           onClick={()=>this.onSelectItem(index)}
                       >{name}</li>))}
               </ul>
           </div>
       );
   }
}*/

export const Categories = ({items,onClick}) => {
    const [activeItems,setActiveItems]=useState(null)
    console.log('activeItems: ' + activeItems)
    const onSelectItem=(index)=>{
        setActiveItems(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItems===null?'active':''} onClick={()=>onSelectItem(null)} >Все</li>
                {items && items.map((name,index)=> (
                    <li className={activeItems===index?'active':''}
                        key={`${name}_${index}`}
                        onClick={()=>onSelectItem(index)}
                    >{name}</li>))}
            </ul>
        </div>
    );
};

