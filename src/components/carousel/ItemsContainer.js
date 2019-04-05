import React, {useRef, useEffect} from 'react'
import classnames from 'classnames'

export const Item = ({
  index,
  Tag = 'div',
  className,
  children,
  containerWidth,
  containerLeft,
  setItems,
  items,
  ...otherProps
}) => {
  useEffect(() => {
    // set new item width
    let item = el.current
    let itemWidth = item.getBoundingClientRect().width
    let itemLeft = item.getBoundingClientRect().left
    let itemVisible = 0
    if ((itemWidth+itemLeft) < (containerWidth+containerLeft)) {
      itemVisible = 1
    }

    let updatedItems = Object.assign({}, {...items})
    updatedItems[index] = {
      width: itemWidth,
      visible: itemVisible,
    }

    setItems(updatedItems)
    
  }, [containerWidth, containerLeft])

  
  const el = useRef(null)
  return (
    <Tag
      ref={el}
      className={classnames(className, 'wtp-csel-item')}
      {...otherProps}>
      {children}
    </Tag>
  )
}

export const ItemsContainer = ({
  Tag = 'div',
  className,
  children,
  containerWidth,
  containerLeft,
  itemSpacing,
  translateX,
  setMovableWidth,
  setItems,
  items,
  ...otherProps,
}) => {

  const movableEl = useRef(null)
  useEffect(() => {
    setMovableWidth(movableEl.current.scrollWidth)
  }, [])

  function renderChild(child, index) {
    if (child.type !== Item)
      return null

    let childProps = {
      index,
      containerWidth,
      containerLeft,
      setItems,
      items,
    }
    let styleProp = {}
    if (index !== children.length-1)
      styleProp['marginRight'] = itemSpacing
    childProps['style'] = styleProp

    return React.cloneElement(child, {
      ...child.props,
      ...childProps
    })
  }
  return (
    <Tag
      className={classnames(className, 'wtp-csel-itemc')}
      style={{
        width: containerWidth
      }}
      {...otherProps}>
      <div
        ref={movableEl}
        className="wtp-csel-mc"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: `transform 0.3s`
        }}>
        {
          React.Children.map(children, renderChild)
        }
      </div>
    </Tag>
  )
}