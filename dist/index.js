'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.ready = ready;

/**
 * @todo
 * @link http://youmightnotneedjquery.com/#add_class
 */
function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

/**
 * @todo
 * @link http://youmightnotneedjquery.com/#remove_class
 */
function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    var pattern = '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)';
    el.className = el.className.replace(new RegExp(pattern, 'gi'), ' ');
  }
}

/**
 * @todo
 * @link http://youmightnotneedjquery.com/#ready
 */
function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}