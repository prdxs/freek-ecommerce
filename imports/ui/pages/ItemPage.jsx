import { Session } from 'meteor/session'; // XXX SESSION
import React from 'react';
import Flickity from 'react-flickity';
import { _ } from 'meteor/underscore';

import Item from '../components/Item.jsx';
import Loading from '../components/Loading.jsx';
import Message from '../components/Message.jsx';
import Carousel from '../components/Carousel.jsx';

export default class ItemPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { item, loading, user } = this.props;

        let Item;
        if (loading) {
            return <Loading/>;
        }
        else if (!item) {
            return (
                <Message
                    title="Id del ítem incorrecto"
                    subtitle="No existe ningún ítem con dicho Id"
                />
            );
        } else {
            return (
                <div className="page item-page">
                    <h1 className="title">{item.title}</h1>
                    <h2 className="owner">publicado por {item.username}</h2>
                    <h3 className="date">{item.createdAt.toLocaleString('es')}</h3>
                    <p className="description">{item.description}</p>
                    <Carousel images={item.images}/>
                </div>
            );
        }
    }
}

ItemPage.propTypes = {
    item: React.PropTypes.object,
    loading: React.PropTypes.bool,
    user: React.PropTypes.object
};