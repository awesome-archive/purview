import { connectWebSocket } from "./client"

// Polyfill closest() for browsers that don't support it.
if (
  !(Element.prototype.closest as typeof Element.prototype.closest | undefined)
) {
  Element.prototype.closest = function(selector: string): Element | null {
    if (!(document.documentElement as Element).contains(this)) {
      return null
    }

    let elem: Element | null = this
    do {
      if (elem.matches(selector)) {
        return elem
      }
      elem = elem.parentElement
    } while (elem !== null)

    return null
  }
}

connectWebSocket(window.location)
