import React, {useState, useEffect} from 'react'
import classnames from 'classnames'
import './styles.scss'
import {ItemsContainer} from './ItemsContainer'
import {Prev, Next} from './Buttons'

const Carousel = ({
  container,
  className,
  children,
  showCase,
  uniqueId,
  itemSpacing,
  ...otherProps
}) => {
  useEffect(() => { // didmount init()
    let width = container.current.getBoundingClientRect().width
    setContainerWidth(width)
    let left = container.current.getBoundingClientRect().left
    setContainerLeft(left)
  }, [uniqueId])

  // containers
  const [containerWidth, setContainerWidth] = useState(0) // container width
  const [containerLeft, setContainerLeft] = useState(0) // container left
  const [movableWidth, setMovableWidth] = useState(0) // init scrollWidth
  const [translateX, setTranslateX] = useState(0) // move wtp-csel-mc
  const [end, setEnd] = useState('')
  const [items, setItems] = useState({})

  useEffect(() => { // set nav buttons disabled
    let widthDiff = movableWidth - containerWidth
    let translateXAbs = Math.abs(translateX)

    if (movableWidth < containerWidth) {
      setEnd('both')
    } else if (translateXAbs === widthDiff) {
      setEnd('right')
    } else if (translateX === 0) {
      setEnd('left')
    } else {
      setEnd('')
    }
  }, [translateX, containerWidth])
  console.log(items)
  return (
    <div className={classnames(className, 'wtp-csel')} {...otherProps}>
      {
        React.Children.map(children, (child) => {
          let props = {
            containerWidth,
            containerLeft,
            itemSpacing,
            translateX,
            setItems,
            items,
          }
          if (child.type === Next || child.type === Prev) {
            props['setTranslateX'] = setTranslateX
            props['movableWidth'] = movableWidth
            props['setEnd'] = setEnd
            props['end'] = end
          } else if (child.type === ItemsContainer) {
            props['setMovableWidth'] = setMovableWidth
          }
          return React.cloneElement(child, {
            ...child.props,
            ...props
          })
        })
      }
    </div>
  )
}

export default Carousel
