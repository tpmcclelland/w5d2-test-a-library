// Your DOM library code goes here inside of an IIFE and must set a global variables called md.

(function() {
    'use strict'

    var one = function(selector) {
        return document.querySelector(selector)
    }

    var all = function (selector, array = false) {
        var results = document.querySelectorAll(selector)
        if (array) {
            return Array.from(results)
        } else {
            return results
        }
    }

    var remove = function (selector) {
        one(selector).remove()
        return window.md
    }

    var addClass = function (selector, cssClass) {
        one(selector).classList.add(cssClass)
        return window.md
    }

    var removeClass = function (selector, cssClass) {
        one(selector).classList.remove(cssClass)
        return window.md
    }

    var hasClass = function (selector, cssClass) {
        return one(selector).classList.contains(cssClass)
    }

    var getAttr = function (selector, attr) {
        return one(selector).getAttribute(attr)
    }

    var setAttr = function (selector, attr, value) {
        one(selector).setAttribute(attr, value)
        return window.md
    }

    var setHTML = function (selector, html) {
        one(selector).innerHTML = html;
        return window.md
    }

    var getHTML = function (selector) {
        return one(selector).innerHTML
        return window.md
    }

    var ajax = function (url, successCallback) {
        fetch(url)
            .then(res => res.json())
            .then(successCallback)
    }

    var getProp = function (selector, prop) {
        return one(selector)[prop]
    }

    var setProp = function (selector, prop, value) {
        one(selector)[prop] = value
        return window.md
    }

    var getValue = function (selector) {
        return one(selector).value
    }

    var setValue = function (selector, value) {
        one(selector).value = value
        return window.md
    }

    var addEvent = function(selector, event, callback) {
        one(selector).addEventListener(event, callback)
        return window.md
    }

    var removeEvent = function(selector, event, callback) {
        one(selector).removeEventListener(event, callback)
        return window.md
    }

    var clone = function (selector) {
        return one(selector).cloneNode(true)
    }

    var getStyle = function (selector) {
        return getComputedStyle(one(selector))
    }

    var setStyle = function (selector, prop, value) {
        one(selector).style[prop] = value
        return window.md
    }

    var flipPage = function(degrees = 180) {
        md.setStyle('body', 'transform', 'rotate(' +  degrees + 'deg)')
    }

    window.md = {
        one,
        all,
        remove,
        addClass,
        removeClass,
        hasClass,
        getAttr,
        setAttr,
        setHTML,
        getHTML,
        ajax,
        getProp,
        setProp,
        getValue,
        setValue,
        addEvent,
        removeEvent,
        clone,
        getStyle,
        setStyle,
        flipPage
    }
}())
