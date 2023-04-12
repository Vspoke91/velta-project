const Animation =
{
  fadeIn: (horizontal, vertical) => {
    if (!horizontal) {
      if (horizontal !== 0) { horizontal = -100 }
    }

    if (vertical) { vertical = -1 * vertical }

    return {
      hidden: {
        x: horizontal,
        y: vertical,
        opacity: 0
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          ease: 'easeOut',
          duration: 2,
          opacity: { duration: 1.5 }
        }
      }
    }
  },

  resize: (scale, color) => {
    return {
      show: {
        scale,
        color,
        transition: {
          duration: 0.6
        }
      }
    }
  },

  fadeOut: (opacity) => {
    return {
      fade: {
        opacity,
        transition: {
          ease: 'easeOut',
          duration: 0.5
        }
      }
    }
  },

  foldOut: (direction, duration) => {

    let yDegree = 0
    let xDegree = 0

    if (direction === 'vertical')
      xDegree = 90;
    else if (direction === 'horizontal')
      yDegree = 90;
    else
      xDegree = 90;

    if (!duration)
      duration = 1;


    return {
      hidden: {
        opacity: 0,
        rotateX: xDegree,
        rotateY: yDegree
      },
      show: {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        transition: {
          ease: 'easeOut',
          duration: duration,
        }
      }
    }
  },

  childDelay: (childrenDelay) => {
    if (!childrenDelay)
      childrenDelay = 0.5

    return {
      show: {
        transition: {
          staggerChildren: childrenDelay,
        }
      }
    }
  }
}

export default Animation
