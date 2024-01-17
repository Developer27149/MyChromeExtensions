import { animated, useSpring } from "@react-spring/web"

import { Container } from "@radix-ui/themes";
import { EZIndex } from "~utils/types/enums"
// @ts-ignore
import SD from "data-url:../../assets/cat.gif"
import { loadingStore } from "~stores"
import { useAtom } from "jotai"

export default function () {
  const [loading, setLoading] = useAtom(loadingStore)
  const startSprings = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 1000 },
    delay: 1500
  })

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  })
  const delaySprings = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
    delay: 1000,
    onResolve: () => {
      setTimeout(() => {
        setLoading(false)
      }, 1000 * 3)
    }
  })
  return (
    <Container
      className="bg-white fixed inset-0"
      style={{ zIndex: loading ? EZIndex.globalLoading : -1 }}>
      <div className="flex justify-center items-center gap-4 flex-col h-screen">
        <img src={SD} alt="my cat" width={64} className="rounded-sm mb-24" />
        <animated.div
          style={springs}
          className="text-center text-xl font-bold leading-[24px] px-12">
          停止下一个计划，
        </animated.div>
        <animated.div
          style={delaySprings}
          className="text-center text-xl font-bold leading-[24px] px-12 pl-28">
          直到这个计划完结。
        </animated.div>
        <animated.button
          style={startSprings}
          className={"mt-8"}
          onClick={() => setLoading(false)}>
          <div className="relative group">
            LET'S GO
            <span className="scale-x-0 h-[2px] origin-center absolute bottom-0 left-0 right-0 bg-blue-400 transition-all group-hover:w-[50px] group-hover:scale-x-100"></span>
          </div>
        </animated.button>
      </div>
    </Container>
  )
}