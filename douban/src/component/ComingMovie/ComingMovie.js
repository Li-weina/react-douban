import React, { Component } from 'react'
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card'
import style from './ComingMovie.css'

class ComingMovie extends Component {
    render () {
        const { title, genres, images, year, casts } = this.props
        console.log(casts)
        return (
            <li className={style['coming-move']}>
                <Card>
                    <CardHeader
                        title={year}
                        subtitle={genres[0]}
                        avatar={images.small}
                        className={style['card-header']}
                    />
                    <CardMedia>
                        <img src={images.large} width="147" height="220" alt="" />
                    </CardMedia>
                    <CardTitle subtitle={title} />
                </Card>    
            </li>
        )
    }
}

export default ComingMovie