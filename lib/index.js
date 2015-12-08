
/**
 * @todo
 * @link http://youmightnotneedjquery.com/#add_class
 */
export function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else {
    el.className += ' ' + className
  }
}

/**
 * @todo
 * @link http://youmightnotneedjquery.com/#remove_class
 */
export function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className)
  } else {
    let pattern = `(^|\\b)${className.split(' ').join('|')}(\\b|$)`
    el.className = el.className.replace(new RegExp(pattern, 'gi'), ' ')
  }
}

/**
 * @todo
 * @link http://youmightnotneedjquery.com/#ready
 */
export function ready(fn) {
  if (document.readyState != 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}
