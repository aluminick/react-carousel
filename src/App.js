import React, {useRef} from 'react';
import './App.css';
import Carousel, {
  ItemsContainer,
  Item,
  Prev,
  Next,
} from './components/carousel'

const App = () => {
  const sliderContainerEl = useRef(null)
  return (
    <div className="App">
      Slider
      <div
        ref={sliderContainerEl}
        className="my-container">
        <Carousel
          container={sliderContainerEl}
          uniqueId='foobar'
          itemSpacing={10}
          className="my-class">
          <Prev />
          <ItemsContainer>
            <Item>
              <span>Item</span>
            </Item>
            <Item>
              <span>Item</span>
            </Item>
            <Item>
              <span>Item</span>
            </Item>
            <Item>
              <span>Item4</span>
            </Item>
            <Item>
              <span>Item5</span>
            </Item>
            <Item>
              <span>Item6</span>
            </Item>
            <Item>
              <span>Item7</span>
            </Item>
            <Item>
              <span>Item8</span>
            </Item>
            <Item>
              <span>Item9</span>
            </Item>
            <Item>
              <span>Item10</span>
            </Item>
            <Item>
              <span>Item11</span>
            </Item>
            <Item>
              <span>Item12</span>
            </Item>
            <Item>
              <span>Item13</span>
            </Item>
            <Item>
              <span>Item14</span>
            </Item>
            <Item>
              <span>Item15</span>
            </Item>
            <Item>
              <span>Item16</span>
            </Item>
            <Item>
              <span>Item17</span>
            </Item>
            <Item>
              <span>Item18</span>
            </Item>
          </ItemsContainer>
          <Next />
        </Carousel>
      </div>
    </div>
  )
}

export default App;
