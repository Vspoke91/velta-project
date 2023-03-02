const Animation =
{
    fadeIn: (horizontal, vertical) => {

        if(!horizontal)
            if(horizontal != 0)
                horizontal = -100;
        
        if(vertical)
            vertical =  -1 * vertical;
      
        return {
          hidden: { 
            x: horizontal,
            y: vertical,
            opacity: 0,
          },
          show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              ease: "easeOut", 
              duration: 2,
              opacity: { duration: 1.5},
            }
          }
        }
    },

    resize: (scale, color) => {
        return {
            show: {
                scale: scale,
                color: color,
                transition: {
                  duration: 0.6,
                }
            }
          }
    },
}

export default Animation;