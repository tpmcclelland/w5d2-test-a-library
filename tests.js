// Mocha & Chai Test Suite (for Tuesday's assignment)
var expect = chai.expect

describe('MoDom', function() {
  describe('md Global Variable', function() {
    it('should exist', function() {
      expect(md).to.exist
    })
  })

  describe('md.one()', function() {
      it('should return a dom element', function() {
          var element = md.one('table')
          expect(element).to.exist
      })

      it('should return only one element ', function() {
          var element = Array.from(md.one('tr'))
          expect(element).to.have.lengthOf(0)
      })
  })

  describe('md.all()', function() {
    it('should return all elements matching the selector', function() {
      var elements = md.all('tr')
      expect(elements).to.have.length.above(0)
    })

    it('should return all elements as an array', function() {
      var elements = md.all('tr', true)
      expect(elements).to.be.an.instanceOf(Array)
    })
  })

  describe('md.remove()', function() {
    it('should remove an element from the DOM', function() {
      var element = document.createElement('div')
      element.id = 'test-div'
      document.body.appendChild(element)
      md.remove('#test-div')
      expect(document.querySelector('#test-div')).to.not.exist
    })
  })

  describe('md.addClass()', function() {
    it('should add a CSS class', function() {
      md.addClass('body', 'test')
      expect(document.body.classList.contains('test')).to.be.true
    })
  })

  describe('md.removeClass()', function() {
    it('should remove a CSS class', function() {
      md.removeClass('h1', 'page-header')
      expect(document.body.classList.contains('page-header')).to.not.be.true
    })
  })

  describe('md.hasClass()', function() {
    it('should have a CSS class', function() {
      expect(md.hasClass('img', 'img-responsive')).to.be.true
    })
  })

  describe('md.getAttr()', function () {
    it('should get one attribute for the element', function () {
      var attribute = md.getAttr('img:first-child', 'width')
      expect(attribute).to.equal('200')
    })
  })

  describe('md.setAttr()', function () {
    it('should set an attribute for the element', function () {
      md.setAttr('img:first-child', 'alt', 'this is my alt')
      expect(document.querySelector('img').alt).to.equal('this is my alt')
    })
  })

  describe('md.setHTML()', function() {
    it('should set the inner HTML of an element', function() {
        md.setHTML('h1', 'tom is cool')
        expect(document.querySelector('h1').innerHTML).to.equal('tom is cool')
    })
  })

  describe('md.getHTML()', function() {
    it('should get the inner HTML of an element', function() {
        expect(md.getHTML('h4')).to.equal('Winter (Q1)')
    })
  })

    describe('md.ajax()', function() {
      it('should complete without error', function(done) {
        md.ajax('http://swapi.co/api/people', function() {
          done()
        })
        // console.log(done)
      });
    });

    describe('md.getProp()', function() {
      it('should get a property for an element', function() {
        var prop = md.getProp('img', 'nodeName')
        expect(prop).to.equal('IMG')
      })
    })

    describe('md.setProp()', function() {
      it('should set a property for an element', function() {
        md.setProp('img', 'hidden', true)
        expect(document.querySelector('img').hidden).to.be.true
      })
    })

    describe('md.getValue()', function() {
      it('should get a form input value', function() {
        expect(md.getValue('input')).to.exist
      })
    })

    describe('md.setValue()', function() {
      it('should set a form input value', function() {
        md.setValue('input', 'Tom is Cool')
        expect(document.querySelector('input').value).to.equal('Tom is Cool')
      })
    })

})

describe('md.flipPage()', function() {
    it('should flip the page upside down', function() {
        md.flipPage(180)
        expect(document.body.style.transform).to.equal('rotate(180deg)')
        //flip the page back
        md.flipPage(360)
    })
})
