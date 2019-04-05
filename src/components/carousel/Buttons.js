import React, {useRef} from 'react'
import classnames from 'classnames'

export const Prev = ({
  Tag = 'button',
  className,
  children,
  containerWidth,
  containerLeft,
  setTranslateX,
  translateX,
  movableWidth,
  end,
  setEnd,
  itemWidth,
  itemSpacing,
  setItems,
  items,
  ...otherProps,
}) => {
  const el = useRef(null)

  return (
    <Tag
      ref={el}
      style={{
        left: el.current && (el.current.offsetWidth + 10) * -1
      }}
      onClick={() => {
        let x = translateX + containerWidth
        if (x > 0)
          x = 0
        setTranslateX(x)
      }}
      className={classnames(className, 'wtp-csel-nav prev', {disabled: (end === 'left' || end === 'both')})}
      disabled={(end === 'left' || end === 'both')}
      {...otherProps}>
      {children? children: 'Prev'}
    </Tag>
  )
}

export const Next = ({
  Tag = 'button',
  className,
  children,
  containerWidth,
  containerLeft,
  setTranslateX,
  translateX,
  movableWidth,
  end,
  setEnd,
  itemWidth,
  itemSpacing,
  setItems,
  items,
  ...otherProps
}) => {
  const el = useRef(null)
  return (
    <Tag
      ref={el}
      style={{
        right: el.current && (el.current.offsetWidth + 10) * -1
      }}
      onClick={() => {
        let x = translateX - containerWidth
        let widthDiff = movableWidth - containerWidth
        if (Math.abs(x) > widthDiff)
          x = widthDiff * -1
        setTranslateX(x)
      }}
      className={classnames(className, 'wtp-csel-nav next', {disabled: (end === 'right' || end === 'both')})}
      disabled={(end === 'right' || end === 'both')}
      {...otherProps}>
      {children? children: 'Next'}
    </Tag>
  )
}

