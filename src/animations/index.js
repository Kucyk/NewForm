export const getDefaultAnimationOptions=(icon,loop)=>(
    {
      loop: loop,
      autoplay: true,
      animationData: icon,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
  )