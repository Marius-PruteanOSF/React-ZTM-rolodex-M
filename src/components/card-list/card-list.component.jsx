import { Component } from "react";
import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({monsters}) => (
    <div className="card-list">
        {monsters.map(monster => {
            return <Card monster={monster}/>
        })} 
    </div>
);

class CardListC extends Component {
    render () {
        //console.log(this.props);
        const { monsters } = this.props
        //console.log(monsters[0].id);
        return (
            <div className="card-list">
                {monsters.map(monster => {
                    return (
                        <Card monster={monster}/>
                )})} 
            </div>
        )
    }
}

export default CardList;