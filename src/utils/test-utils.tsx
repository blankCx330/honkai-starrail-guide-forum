import type { RenderOptions } from "@testing-library/react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { PropsWithChildren, ReactElement } from "react"
import { Provider } from "react-redux"
import type { AppStore } from "../app/store"
import { store } from "../app/store"

type ExtendedRenderOptions = Omit<RenderOptions, "queries"> & {
  store?: AppStore
}

/**
 * 渲染组件并包裹 Redux Provider
 * 
 * @param ui - 要渲染的 React 元素
 * @param extendedRenderOptions - 渲染选项
 */
export const renderWithProviders = (
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) => {
  const { store: providedStore, ...renderOptions } = extendedRenderOptions
  const storeToUse = providedStore ?? store

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={storeToUse}>{children}</Provider>
  )

  return {
    store: storeToUse,
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}