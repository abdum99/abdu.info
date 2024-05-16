export const fadeInTopMotionVariant = {
  offscreen: {
    y: -40,
    opacity: 0,
    transition: {
        delay: 2.3,
    },
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 1
    }
  }
};

export const fadeInBottomMotionVariant = {
  offscreen: {
    y: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 1
    }
  }
};

// TODO: merge onScren and onScreenDelay and change all uses
export const fadeInLeftMotionVariant = {
  offscreen: {
    x: -10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease-in",
      duration: 0.8
    }
  },
  onscreenDelay: i => ({
    x: -10,
    opacity: 0,
    transition: {
        type: "ease-in",
        duration: 0.8,
        delay: i * 2,
    },
  }),
};