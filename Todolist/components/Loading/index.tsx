import { Container } from "@radix-ui/themes"
import { animated, useSpring } from "@react-spring/web"
import Icon from "data-base64:~assets/icon.png"

import { EZIndex } from "~utils/types/enums"

export default function ({ loading }: { loading: boolean }) {
  const springs = useSpring({
    from: { opacity: 0.2 },
    to: { opacity: 1 },
    loop: { reverse: true },
    config: { duration: 700 }
  })
  return (
    <Container
      className="bg-white fixed inset-0"
      style={{ zIndex: loading ? EZIndex.globalLoading : -1 }}>
      <div className="flex justify-center items-center gap-4 flex-col h-screen">
        <img src={Icon} width={81} />
        <animated.div style={springs} className="text-center text-md">
          loading...
        </animated.div>
      </div>
    </Container>
  )
}
