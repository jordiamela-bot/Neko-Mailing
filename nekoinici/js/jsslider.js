(function(factory){
    factory(window.jQuery);
}(function($){
    'use strict';
    var slider;
    slider = function(element, options) {
        var self = this;
        self._slider = $(element);
        self.banItems; 
        self.navItems; 
        self.navWrap; 
        self.navBgWrap; 
        self.prevOneBtn; 
        self.nextOneBtn; 
        self.prevPageBtn; 
        self.nextPageBtn; 
        self.length; 
        self.curIndex; 
        self.curPage; 
        self.pages; 
        self.navItemWidth; 
        self.opts; 
        self.timer; 
        self.timer2; 
        self.offset; 
        self.initialed = false; 
        self.sliding = false; 
        self.slideQueue = [];
        self.slideQueueLock = false;
        self.init(options);
        self.run();
    }
    slider.prototype = {
        constructor: slider,
        init: function (options) {
        var self = this;
        self.initialed = self._slider.attr('initialed');
        if(!self.initialed) {
            self.opts = $.extend($.fn.slider.defaults, options);
            self.setCurIndex(self.getCurIndex());
            self.banItems = self._slider.find('.' + self.opts.banItemClass);
            self.navItems = self._slider.find('.' + self.opts.navItemClass);
            self.navWrap = self._slider.find('.' + self.opts.navWrapClass);
            self.navBgWrap = self._slider.find('.' + self.opts.navBgWrapClass);

            self.setLength(self.getLength());
            self.setNavItemWidth(self.getNavItemWidth());

            self.banItems.css('z-index', '1').eq(self.getCurIndex()).css('z-index','0');
            self.navWrap.css('z-index', '1');
            self.navBgWrap.css('z-index', '1');
            self.navItems.parent().css('position', 'relative').css('width', self.navItems.length*self.getNavItemWidth() - parseInt(self.navItems.eq(0).css('marginRight'))).css({height:self.navItems.eq(0).height()});
            self.navWrap.css({width:self.navItems.parent().width, height:self.navItems.eq(0).height()});
            self.navItems.css('position', 'absolute');
            self.navItems.each(function(){$(this).css({'top':0, 'left':$(this).index() * self.getNavItemWidth()})});
            self.navItems.eq(self.navItems.length - 1).css('margin-right', 0);

            self.prevOneBtn = self._slider.find('.' + self.opts.prevOneBtnClass);
            self.nextOneBtn = self._slider.find('.' + self.opts.nextOneBtnClass);
            self.prevPageBtn = self._slider.find('.' + self.opts.prevPageBtnClass);
            self.nextPageBtn = self._slider.find('.' + self.opts.nextPageBtnClass);

            self.setPages(self.setPages());
            self.setCurPage(self.getCurPage());
            self.setOffset(self.getOffset());

            self.banItems.hide();
            self.banItems.eq(self.getCurIndex()).show();
            self.navItems.removeClass(self.opts.curClass);
            self.navItems.eq(self.getCurIndex()).addClass(self.opts.curClass);

            if(self.opts.event == 'hover') {
                self.navItems.bind('mouseover',function() {
  					        self.stop();
  					        var _index = $(this).index();
                    self.slideQueueAdd(_index, false, self.getSlidTimeout()).slideQueueExec();
                });
  			    }
            self.navItems.bind('click',function(){
                self.stop();
                var _index = $(this).index();
                self.slideQueueAdd(_index, false, self.getSlidTimeout()).slideQueueExec();
            }).bind('mouseleave',function(){
                self.start();
            });

            self.prevOneBtn.mouseenter(function(){self.stop()}).mouseleave(function(){self.start()}).click(function(){
              self.slideQueueAdd(self.getPrevIndex(), false, self.getSlidTimeout()).slideQueueExec();
            });
            self.nextOneBtn.mouseenter(function(){self.stop()}).mouseleave(function(){self.start()}).click(function(){
              self.slideQueueAdd(self.getNextIndex(), false, self.getSlidTimeout()).slideQueueExec();
            });
            self.prevPageBtn.mouseenter(function(){self.stop()}).mouseleave(function(){self.start()}).click(function(){self.prevPage()});
            self.nextPageBtn.mouseenter(function(){self.stop()}).mouseleave(function(){self.start()}).click(function(){self.nextPage()});

            self._slider.attr('initialed','true');
            self.initialed = true;
        }
    },
    
  	setLength: function(_length) {
        var self = this;
        self.length = _length;
        return self.length;
  	},
  
    getLength: function() {
        var self = this;
        return self.initialed ? self.length : self._slider.find('.' + self.opts.banItemClass).length;
  	},
 
  	setCurIndex: function(_index){
        var self = this;
        self.curIndex = _index;
        return self.curIndex;
  	},

  	getCurIndex: function(){
        var self = this;
        var _index = typeof self.curIndex == 'undefined' ? 0 : parseInt(self.curIndex);
        _index = isNaN(_index) ? 0 : _index;
        return _index;
  	},

  	getPrevIndex: function(){
        var self = this;
        var _preIndex;
        var _curIndex = self.getCurIndex();
        var _length = self.getLength();
        if(_curIndex < 1){
            _preIndex = _length - 1;
        }else{
            _preIndex = _curIndex - 1;
        }
        return _preIndex;
  	},

    getNextIndex: function() {
        var self = this;
        var _nextIndex;
        var _curIndex = self.getCurIndex();
        var _length = self.getLength();

        if(_curIndex >= _length - 1) {
            _nextIndex = 0;
        } else {
            _nextIndex = _curIndex + 1;
        }
        return _nextIndex;
  	},

  	setNavItemWidth: function(_width) {
        var self = this;
        self.navItemWidth = _width;
        return self.navItemWidth;
  	},

  	getNavItemWidth: function() {
        var self = this;
        if(self.initialed) {
  			    return self.navItemWidth;
        }
        if(!self.navItems) {
  			    self.navItems = self._slider.find('.' + self.opts.navItemClass);
        }
        var _width = $(self.navItems).eq(0).width();

        var _margin_left = parseFloat($(self.navItems).eq(0).css('margin-left'));
        _margin_left = isNaN(_margin_left) ? 0 : _margin_left;
        var _margin_right = parseFloat($(self.navItems).eq(0).css('margin-right'));
        _margin_right = isNaN(_margin_right) ? 0 : _margin_right;
        var _padding_left = parseFloat($(self.navItems).eq(0).css('padding-left'));
        _padding_left = isNaN(_padding_left) ? 0 : _padding_left;
        var _padding_right = parseFloat($(self.navItems).eq(0).css('padding-right'));
        _padding_right = isNaN(_padding_right) ? 0 : _padding_right;
        var _border_left_width = parseFloat($(self.navItems).eq(0).css('border-left-width'));
        _border_left_width = isNaN(_border_left_width) ? 0 : _border_left_width;
        var _border_right_width = parseFloat($(self.navItems).eq(0).css('border-right-width'));
        _border_right_width = isNaN(_border_right_width) ? 0 : _border_right_width;

        _width = _width + _margin_left + _margin_right + _padding_left + _padding_right + _border_left_width + _border_right_width;
        return _width;
    },

    getOffset: function() {
        var self = this;
        var _offset = typeof self.offset == 'undefined' ? 0 : parseInt(self.offset);
        _offset = isNaN(_offset) ? 0 : _offset;
        return _offset;
  	},

    setOffset: function(_offset) {
        var self = this;
        self.offset = _offset;
        return self.offset;
  	},

  	getPages: function() {
        var self = this;
        return self.initialed ? self.pages : Math.ceil(self.getLength()/self.opts.perpage);
  	},

  	setPages: function(_pages) {
        var self = this;
        self.pages = _pages;
        return self.pages;
  	},

  	setCurPage: function(_page) {
        var self = this;
        self.curPage = _page;
        return self.curPage;
  	},

  	getCurPage: function() {
        var self = this;
        var _curPage = typeof self.curPage == 'undefined' ? 1 : parseInt(self.curPage);
        _curPage = isNaN(_curPage) ? 1 : _curPage;
        return _curPage;
  	},

  	getNextPage: function() {
        var self = this;
        var _curPage = self.getCurPage();
        return  _curPage < self.getPages() ? _curPage + 1 : 1;
  	},

  	getPrevPage: function() {
        var self = this;
        var _curPage = self.getCurPage();
        return  _curPage > 1 ? _curPage - 1 : self.getPages();
  	},

  	page: function(_page, hasSilde) {
        var self = this;
        var hasSilde = typeof hasSilde == 'undefined' ? false : (hasSilde ? true : false);
        var _pages = self.getPages();
        var _curPage = self.getCurPage();
        var _navItemWidth = self.getNavItemWidth();
        var _offset = self.getOffset();
        var r_offset = 0;
        if(_page == _curPage || _page < 1 || _page > _pages || _pages < 2)
            return false;

        r_offset = -1 * (_page - _curPage) * self.opts.perpage * _navItemWidth; 
        _offset += r_offset;
        var maxOffset = 0, minOffset = -1 * (self.getLength() - self.opts.perpage) * _navItemWidth;
        _offset = _offset > maxOffset ? maxOffset : (_offset < minOffset ? minOffset : _offset); 


        $(self.navItems).each(function(){$(this).css('left', _offset + $(this).index() * self.getNavItemWidth())});

        if(!hasSilde){

            var _index = 0;
            _index = parseInt(-1 * _offset / _navItemWidth);
            if(_page > _curPage && _index <= self.getCurIndex() || _page < _curPage && self.getCurIndex() - _index < opts.perpage)
  				      _index = self.getCurIndex();
            self.slideQueueAdd(_index, true, self.getSlidTimeout()).slideQueueExec();

  		  }

        self.setOffset(_offset);
        self.setCurPage(_page);
  	},

  	nextPage: function() {
        var self = this;
        self.page(self.getNextPage());
  	},

  	prevPage: function() {
        var self = this;
        self.page(self.getPrevPage());
  	},

  	getIndexInPage: function(_index) {
        var self = this;
        var _index = typeof _index == 'undefined' ? self.getCurIndex() : _index;
        var _indexInPage = 0;
        var _offset = self.getOffset();

        var leftOffset = 0;
        var leftIndex = 0;
        leftOffset = _offset + self.getCurIndex() * self.getNavItemWidth();
        leftIndex = self.getCurIndex() - Math.ceil(leftOffset/self.getNavItemWidth());
        if(_index >= leftIndex && _index < leftIndex + self.opts.perpage) {
            _indexInPage = self.getCurPage();
        } else if(_index < leftIndex) {
            _indexInPage = self.getCurPage() - Math.ceil((leftIndex - _index)/self.opts.perpage);
            _indexInPage = _indexInPage < 1 ? 1 : _indexInPage;
        } else {
            _indexInPage = self.getCurPage() + Math.ceil((_index - leftIndex - self.opts.perpage + 1)/self.opts.perpage);
            _indexInPage = _indexInPage > self.getPages() ? self.getPages() : _indexInPage;
        }

        return _indexInPage;
  	},
    getSlidTimeout: function() {
      var self = this;
      var timeout = 0;;
      if (self.opts.effect == 'fade') {
        timeout = 450;
      } else {
        timeout = 0;
      }
      return timeout;
    },
  
  	slid: function(index, hasPage) {
        var self = this;
        var hasPage = typeof hasPage == 'undefined' ? false : (hasPage ? true : false);
        var index = typeof index == 'undefined' ? -1 : (index >= self.length || index < 0 ? -1 : index);

        var _curIndex = self.getCurIndex();
        var _currIndexInPage = self.getIndexInPage(_curIndex);

        if(self.sliding) {
          return false;
        }
        self.sliding = true;

        var _nextIndex = 0;

        if(index >= 0){
            _nextIndex = index;
        }else{
            _nextIndex = self.getNextIndex();
        }

        if(_nextIndex == _curIndex) {
            self.sliding = false;
            return false;
        }
        /* console.log('_curIndex = ' + getCurIndex() + ', _nextIndex = ' + _nextIndex); */
        var _nextIndexInPage = self.getIndexInPage(_nextIndex);
        /* console.log('_currIndexInPage = ' + _currIndexInPage + ', _nextIndexInPage = ' + _nextIndexInPage + '\r\n'); */
        var flipPage = false;
        if(_currIndexInPage != _nextIndexInPage && !hasPage) {
            self.page(_nextIndexInPage, true);
            flipPage = true;
        }

        self.navItems.removeClass(self.opts.curClass);
        self.navItems.eq(_nextIndex).addClass(self.opts.curClass);
        if(self.opts.effect == 'fade') {
            self.banItems.eq(_curIndex).css('z-index', 1);
            self.banItems.eq(_nextIndex).css('z-index', 0);
            self.banItems.eq(_nextIndex).show();
            self.banItems.eq(_curIndex).fadeOut(400, function(){self.sliding=false});// fast:200, slow:600, default:400
        }else{
            self.banItems.hide();
            self.banItems.eq(_nextIndex).show(0,function(){self.sliding=false});
        }
        self.setCurIndex(_nextIndex);
  	},
    slideQueueExec: function (callback, timeout) {
      var self = this;
      if (self.slideQueueLock) {
        return false;
      }
      self.slideQueueLock = true;
      var args = self.slideQueue.shift();
      if (args) {
        self.slid(args[0], args[1]);
        setTimeout(function(){
          self.slideQueueLock = false;
          self.slideQueueExec(callback, timeout)
        }, args[2]);
      } else {
        self.slideQueueLock = false;
        if (typeof callback == 'function') {
          var timeout = typeof timeout == 'undefined' ? 0 : timeout;
          setTimeout(function(){callback()}, timeout);
        }
      }
      return self;
    },
    slideQueueAdd: function (index, hasPage, timeout) {
      var self = this;
      self.slideQueue.push([index, hasPage, timeout]);
      return self;
    },

  	start: function() {
        var self = this;
        try{
            clearInterval(self.timer);
        }catch(e){}
        if (self.opts.speed > 0) {
          self.timer = setInterval(function(){
            self.slideQueueAdd(-1, false, 0).slideQueueExec();
          }, self.opts.speed);
        }
  	},

  	stop: function() {
        var self = this;
        try{
            clearInterval(self.timer);
        }catch(e){}
  	},

  	run: function(){
        var self = this;
        self.start();
  	}
  }
  $.fn.slider = function (option) {
        var args = Array.apply(null, arguments), retvals = [];
        args.shift();
        this.each(function () {
            var self = $(this), data = self.data('slider'), options = typeof option === 'object' && option, opts;
            if (!data) {
                opts = $.extend($.fn.slider.defaults, options, self.data());
                data = new slider(this, opts);
                self.data('slider', data);
            }
            if (typeof option === 'string') {
                retvals.push(data[option].apply(data, args));
            }
        });
        switch (retvals.length) {
            case 0:
                return this;
            case 1:
                return retvals[0];
            default:
                return retvals;
        }
    };

    $.fn.slider.defaults = {
        banItemClass:'banItem', 
        navItemClass:'navItem', 
        navWrapClass:'navWrap',
        navBgWrapClass:'navBg',
        prevOneBtnClass:'prevOneBtn',
        nextOneBtnClass:'nextOneBtn',
        prevPageBtnClass:'prevPageBtn',
        nextPageBtnClass:'nextPageBtn',
        perpage:4, 
        curClass:'curr', 
        event:'hover', 
        effect:'none', 
        speed:5000 
    }
    $.fn.slider.Constructor = slider;
}));
