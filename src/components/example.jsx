import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import styled from "styled-components";
import image from '../assets/choice.png'
import image2 from '../assets/reflect.png'

function Example(props) {
    var items = [
        {
            name: "Choice Card Image #1",
            description: "Probably the most random thing you have ever seen!",
            imageurl:image
          
        },
        {
            name: "Reflect Card Image #2",
            description: "Hello World!",
            imageurl:image2
        }
    ]

    return (
        <Section>
            <div className="sales">
                <div className="sales__details">
                    <div>
                        <h4>Courasel example</h4>
                    </div>
                    <div>
                        <h5>2 items</h5>
                    </div>
                </div>
                <div className="sales__graph">


                    <Carousel>
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>

                </div>
            </div>
        </Section>
    )
}
const Section = styled.section`.sales{
                        
    margin-top:100px
}

                    `;
function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src={props.item.imageurl} />

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Example;