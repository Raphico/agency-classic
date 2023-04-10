export const pricingAnimation = {
  initial: {
    opacity: 0,
    y: "20px"
  },
  animate: {
    opacity: 1,
    y: "0"
  },
  transition: {
    duration: 0.5
  }
}

export const QAanimation = {
  initial: { 
    opacity: 0, 
    height: 0 
  },
  animate: { 
    opacity: 1, 
    height: "auto" 
  },
  exit: { 
    opacity: 0, 
    height: 0 
  },
  transition: { 
    duration: 0.3 
  }
}