$(document).ready(function(){$('.about-lnk').click(function(){$(this).closest('.about').toggleClass('open');var isvisible=$(this).closest('.about').hasClass('open');$(this).html(isvisible?'Скрыть':'Показать весь текст');})
$('.lte9 .promo-item:last-child').css({'margin-right':'0'})
$('#data-giftSumm').numeric();$('.data-GiftChoice').on('click',function(){var price=$('#data-giftSumm').val();if(price){document.location.href='http://590.ua/catalog/gifts/price/'+price;}
else{$('#data-giftSumm').attr('data-original-title','Введите сумму');$('#data-giftSumm').tooltip('show')}});var billboardTimer;var billboardCurrent=0;var billboardSize=$('.billboard li').size();var billboardGallery=$('.billboard .img-small');var billboardIndex=0;var controlLeft=$('.billboard-control__left');var controlRight=$('.billboard-control__right');billboardGallery.css({'width':billboardSize*150});$('.billboard li').on('click',function(){if($(this).hasClass('active')){return false;}
clearInterval(billboardTimer);setActive($(this).index());});$('.billboard').on('hover',function(){clearInterval(billboardTimer);});$('.billboard li:first').click();billboardTimer=setInterval(function(){setActive(billboardCurrent=(billboardCurrent+1)%billboardSize);},8000)
function setActive(index){$('.billboard .current').animate({'opacity':0}).removeClass('current').hide();$('.billboard .img-large').eq(index).animate({'opacity':1}).addClass('current').show();$('.billboard li').removeClass('active').eq(index).addClass('active');}
function getBannerPos(){(billboardIndex==0)?controlLeft.hide():controlLeft.show();((billboardSize-billboardIndex)==5)?controlRight.hide():controlRight.show();}
getBannerPos();$('.billboard-control__left').on('click',function(){if(billboardIndex==0){return;}
else{billboardIndex--;billboardGallery.animate({left:"+=150",},getBannerPos);}});$('.billboard-control__right').on('click',function(){if(billboardIndex>=(billboardSize-5)){return;}
else{billboardIndex++;billboardGallery.animate({left:"-=150",},getBannerPos);}});});(function($){$.fn.numeric=function(config,callback)
{if(typeof config==='boolean')
{config={decimal:config};}
config=config||{};if(typeof config.negative=="undefined")config.negative=true;var decimal=(config.decimal===false)?"":config.decimal||".";var negative=(config.negative===true)?true:false;var callback=typeof callback=="function"?callback:function(){};return this.data("numeric.decimal",decimal).data("numeric.negative",negative).data("numeric.callback",callback).keypress($.fn.numeric.keypress).keyup($.fn.numeric.keyup).blur($.fn.numeric.blur);}
$.fn.numeric.keypress=function(e)
{var decimal=$.data(this,"numeric.decimal");var negative=$.data(this,"numeric.negative");var key=e.charCode?e.charCode:e.keyCode?e.keyCode:0;if(key==13&&this.nodeName.toLowerCase()=="input")
{return true;}
else if(key==13)
{return false;}
var allow=false;if((e.ctrlKey&&key==97)||(e.ctrlKey&&key==65))return true;if((e.ctrlKey&&key==120)||(e.ctrlKey&&key==88))return true;if((e.ctrlKey&&key==99)||(e.ctrlKey&&key==67))return true;if((e.ctrlKey&&key==122)||(e.ctrlKey&&key==90))return true;if((e.ctrlKey&&key==118)||(e.ctrlKey&&key==86)||(e.shiftKey&&key==45))return true;if(key<48||key>57)
{if(this.value.indexOf("-")!=0&&negative&&key==45&&(this.value.length==0||($.fn.getSelectionStart(this))==0))return true;if(decimal&&key==decimal.charCodeAt(0)&&this.value.indexOf(decimal)!=-1)
{allow=false;}
if(key!=8&&key!=9&&key!=13&&key!=35&&key!=36&&key!=37&&key!=39&&key!=46)
{allow=false;}
else
{if(typeof e.charCode!="undefined")
{if(e.keyCode==e.which&&e.which!=0)
{allow=true;if(e.which==46)allow=false;}
else if(e.keyCode!=0&&e.charCode==0&&e.which==0)
{allow=true;}}}
if(decimal&&key==decimal.charCodeAt(0))
{if(this.value.indexOf(decimal)==-1)
{allow=true;}
else
{allow=false;}}}
else
{allow=true;}
return allow;}
$.fn.numeric.keyup=function(e)
{var val=this.value;if(val.length>0)
{var carat=$.fn.getSelectionStart(this);var decimal=$.data(this,"numeric.decimal");var negative=$.data(this,"numeric.negative");if(decimal!="")
{var dot=val.indexOf(decimal);if(dot==0)
{this.value="0"+val;}
if(dot==1&&val.charAt(0)=="-")
{this.value="-0"+val.substring(1);}
val=this.value;}
var validChars=[0,1,2,3,4,5,6,7,8,9,'-',decimal];var length=val.length;for(var i=length-1;i>=0;i--)
{var ch=val.charAt(i);if(i!=0&&ch=="-")
{val=val.substring(0,i)+val.substring(i+1);}
else if(i==0&&!negative&&ch=="-")
{val=val.substring(1);}
var validChar=false;for(var j=0;j<validChars.length;j++)
{if(ch==validChars[j])
{validChar=true;break;}}
if(!validChar||ch==" ")
{val=val.substring(0,i)+val.substring(i+1);}}
var firstDecimal=val.indexOf(decimal);if(firstDecimal>0)
{for(var i=length-1;i>firstDecimal;i--)
{var ch=val.charAt(i);if(ch==decimal)
{val=val.substring(0,i)+val.substring(i+1);}}}
this.value=val;$.fn.setSelection(this,carat);}}
$.fn.numeric.blur=function()
{var decimal=$.data(this,"numeric.decimal");var callback=$.data(this,"numeric.callback");var val=this.value;if(val!="")
{var re=new RegExp("^\\d+$|\\d*"+decimal+"\\d+");if(!re.exec(val))
{callback.apply(this);}}}
$.fn.removeNumeric=function()
{return this.data("numeric.decimal",null).data("numeric.negative",null).data("numeric.callback",null).unbind("keypress",$.fn.numeric.keypress).unbind("blur",$.fn.numeric.blur);}
$.fn.getSelectionStart=function(o)
{if(o.createTextRange)
{var r=document.selection.createRange().duplicate();r.moveEnd('character',o.value.length);if(r.text=='')return o.value.length;return o.value.lastIndexOf(r.text);}else return o.selectionStart;}
$.fn.setSelection=function(o,p)
{if(typeof p=="number")p=[p,p];if(p&&p.constructor==Array&&p.length==2)
{if(o.createTextRange)
{var r=o.createTextRange();r.collapse(true);r.moveStart('character',p[0]);r.moveEnd('character',p[1]);r.select();}
else if(o.setSelectionRange)
{o.focus();o.setSelectionRange(p[0],p[1]);}}}})(jQuery);!function($){$(function(){"use strict";$.support.transition=(function(){var transitionEnd=(function(){var el=document.createElement('bootstrap'),transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd otransitionend','transition':'transitionend'},name
for(name in transEndEventNames){if(el.style[name]!==undefined){return transEndEventNames[name]}}}())
return transitionEnd&&{end:transitionEnd}})()})}(window.jQuery);!function($){"use strict";var Modal=function(element,options){this.options=options
this.$element=$(element).delegate('[data-dismiss="modal"]','click.dismiss.modal',$.proxy(this.hide,this))
this.options.remote&&this.$element.find('.modal-body').load(this.options.remote)}
Modal.prototype={constructor:Modal,toggle:function(){return this[!this.isShown?'show':'hide']()},show:function(){var that=this,e=$.Event('show')
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
$('body').addClass('modal-open')
this.isShown=true
this.escape()
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(document.body)}
that.$element.show()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false).focus()
that.enforceFocus()
transition?that.$element.one($.support.transition.end,function(){that.$element.trigger('shown')}):that.$element.trigger('shown')})},hide:function(e){e&&e.preventDefault()
var that=this
e=$.Event('hide')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
$('body').removeClass('modal-open')
this.escape()
$(document).off('focusin.modal')
this.$element.removeClass('in').attr('aria-hidden',true)
$('.formError').remove();$.support.transition&&this.$element.hasClass('fade')?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var that=this
$(document).on('focusin.modal',function(e){if(that.$element[0]!==e.target&&!that.$element.has(e.target).length){that.$element.focus()}})},escape:function(){var that=this
if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.modal',function(e){e.which==27&&that.hide()})}else if(!this.isShown){this.$element.off('keyup.dismiss.modal')}},hideWithTransition:function(){var that=this,timeout=setTimeout(function(){that.$element.off($.support.transition.end)
that.hideModal()},500)
this.$element.one($.support.transition.end,function(){clearTimeout(timeout)
that.hideModal()})},hideModal:function(that){this.$element.hide().trigger('hidden')
this.backdrop()},removeBackdrop:function(){this.$backdrop.remove()
this.$backdrop=null},backdrop:function(callback){var that=this,animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body)
if(this.options.backdrop!='static'){this.$backdrop.click($.proxy(this.hide,this))}
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
doAnimate?this.$backdrop.one($.support.transition.end,callback):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one($.support.transition.end,$.proxy(this.removeBackdrop,this)):this.removeBackdrop()}else if(callback){callback()}}}
$.fn.modal=function(option){return this.each(function(){var $this=$(this),data=$this.data('modal'),options=$.extend({},$.fn.modal.defaults,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option]()
else if(options.show)data.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=Modal
$(function(){$('body').on('click.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr('href'),$target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))),option=$target.data('modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
e.preventDefault()
$target.modal(option).one('hide',function(){$this.focus()})})})}(window.jQuery);!function($){"use strict";var toggle='[data-toggle=dropdown]',Dropdown=function(element){var $el=$(element).on('click.dropdown.data-api',this.toggle)
$('html').on('click.dropdown.data-api',function(){$el.parent().removeClass('open')})}
Dropdown.prototype={constructor:Dropdown,toggle:function(e){var $this=$(this),$parent,isActive
if($this.is('.disabled, :disabled'))return
$parent=getParent($this)
isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){$parent.toggleClass('open')
$this.focus()}
return false},keydown:function(e){var $this,$items,$active,$parent,isActive,index
if(!/(38|40|27)/.test(e.keyCode))return
$this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
$parent=getParent($this)
isActive=$parent.hasClass('open')
if(!isActive||(isActive&&e.keyCode==27))return $this.click()
$items=$('[role=menu] li:not(.divider) a',$parent)
if(!$items.length)return
index=$items.index($items.filter(':focus'))
if(e.keyCode==38&&index>0)index--
if(e.keyCode==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).focus()}}
function clearMenus(){getParent($(toggle)).removeClass('open')}
function getParent($this){var selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
$parent.length||($parent=$this.parent())
return $parent}
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('dropdown')
if(!data)$this.data('dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$(function(){$('html').on('click.dropdown.data-api',clearMenus)
$('body').on('click.dropdown touchstart.dropdown.data-api','.dropdown',function(e){e.stopPropagation()}).on('click.dropdown.data-api touchstart.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.dropdown.data-api touchstart.dropdown.data-api',toggle+', [role=menu]',Dropdown.prototype.keydown)})}(window.jQuery);!function($){"use strict";function ScrollSpy(element,options){var process=$.proxy(this.process,this),$element=$(element).is('body')?$(window):$(element),href
this.options=$.extend({},$.fn.scrollspy.defaults,options)
this.$scrollElement=$element.on('scroll.scroll-spy.data-api',process)
this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a'
this.$body=$('body')
this.refresh()
this.process()}
ScrollSpy.prototype={constructor:ScrollSpy,refresh:function(){var self=this,$targets
this.offsets=$([])
this.targets=$([])
$targets=this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),$href=/^#\w/.test(href)&&$(href)
return($href&&$href.length&&[[$href.position().top,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})},process:function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i
if(scrollTop>=maxScroll){return activeTarget!=(i=targets.last()[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}},activate:function(target){var active,selector
this.activeTarget=target
$(this.selector).parent('.active').removeClass('active')
selector=this.selector
+'[data-target="'+target+'"],'
+this.selector+'[href="'+target+'"]'
active=$(selector).parent('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate')}}
$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data('scrollspy'),options=typeof option=='object'&&option
if(!data)$this.data('scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.defaults={offset:10}
$(window).on('load',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
$spy.scrollspy($spy.data())})})}(window.jQuery);!function($){"use strict";var Tab=function(element){this.element=$(element)}
Tab.prototype={constructor:Tab,show:function(){var $this=this.element,$ul=$this.closest('ul:not(.dropdown-menu)'),selector=$this.attr('data-target'),previous,$target,e
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
previous=$ul.find('.active a').last()[0]
e=$.Event('show',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
$target=$(selector)
this.activate($this.parent('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown',relatedTarget:previous})})},activate:function(element,container,callback){var $active=container.find('> .active'),transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one($.support.transition.end,next):next()
$active.removeClass('in')}}
$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data('tab')
if(!data)$this.data('tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
$.fn.tab.Constructor=Tab
$(function(){$('body').on('click.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
$(this).tab('show')})})}(window.jQuery);!function($){"use strict";var Tooltip=function(element,options){this.init('tooltip',element,options)}
Tooltip.prototype={constructor:Tooltip,init:function(type,element,options){var eventIn,eventOut
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.enabled=true
if(this.options.trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(this.options.trigger!='manual'){eventIn=this.options.trigger=='hover'?'mouseenter':'focus'
eventOut=this.options.trigger=='hover'?'mouseleave':'blur'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()},getOptions:function(options){options=$.extend({},$.fn[this.type].defaults,options,this.$element.data())
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options},enter:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type)
if(!self.options.delay||!self.options.delay.show)return self.show()
clearTimeout(this.timeout)
self.hoverState='in'
this.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)},leave:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type)
if(this.timeout)clearTimeout(this.timeout)
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.hoverState='out'
this.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)},show:function(){var $tip,inside,pos,actualWidth,actualHeight,placement,tp
if(this.hasContent()&&this.enabled){$tip=this.tip()
this.setContent()
if(this.options.animation){$tip.addClass('fade')}
placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
inside=/in/.test(placement)
$tip.remove().css({top:0,left:0,display:'block'}).appendTo(inside?this.$element:document.body)
pos=this.getPosition(inside)
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight
switch(inside?placement.split(' ')[1]:placement){case'bottom':tp={top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}
break
case'top':tp={top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}
break
case'left':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}
break
case'right':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}
break}
$tip.css(tp).addClass(placement).addClass('in')}},setContent:function(){var $tip=this.tip(),title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')},hide:function(){var that=this,$tip=this.tip()
$tip.removeClass('in')
function removeWithAnimation(){var timeout=setTimeout(function(){$tip.off($.support.transition.end).remove()},500)
$tip.one($.support.transition.end,function(){clearTimeout(timeout)
$tip.remove()})}
$.support.transition&&this.$tip.hasClass('fade')?removeWithAnimation():$tip.remove()
return this},fixTitle:function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').removeAttr('title')}},hasContent:function(){return this.getTitle()},getPosition:function(inside){return $.extend({},(inside?{top:0,left:0}:this.$element.offset()),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var title,$e=this.$element,o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title},tip:function(){return this.$tip=this.$tip||$(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass('in')?'hide':'show']()},destroy:function(){this.hide().$element.off('.'+this.type).removeData(this.type)}}
$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data('tooltip'),options=typeof option=='object'&&option
if(!data)$this.data('tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.defaults={animation:true,placement:'top',selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover',title:'',delay:0,html:true}}(window.jQuery);!function($){"use strict";var Popover=function(element,options){this.init('popover',element,options)}
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype,{constructor:Popover,setContent:function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content > *')[this.options.html?'html':'text'](content)
$tip.removeClass('fade top bottom left right in')},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var content,$e=this.$element,o=this.options
content=$e.attr('data-content')||(typeof o.content=='function'?o.content.call($e[0]):o.content)
return content},tip:function(){if(!this.$tip){this.$tip=$(this.options.template)}
return this.$tip},destroy:function(){this.hide().$element.off('.'+this.type).removeData(this.type)}})
$.fn.popover=function(option){return this.each(function(){var $this=$(this),data=$this.data('popover'),options=typeof option=='object'&&option
if(!data)$this.data('popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.popover.Constructor=Popover
$.fn.popover.defaults=$.extend({},$.fn.tooltip.defaults,{placement:'right',trigger:'click',content:'',template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);!function($){"use strict";var Affix=function(element,options){this.options=$.extend({},$.fn.affix.defaults,options)
this.$window=$(window).on('scroll.affix.data-api',$.proxy(this.checkPosition,this))
this.$element=$(element)
this.checkPosition()}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var scrollHeight=$(document).height(),scrollTop=this.$window.scrollTop(),position=this.$element.offset(),offset=this.options.offset,offsetBottom=offset.bottom,offsetTop=offset.top,reset='affix affix-top affix-bottom',affix
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top()
if(typeof offsetBottom=='function')offsetBottom=offset.bottom()
affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&scrollTop<=offsetTop?'top':false
if(this.affixed===affix)return
this.affixed=affix
this.unpin=affix=='bottom'?position.top-scrollTop:null
this.$element.removeClass(reset).addClass('affix'+(affix?'-'+affix:''))}
$.fn.affix=function(option){return this.each(function(){var $this=$(this),data=$this.data('affix'),options=typeof option=='object'&&option
if(!data)$this.data('affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.affix.Constructor=Affix
$.fn.affix.defaults={offset:0}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data()
data.offset=data.offset||{}
data.offsetBottom&&(data.offset.bottom=data.offsetBottom)
data.offsetTop&&(data.offset.top=data.offsetTop)
$spy.affix(data)})})}(window.jQuery);!function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.prototype.close=function(e){var $this=$(this),selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
e&&e.preventDefault()
$parent.length||($parent=$this.hasClass('alert')?$this:$this.parent())
$parent.trigger(e=$.Event('close'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.trigger('closed').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.on($.support.transition.end,removeElement):removeElement()}
$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data('alert')
if(!data)$this.data('alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.alert.Constructor=Alert
$(function(){$('body').on('click.alert.data-api',dismiss,Alert.prototype.close)})}(window.jQuery);!function($){"use strict";var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.button.defaults,options)}
Button.prototype.setState=function(state){var d='disabled',$el=this.$element,data=$el.data(),val=$el.is('input')?'val':'html'
state=state+'Text'
data.resetText||$el.data('resetText',$el[val]())
$el[val](data[state]||this.options[state])
setTimeout(function(){state=='loadingText'?$el.addClass(d).attr(d,d):$el.removeClass(d).removeAttr(d)},0)}
Button.prototype.toggle=function(){var $parent=this.$element.parent('[data-toggle="buttons-radio"]')
$parent&&$parent.find('.active').removeClass('active')
this.$element.toggleClass('active')}
$.fn.button=function(option){return this.each(function(){var $this=$(this),data=$this.data('button'),options=typeof option=='object'&&option
if(!data)$this.data('button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
$.fn.button.defaults={loadingText:'loading...'}
$.fn.button.Constructor=Button
$(function(){$('body').on('click.button.data-api','[data-toggle^=button]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
$btn.button('toggle')})})}(window.jQuery);!function($){"use strict";var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.collapse.defaults,options)
if(this.options.parent){this.$parent=$(this.options.parent)}
this.options.toggle&&this.toggle()}
Collapse.prototype={constructor:Collapse,dimension:function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'},show:function(){var dimension,scroll,actives,hasData
if(this.transitioning)return
dimension=this.dimension()
scroll=$.camelCase(['scroll',dimension].join('-'))
actives=this.$parent&&this.$parent.find('> .accordion-group > .in')
if(actives&&actives.length){hasData=actives.data('collapse')
if(hasData&&hasData.transitioning)return
actives.collapse('hide')
hasData||actives.data('collapse',null)}
this.$element[dimension](0)
this.transition('addClass',$.Event('show'),'shown')
$.support.transition&&this.$element[dimension](this.$element[0][scroll])},hide:function(){var dimension
if(this.transitioning)return
dimension=this.dimension()
this.reset(this.$element[dimension]())
this.transition('removeClass',$.Event('hide'),'hidden')
this.$element[dimension](0)},reset:function(size){var dimension=this.dimension()
this.$element.removeClass('collapse')
[dimension](size||'auto')
[0].offsetWidth
this.$element[size!==null?'addClass':'removeClass']('collapse')
return this},transition:function(method,startEvent,completeEvent){var that=this,complete=function(){if(startEvent.type=='show')that.reset()
that.transitioning=0
that.$element.trigger(completeEvent)}
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
this.transitioning=1
this.$element[method]('in')
$.support.transition&&this.$element.hasClass('collapse')?this.$element.one($.support.transition.end,complete):complete()},toggle:function(){this[this.$element.hasClass('in')?'hide':'show']()}}
$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data('collapse'),options=typeof option=='object'&&option
if(!data)$this.data('collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.collapse.defaults={toggle:true}
$.fn.collapse.Constructor=Collapse
$(function(){$('body').on('click.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href,target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''),option=$(target).data('collapse')?'toggle':$this.data()
$this[$(target).hasClass('in')?'addClass':'removeClass']('collapsed')
$(target).collapse(option)})})}(window.jQuery);!function($){"use strict";var Carousel=function(element,options){this.$element=$(element)
this.options=options
this.options.slide&&this.slide(this.options.slide)
this.options.pause=='hover'&&this.$element.on('mouseenter',$.proxy(this.pause,this)).on('mouseleave',$.proxy(this.cycle,this))}
Carousel.prototype={cycle:function(e){if(!e)this.paused=false
this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this},to:function(pos){var $active=this.$element.find('.item.active'),children=$active.parent().children(),activePos=children.index($active),that=this
if(pos>(children.length-1)||pos<0)return
if(this.sliding){return this.$element.one('slid',function(){that.to(pos)})}
if(activePos==pos){return this.pause().cycle()}
return this.slide(pos>activePos?'next':'prev',$(children[pos]))},pause:function(e){if(!e)this.paused=true
if(this.$element.find('.next, .prev').length&&$.support.transition.end){this.$element.trigger($.support.transition.end)
this.cycle()}
clearInterval(this.interval)
this.interval=null
return this},next:function(){if(this.sliding)return
return this.slide('next')},prev:function(){if(this.sliding)return
return this.slide('prev')},slide:function(type,next){var $active=this.$element.find('.item.active'),$next=next||$active[type](),isCycling=this.interval,direction=type=='next'?'left':'right',fallback=type=='next'?'first':'last',that=this,e=$.Event('slide',{relatedTarget:$next[0]})
this.sliding=true
isCycling&&this.pause()
$next=$next.length?$next:this.$element.find('.item')[fallback]()
if($next.hasClass('active'))return
if($.support.transition&&this.$element.hasClass('slide')){this.$element.trigger(e)
if(e.isDefaultPrevented())return
$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
this.$element.one($.support.transition.end,function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger('slid')},0)})}else{this.$element.trigger(e)
if(e.isDefaultPrevented())return
$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger('slid')}
isCycling&&this.cycle()
return this}}
$.fn.carousel=function(option){return this.each(function(){var $this=$(this),data=$this.data('carousel'),options=$.extend({},$.fn.carousel.defaults,typeof option=='object'&&option),action=typeof option=='string'?option:options.slide
if(!data)$this.data('carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.cycle()})}
$.fn.carousel.defaults={interval:5000,pause:'hover'}
$.fn.carousel.Constructor=Carousel
$(function(){$('body').on('click.carousel.data-api','[data-slide]',function(e){var $this=$(this),href,$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')),options=!$target.data('modal')&&$.extend({},$target.data(),$this.data())
$target.carousel(options)
e.preventDefault()})})}(window.jQuery);!function($){"use strict";var Typeahead=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.typeahead.defaults,options)
this.matcher=this.options.matcher||this.matcher
this.sorter=this.options.sorter||this.sorter
this.highlighter=this.options.highlighter||this.highlighter
this.updater=this.options.updater||this.updater
this.$menu=$(this.options.menu).appendTo('body')
this.source=this.options.source
this.shown=false
this.listen()}
Typeahead.prototype={constructor:Typeahead,select:function(){var val=this.$menu.find('.active').attr('data-value')
this.$element.val(this.updater(val)).change()
return this.hide()},updater:function(item){return item},show:function(){var pos=$.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight})
this.$menu.css({top:pos.top+pos.height,left:pos.left})
this.$menu.show()
this.shown=true
return this},hide:function(){this.$menu.hide()
this.shown=false
return this},lookup:function(event){var items
this.query=this.$element.val()
if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this}
items=$.isFunction(this.source)?this.source(this.query,$.proxy(this.process,this)):this.source
return items?this.process(items):this},process:function(items){var that=this
items=$.grep(items,function(item){return that.matcher(item)})
items=this.sorter(items)
if(!items.length){return this.shown?this.hide():this}
return this.render(items.slice(0,this.options.items)).show()},matcher:function(item){return~item.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(items){var beginswith=[],caseSensitive=[],caseInsensitive=[],item
while(item=items.shift()){if(!item.toLowerCase().indexOf(this.query.toLowerCase()))beginswith.push(item)
else if(~item.indexOf(this.query))caseSensitive.push(item)
else caseInsensitive.push(item)}
return beginswith.concat(caseSensitive,caseInsensitive)},highlighter:function(item){var query=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,'\\$&')
return item.replace(new RegExp('('+query+')','ig'),function($1,match){return'<span class=\'strong\'>'+match+'</span>'})},render:function(items){var that=this
items=$(items).map(function(i,item){i=$(that.options.item).attr('data-value',item)
i.find('a').html(that.highlighter(item))
return i[0]})
items.first().addClass('active')
this.$menu.html(items)
return this},next:function(event){var active=this.$menu.find('.active').removeClass('active'),next=active.next()
if(!next.length){next=$(this.$menu.find('li')[0])}
next.addClass('active')},prev:function(event){var active=this.$menu.find('.active').removeClass('active'),prev=active.prev()
if(!prev.length){prev=this.$menu.find('li').last()}
prev.addClass('active')},listen:function(){this.$element.on('blur',$.proxy(this.blur,this)).on('keypress',$.proxy(this.keypress,this)).on('keyup',$.proxy(this.keyup,this))
if($.browser.webkit||$.browser.msie){this.$element.on('keydown',$.proxy(this.keydown,this))}
this.$menu.on('click',$.proxy(this.click,this)).on('mouseenter','li',$.proxy(this.mouseenter,this))},move:function(e){if(!this.shown)return
switch(e.keyCode){case 9:case 13:case 27:e.preventDefault()
break
case 38:e.preventDefault()
this.prev()
break
case 40:e.preventDefault()
this.next()
break}
e.stopPropagation()},keydown:function(e){this.suppressKeyPressRepeat=!~$.inArray(e.keyCode,[40,38,9,13,27])
this.move(e)},keypress:function(e){if(this.suppressKeyPressRepeat)return
this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:break
case 9:case 13:if(!this.shown)return
this.select()
break
case 27:if(!this.shown)return
this.hide()
break
default:this.lookup()}
e.stopPropagation()
e.preventDefault()},blur:function(e){var that=this
setTimeout(function(){that.hide()},150)},click:function(e){e.stopPropagation()
e.preventDefault()
this.select()},mouseenter:function(e){this.$menu.find('.active').removeClass('active')
$(e.currentTarget).addClass('active')}}
$.fn.typeahead=function(option){return this.each(function(){var $this=$(this),data=$this.data('typeahead'),options=typeof option=='object'&&option
if(!data)$this.data('typeahead',(data=new Typeahead(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1}
$.fn.typeahead.Constructor=Typeahead
$(function(){$('body').on('focus.typeahead.data-api','[data-provide="typeahead"]',function(e){var $this=$(this)
if($this.data('typeahead'))return
e.preventDefault()
$this.typeahead($this.data())})})}(window.jQuery);function getSelText(){var txt='';if(window.getSelection){txt=window.getSelection();}else if(document.getSelection){txt=document.getSelection();}else if(document.selection){txt=document.selection.createRange().text;}
return txt;}
(function($){if(typeof $.fn.each2=="undefined"){$.fn.extend({each2:function(c){var j=$([0]),i=-1,l=this.length;while(++i<l&&(j.context=j[0]=this[i])&&c.call(j[0],i,j)!==false);return this;}});}})(jQuery);(function($,undefined){"use strict";if(window.Select2!==undefined){return;}
var KEY,AbstractSelect2,SingleSelect2,MultiSelect2,nextUid,sizer,lastMousePosition,$document,scrollBarDimensions,KEY={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(k){k=k.which?k.which:k;switch(k){case KEY.LEFT:case KEY.RIGHT:case KEY.UP:case KEY.DOWN:return true;}
return false;},isControl:function(e){var k=e.which;switch(k){case KEY.SHIFT:case KEY.CTRL:case KEY.ALT:return true;}
if(e.metaKey)return true;return false;},isFunctionKey:function(k){k=k.which?k.which:k;return k>=112&&k<=123;}},MEASURE_SCROLLBAR_TEMPLATE="<div class='select2-measure-scrollbar'></div>";$document=$(document);nextUid=(function(){var counter=1;return function(){return counter++;};}());function indexOf(value,array){var i=0,l=array.length;for(;i<l;i=i+1){if(equal(value,array[i]))return i;}
return-1;}
function measureScrollbar(){var $template=$(MEASURE_SCROLLBAR_TEMPLATE);$template.appendTo('body');var dim={width:$template.width()-$template[0].clientWidth,height:$template.height()-$template[0].clientHeight};$template.remove();return dim;}
function equal(a,b){if(a===b)return true;if(a===undefined||b===undefined)return false;if(a===null||b===null)return false;if(a.constructor===String)return a+''===b+'';if(b.constructor===String)return b+''===a+'';return false;}
function splitVal(string,separator){var val,i,l;if(string===null||string.length<1)return[];val=string.split(separator);for(i=0,l=val.length;i<l;i=i+1)val[i]=$.trim(val[i]);return val;}
function getSideBorderPadding(element){return element.outerWidth(false)-element.width();}
function installKeyUpChangeEvent(element){var key="keyup-change-value";element.on("keydown",function(){if($.data(element,key)===undefined){$.data(element,key,element.val());}});element.on("keyup",function(){var val=$.data(element,key);if(val!==undefined&&element.val()!==val){$.removeData(element,key);element.trigger("keyup-change");}});}
$document.on("mousemove",function(e){lastMousePosition={x:e.pageX,y:e.pageY};});function installFilteredMouseMove(element){element.on("mousemove",function(e){var lastpos=lastMousePosition;if(lastpos===undefined||lastpos.x!==e.pageX||lastpos.y!==e.pageY){$(e.target).trigger("mousemove-filtered",e);}});}
function debounce(quietMillis,fn,ctx){ctx=ctx||undefined;var timeout;return function(){var args=arguments;window.clearTimeout(timeout);timeout=window.setTimeout(function(){fn.apply(ctx,args);},quietMillis);};}
function thunk(formula){var evaluated=false,value;return function(){if(evaluated===false){value=formula();evaluated=true;}
return value;};};function installDebouncedScroll(threshold,element){var notify=debounce(threshold,function(e){element.trigger("scroll-debounced",e);});element.on("scroll",function(e){if(indexOf(e.target,element.get())>=0)notify(e);});}
function focus($el){if($el[0]===document.activeElement)return;window.setTimeout(function(){var el=$el[0],pos=$el.val().length,range;$el.focus();if($el.is(":visible")&&el===document.activeElement){if(el.setSelectionRange)
{el.setSelectionRange(pos,pos);}
else if(el.createTextRange){range=el.createTextRange();range.collapse(false);range.select();}}},0);}
function getCursorInfo(el){el=$(el)[0];var offset=0;var length=0;if('selectionStart'in el){offset=el.selectionStart;length=el.selectionEnd-offset;}else if('selection'in document){el.focus();var sel=document.selection.createRange();length=document.selection.createRange().text.length;sel.moveStart('character',-el.value.length);offset=sel.text.length-length;}
return{offset:offset,length:length};}
function killEvent(event){event.preventDefault();event.stopPropagation();}
function killEventImmediately(event){event.preventDefault();event.stopImmediatePropagation();}
function measureTextWidth(e){if(!sizer){var style=e[0].currentStyle||window.getComputedStyle(e[0],null);sizer=$(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:style.fontSize,fontFamily:style.fontFamily,fontStyle:style.fontStyle,fontWeight:style.fontWeight,letterSpacing:style.letterSpacing,textTransform:style.textTransform,whiteSpace:"nowrap"});sizer.attr("class","select2-sizer");$("body").append(sizer);}
sizer.text(e.val());return sizer.width();}
function syncCssClasses(dest,src,adapter){var classes,replacements=[],adapted;classes=dest.attr("class");if(classes){classes=''+classes;$(classes.split(" ")).each2(function(){if(this.indexOf("select2-")===0){replacements.push(this);}});}
classes=src.attr("class");if(classes){classes=''+classes;$(classes.split(" ")).each2(function(){if(this.indexOf("select2-")!==0){adapted=adapter(this);if(adapted){replacements.push(this);}}});}
dest.attr("class",replacements.join(" "));}
function markMatch(text,term,markup,escapeMarkup){var match=text.toUpperCase().indexOf(term.toUpperCase()),tl=term.length;if(match<0){markup.push(escapeMarkup(text));return;}
markup.push(escapeMarkup(text.substring(0,match)));markup.push("<span class='select2-match'>");markup.push(escapeMarkup(text.substring(match,match+tl)));markup.push("</span>");markup.push(escapeMarkup(text.substring(match+tl,text.length)));}
function ajax(options){var timeout,requestSequence=0,handler=null,quietMillis=options.quietMillis||100,ajaxUrl=options.url,self=this;return function(query){window.clearTimeout(timeout);timeout=window.setTimeout(function(){requestSequence+=1;var requestNumber=requestSequence,data=options.data,url=ajaxUrl,transport=options.transport||$.fn.select2.ajaxDefaults.transport,deprecated={type:options.type||'GET',cache:options.cache||false,jsonpCallback:options.jsonpCallback||undefined,dataType:options.dataType||"json"},params=$.extend({},$.fn.select2.ajaxDefaults.params,deprecated);data=data?data.call(self,query.term,query.page,query.context):null;url=(typeof url==='function')?url.call(self,query.term,query.page,query.context):url;if(null!==handler){handler.abort();}
if(options.params){if($.isFunction(options.params)){$.extend(params,options.params.call(self));}else{$.extend(params,options.params);}}
$.extend(params,{url:url,dataType:options.dataType,data:data,success:function(data){if(requestNumber<requestSequence){return;}
var results=options.results(data,query.page);query.callback(results);}});handler=transport.call(self,params);},quietMillis);};}
function local(options){var data=options,dataText,tmp,text=function(item){return""+item.text;};if($.isArray(data)){tmp=data;data={results:tmp};}
if($.isFunction(data)===false){tmp=data;data=function(){return tmp;};}
var dataItem=data();if(dataItem.text){text=dataItem.text;if(!$.isFunction(text)){dataText=dataItem.text;text=function(item){return item[dataText];};}}
return function(query){var t=query.term,filtered={results:[]},process;if(t===""){query.callback(data());return;}
process=function(datum,collection){var group,attr;datum=datum[0];if(datum.children){group={};for(attr in datum){if(datum.hasOwnProperty(attr))group[attr]=datum[attr];}
group.children=[];$(datum.children).each2(function(i,childDatum){process(childDatum,group.children);});if(group.children.length||query.matcher(t,text(group),datum)){collection.push(group);}}else{if(query.matcher(t,text(datum),datum)){collection.push(datum);}}};$(data().results).each2(function(i,datum){process(datum,filtered.results);});query.callback(filtered);};}
function tags(data){var isFunc=$.isFunction(data);return function(query){var t=query.term,filtered={results:[]};$(isFunc?data():data).each(function(){var isObject=this.text!==undefined,text=isObject?this.text:this;if(t===""||query.matcher(t,text)){filtered.results.push(isObject?this:{id:this,text:this});}});query.callback(filtered);};}
function checkFormatter(formatter,formatterName){if($.isFunction(formatter))return true;if(!formatter)return false;throw new Error("formatterName must be a function or a falsy value");}
function evaluate(val){return $.isFunction(val)?val():val;}
function countResults(results){var count=0;$.each(results,function(i,item){if(item.children){count+=countResults(item.children);}else{count++;}});return count;}
function defaultTokenizer(input,selection,selectCallback,opts){var original=input,dupe=false,token,index,i,l,separator;if(!opts.createSearchChoice||!opts.tokenSeparators||opts.tokenSeparators.length<1)return undefined;while(true){index=-1;for(i=0,l=opts.tokenSeparators.length;i<l;i++){separator=opts.tokenSeparators[i];index=input.indexOf(separator);if(index>=0)break;}
if(index<0)break;token=input.substring(0,index);input=input.substring(index+separator.length);if(token.length>0){token=opts.createSearchChoice(token,selection);if(token!==undefined&&token!==null&&opts.id(token)!==undefined&&opts.id(token)!==null){dupe=false;for(i=0,l=selection.length;i<l;i++){if(equal(opts.id(token),opts.id(selection[i]))){dupe=true;break;}}
if(!dupe)selectCallback(token);}}}
if(original!==input)return input;}
function clazz(SuperClass,methods){var constructor=function(){};constructor.prototype=new SuperClass;constructor.prototype.constructor=constructor;constructor.prototype.parent=SuperClass.prototype;constructor.prototype=$.extend(constructor.prototype,methods);return constructor;}
AbstractSelect2=clazz(Object,{bind:function(func){var self=this;return function(){func.apply(self,arguments);};},init:function(opts){var results,search,resultsSelector=".select2-results",disabled,readonly;this.opts=opts=this.prepareOpts(opts);this.id=opts.id;if(opts.element.data("select2")!==undefined&&opts.element.data("select2")!==null){this.destroy();}
this.container=this.createContainer();this.containerId="s2id_"+(opts.element.attr("id")||"autogen"+nextUid());this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,'\\$1');this.container.attr("id",this.containerId);this.body=thunk(function(){return opts.element.closest("body");});syncCssClasses(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.css(evaluate(opts.containerCss));this.container.addClass(evaluate(opts.containerCssClass));this.elementTabIndex=this.opts.element.attr("tabindex");this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container);this.container.data("select2",this);this.dropdown=this.container.find(".select2-drop");this.dropdown.addClass(evaluate(opts.dropdownCssClass));this.dropdown.data("select2",this);this.results=results=this.container.find(resultsSelector);this.search=search=this.container.find("input.select2-input");this.resultsPage=0;this.context=null;this.initContainer();installFilteredMouseMove(this.results);this.dropdown.on("mousemove-filtered touchstart touchmove touchend",resultsSelector,this.bind(this.highlightUnderEvent));installDebouncedScroll(80,this.results);this.dropdown.on("scroll-debounced",resultsSelector,this.bind(this.loadMoreIfNeeded));$(this.container).on("change",".select2-input",function(e){e.stopPropagation();});$(this.dropdown).on("change",".select2-input",function(e){e.stopPropagation();});if($.fn.mousewheel){results.mousewheel(function(e,delta,deltaX,deltaY){var top=results.scrollTop(),height;if(deltaY>0&&top-deltaY<=0){results.scrollTop(0);killEvent(e);}else if(deltaY<0&&results.get(0).scrollHeight-results.scrollTop()+deltaY<=results.height()){results.scrollTop(results.get(0).scrollHeight-results.height());killEvent(e);}});}
installKeyUpChangeEvent(search);search.on("keyup-change input paste",this.bind(this.updateResults));search.on("focus",function(){search.addClass("select2-focused");});search.on("blur",function(){search.removeClass("select2-focused");});this.dropdown.on("mouseup",resultsSelector,this.bind(function(e){if($(e.target).closest(".select2-result-selectable").length>0){this.highlightUnderEvent(e);this.selectHighlighted(e);}}));this.dropdown.on("click mouseup mousedown",function(e){e.stopPropagation();});if($.isFunction(this.opts.initSelection)){this.initSelection();this.monitorSource();}
if(opts.maximumInputLength!==null){this.search.attr("maxlength",opts.maximumInputLength);}
var disabled=opts.element.prop("disabled");if(disabled===undefined)disabled=false;this.enable(!disabled);var readonly=opts.element.prop("readonly");if(readonly===undefined)readonly=false;this.readonly(readonly);scrollBarDimensions=scrollBarDimensions||measureScrollbar();this.autofocus=opts.element.prop("autofocus")
opts.element.prop("autofocus",false);if(this.autofocus)this.focus();},destroy:function(){var select2=this.opts.element.data("select2");if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null;}
if(select2!==undefined){select2.container.remove();select2.dropdown.remove();select2.opts.element.removeClass("select2-offscreen").removeData("select2").off(".select2").attr({"tabindex":this.elementTabIndex}).prop("autofocus",this.autofocus||false).show();}},optionToData:function(element){if(element.is("option")){return{id:element.prop("value"),text:element.text(),element:element.get(),css:element.attr("class"),disabled:element.prop("disabled"),locked:equal(element.attr("locked"),"locked")};}else if(element.is("optgroup")){return{text:element.attr("label"),children:[],element:element.get(),css:element.attr("class")};}},prepareOpts:function(opts){var element,select,idKey,ajaxUrl,self=this;element=opts.element;if(element.get(0).tagName.toLowerCase()==="select"){this.select=select=opts.element;}
if(select){$.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in opts){throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.");}});}
opts=$.extend({},{populateResults:function(container,results,query){var populate,data,result,children,id=this.opts.id;populate=function(results,container,depth){var i,l,result,selectable,disabled,compound,node,label,innerContainer,formatted;results=opts.sortResults(results,container,query);for(i=0,l=results.length;i<l;i=i+1){result=results[i];disabled=(result.disabled===true);selectable=(!disabled)&&(id(result)!==undefined);compound=result.children&&result.children.length>0;node=$("<li></li>");node.addClass("select2-results-dept-"+depth);node.addClass("select2-result");node.addClass(selectable?"select2-result-selectable":"select2-result-unselectable");if(disabled){node.addClass("select2-disabled");}
if(compound){node.addClass("select2-result-with-children");}
node.addClass(self.opts.formatResultCssClass(result));label=$(document.createElement("div"));label.addClass("select2-result-label");formatted=opts.formatResult(result,label,query,self.opts.escapeMarkup);if(formatted!==undefined){label.html(formatted);}
node.append(label);if(compound){innerContainer=$("<ul></ul>");innerContainer.addClass("select2-result-sub");populate(result.children,innerContainer,depth+1);node.append(innerContainer);}
node.data("select2-data",result);container.append(node);}};populate(results,container,0);}},$.fn.select2.defaults,opts);if(typeof(opts.id)!=="function"){idKey=opts.id;opts.id=function(e){return e[idKey];};}
if($.isArray(opts.element.data("select2Tags"))){if("tags"in opts){throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+opts.element.attr("id");}
opts.tags=opts.element.data("select2Tags");}
if(select){opts.query=this.bind(function(query){var data={results:[],more:false},term=query.term,children,firstChild,process;process=function(element,collection){var group;if(element.is("option")){if(query.matcher(term,element.text(),element)){collection.push(self.optionToData(element));}}else if(element.is("optgroup")){group=self.optionToData(element);element.children().each2(function(i,elm){process(elm,group.children);});if(group.children.length>0){collection.push(group);}}};children=element.children();if(this.getPlaceholder()!==undefined&&children.length>0){firstChild=children[0];if($(firstChild).text()===""){children=children.not(firstChild);}}
children.each2(function(i,elm){process(elm,data.results);});query.callback(data);});opts.id=function(e){return e.id;};opts.formatResultCssClass=function(data){return data.css;};}else{if(!("query"in opts)){if("ajax"in opts){ajaxUrl=opts.element.data("ajax-url");if(ajaxUrl&&ajaxUrl.length>0){opts.ajax.url=ajaxUrl;}
opts.query=ajax.call(opts.element,opts.ajax);}else if("data"in opts){opts.query=local(opts.data);}else if("tags"in opts){opts.query=tags(opts.tags);if(opts.createSearchChoice===undefined){opts.createSearchChoice=function(term){return{id:term,text:term};};}
if(opts.initSelection===undefined){opts.initSelection=function(element,callback){var data=[];$(splitVal(element.val(),opts.separator)).each(function(){var id=this,text=this,tags=opts.tags;if($.isFunction(tags))tags=tags();$(tags).each(function(){if(equal(this.id,id)){text=this.text;return false;}});data.push({id:id,text:text});});callback(data);};}}}}
if(typeof(opts.query)!=="function"){throw"query function not defined for Select2 "+opts.element.attr("id");}
return opts;},monitorSource:function(){var el=this.opts.element,sync;el.on("change.select2",this.bind(function(e){if(this.opts.element.data("select2-change-triggered")!==true){this.initSelection();}}));sync=this.bind(function(){var enabled,readonly,self=this;var disabled=el.prop("disabled");if(disabled===undefined)disabled=false;this.enable(!disabled);var readonly=el.prop("readonly");if(readonly===undefined)readonly=false;this.readonly(readonly);syncCssClasses(this.container,this.opts.element,this.opts.adaptContainerCssClass);this.container.addClass(evaluate(this.opts.containerCssClass));syncCssClasses(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass);this.dropdown.addClass(evaluate(this.opts.dropdownCssClass));});el.on("propertychange.select2 DOMAttrModified.select2",sync);if(this.mutationCallback===undefined){this.mutationCallback=function(mutations){mutations.forEach(sync);}}
if(typeof WebKitMutationObserver!=="undefined"){if(this.propertyObserver){delete this.propertyObserver;this.propertyObserver=null;}
this.propertyObserver=new WebKitMutationObserver(this.mutationCallback);this.propertyObserver.observe(el.get(0),{attributes:true,subtree:false});}},triggerSelect:function(data){var evt=$.Event("select2-selecting",{val:this.id(data),object:data});this.opts.element.trigger(evt);return!evt.isDefaultPrevented();},triggerChange:function(details){details=details||{};details=$.extend({},details,{type:"change",val:this.val()});this.opts.element.data("select2-change-triggered",true);this.opts.element.trigger(details);this.opts.element.data("select2-change-triggered",false);this.opts.element.click();if(this.opts.blurOnChange)
this.opts.element.blur();},isInterfaceEnabled:function()
{return this.enabledInterface===true;},enableInterface:function(){var enabled=this._enabled&&!this._readonly,disabled=!enabled;if(enabled===this.enabledInterface)return false;this.container.toggleClass("select2-container-disabled",disabled);this.close();this.enabledInterface=enabled;return true;},enable:function(enabled){if(enabled===undefined)enabled=true;if(this._enabled===enabled)return false;this._enabled=enabled;this.opts.element.prop("disabled",!enabled);this.enableInterface();return true;},readonly:function(enabled){if(enabled===undefined)enabled=false;if(this._readonly===enabled)return false;this._readonly=enabled;this.opts.element.prop("readonly",enabled);this.enableInterface();return true;},opened:function(){return this.container.hasClass("select2-dropdown-open");},positionDropdown:function(){var $dropdown=this.dropdown,offset=this.container.offset(),height=this.container.outerHeight(false),width=this.container.outerWidth(false),dropHeight=$dropdown.outerHeight(false),viewPortRight=$(window).scrollLeft()+$(window).width(),viewportBottom=$(window).scrollTop()+$(window).height(),dropTop=offset.top+height,dropLeft=offset.left,enoughRoomBelow=dropTop+dropHeight<=viewportBottom,enoughRoomAbove=(offset.top-dropHeight)>=this.body().scrollTop(),dropWidth=$dropdown.outerWidth(false),enoughRoomOnRight=dropLeft+dropWidth<=viewPortRight,aboveNow=$dropdown.hasClass("select2-drop-above"),bodyOffset,above,css,resultsListNode;if(this.opts.dropdownAutoWidth){resultsListNode=$('.select2-results',$dropdown)[0];$dropdown.addClass('select2-drop-auto-width');$dropdown.css('width','');dropWidth=$dropdown.outerWidth(false)+(resultsListNode.scrollHeight===resultsListNode.clientHeight?0:scrollBarDimensions.width);dropWidth>width?width=dropWidth:dropWidth=width;enoughRoomOnRight=dropLeft+dropWidth<=viewPortRight;}
else{this.container.removeClass('select2-drop-auto-width');}
if(this.body().css('position')!=='static'){bodyOffset=this.body().offset();dropTop-=bodyOffset.top;dropLeft-=bodyOffset.left;}
if(aboveNow){above=true;if(!enoughRoomAbove&&enoughRoomBelow)above=false;}else{above=false;if(!enoughRoomBelow&&enoughRoomAbove)above=true;}
if(!enoughRoomOnRight){dropLeft=offset.left+width-dropWidth;}
if(above){dropTop=offset.top-dropHeight;this.container.addClass("select2-drop-above");$dropdown.addClass("select2-drop-above");}
else{this.container.removeClass("select2-drop-above");$dropdown.removeClass("select2-drop-above");}
css=$.extend({top:dropTop,left:dropLeft,width:width},evaluate(this.opts.dropdownCss));$dropdown.css(css);},shouldOpen:function(){var event;if(this.opened())return false;if(this._enabled===false||this._readonly===true)return false;event=$.Event("select2-opening");this.opts.element.trigger(event);return!event.isDefaultPrevented();},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above");this.dropdown.removeClass("select2-drop-above");},open:function(){if(!this.shouldOpen())return false;this.opening();return true;},opening:function(){var cid=this.containerId,scroll="scroll."+cid,resize="resize."+cid,orient="orientationchange."+cid,mask;this.container.addClass("select2-dropdown-open").addClass("select2-container-active");this.clearDropdownAlignmentPreference();if(this.dropdown[0]!==this.body().children().last()[0]){this.dropdown.detach().appendTo(this.body());}
mask=$("#select2-drop-mask");if(mask.length==0){mask=$(document.createElement("div"));mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");mask.hide();mask.appendTo(this.body());mask.on("mousedown touchstart",function(e){var dropdown=$("#select2-drop"),self;if(dropdown.length>0){self=dropdown.data("select2");if(self.opts.selectOnBlur){self.selectHighlighted({noFocus:true});}
self.close();e.preventDefault();e.stopPropagation();}});}
if(this.dropdown.prev()[0]!==mask[0]){this.dropdown.before(mask);}
$("#select2-drop").removeAttr("id");this.dropdown.attr("id","select2-drop");mask.css(_makeMaskCss());mask.show();this.dropdown.show();this.positionDropdown();this.dropdown.addClass("select2-drop-active");this.ensureHighlightVisible();var that=this;this.container.parents().add(window).each(function(){$(this).on(resize+" "+scroll+" "+orient,function(e){$("#select2-drop-mask").css(_makeMaskCss());that.positionDropdown();});});function _makeMaskCss(){return{width:Math.max(document.documentElement.scrollWidth,$(window).width()),height:Math.max(document.documentElement.scrollHeight,$(window).height())}}},close:function(){if(!this.opened())return;var cid=this.containerId,scroll="scroll."+cid,resize="resize."+cid,orient="orientationchange."+cid;this.container.parents().add(window).each(function(){$(this).off(scroll).off(resize).off(orient);});this.clearDropdownAlignmentPreference();$("#select2-drop-mask").hide();this.dropdown.removeAttr("id");this.dropdown.hide();this.container.removeClass("select2-dropdown-open");this.results.empty();this.clearSearch();this.search.removeClass("select2-active");this.opts.element.trigger($.Event("select2-close"));},clearSearch:function(){},getMaximumSelectionSize:function(){return evaluate(this.opts.maximumSelectionSize);},ensureHighlightVisible:function(){var results=this.results,children,index,child,hb,rb,y,more;index=this.highlight();if(index<0)return;if(index==0){results.scrollTop(0);return;}
children=this.findHighlightableChoices().find('.select2-result-label');child=$(children[index]);hb=child.offset().top+child.outerHeight(true);if(index===children.length-1){more=results.find("li.select2-more-results");if(more.length>0){hb=more.offset().top+more.outerHeight(true);}}
rb=results.offset().top+results.outerHeight(true);if(hb>rb){results.scrollTop(results.scrollTop()+(hb-rb));}
y=child.offset().top-results.offset().top;if(y<0&&child.css('display')!='none'){results.scrollTop(results.scrollTop()+y);}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)");},moveHighlight:function(delta){var choices=this.findHighlightableChoices(),index=this.highlight();while(index>-1&&index<choices.length){index+=delta;var choice=$(choices[index]);if(choice.hasClass("select2-result-selectable")&&!choice.hasClass("select2-disabled")&&!choice.hasClass("select2-selected")){this.highlight(index);break;}}},highlight:function(index){var choices=this.findHighlightableChoices(),choice,data;if(arguments.length===0){return indexOf(choices.filter(".select2-highlighted")[0],choices.get());}
if(index>=choices.length)index=choices.length-1;if(index<0)index=0;this.results.find(".select2-highlighted").removeClass("select2-highlighted");choice=$(choices[index]);choice.addClass("select2-highlighted");this.ensureHighlightVisible();data=choice.data("select2-data");if(data){this.opts.element.trigger({type:"select2-highlight",val:this.id(data),choice:data});}},countSelectableResults:function(){return this.findHighlightableChoices().length;},highlightUnderEvent:function(event){var el=$(event.target).closest(".select2-result-selectable");if(el.length>0&&!el.is(".select2-highlighted")){var choices=this.findHighlightableChoices();this.highlight(choices.index(el));}else if(el.length==0){this.results.find(".select2-highlighted").removeClass("select2-highlighted");}},loadMoreIfNeeded:function(){var results=this.results,more=results.find("li.select2-more-results"),below,offset=-1,page=this.resultsPage+1,self=this,term=this.search.val(),context=this.context;if(more.length===0)return;below=more.offset().top-results.offset().top-results.height();if(below<=this.opts.loadMorePadding){more.addClass("select2-active");this.opts.query({element:this.opts.element,term:term,page:page,context:context,matcher:this.opts.matcher,callback:this.bind(function(data){if(!self.opened())return;self.opts.populateResults.call(this,results,data.results,{term:term,page:page,context:context});self.postprocessResults(data,false,false);if(data.more===true){more.detach().appendTo(results).text(self.opts.formatLoadMore(page+1));window.setTimeout(function(){self.loadMoreIfNeeded();},10);}else{more.remove();}
self.positionDropdown();self.resultsPage=page;self.context=data.context;})});}},tokenize:function(){},updateResults:function(initial){var search=this.search,results=this.results,opts=this.opts,data,self=this,input,term=search.val(),lastTerm=$.data(this.container,"select2-last-term");if(initial!==true&&lastTerm&&equal(term,lastTerm))return;$.data(this.container,"select2-last-term",term);if(initial!==true&&(this.showSearchInput===false||!this.opened())){return;}
function postRender(){results.scrollTop(0);search.removeClass("select2-active");self.positionDropdown();}
function render(html){results.html(html);postRender();}
var maxSelSize=this.getMaximumSelectionSize();if(maxSelSize>=1){data=this.data();if($.isArray(data)&&data.length>=maxSelSize&&checkFormatter(opts.formatSelectionTooBig,"formatSelectionTooBig")){render("<li class='select2-selection-limit'>"+opts.formatSelectionTooBig(maxSelSize)+"</li>");return;}}
if(search.val().length<opts.minimumInputLength){if(checkFormatter(opts.formatInputTooShort,"formatInputTooShort")){render("<li class='select2-no-results'>"+opts.formatInputTooShort(search.val(),opts.minimumInputLength)+"</li>");}else{render("");}
if(initial)this.showSearch(true);return;}
if(opts.maximumInputLength&&search.val().length>opts.maximumInputLength){if(checkFormatter(opts.formatInputTooLong,"formatInputTooLong")){render("<li class='select2-no-results'>"+opts.formatInputTooLong(search.val(),opts.maximumInputLength)+"</li>");}else{render("");}
return;}
if(opts.formatSearching&&this.findHighlightableChoices().length===0){render("<li class='select2-searching'>"+opts.formatSearching()+"</li>");}
search.addClass("select2-active");input=this.tokenize();if(input!=undefined&&input!=null){search.val(input);}
this.resultsPage=1;opts.query({element:opts.element,term:search.val(),page:this.resultsPage,context:null,matcher:opts.matcher,callback:this.bind(function(data){var def;if(!this.opened()){this.search.removeClass("select2-active");return;}
this.context=(data.context===undefined)?null:data.context;if(this.opts.createSearchChoice&&search.val()!==""){def=this.opts.createSearchChoice.call(null,search.val(),data.results);if(def!==undefined&&def!==null&&self.id(def)!==undefined&&self.id(def)!==null){if($(data.results).filter(function(){return equal(self.id(this),self.id(def));}).length===0){data.results.unshift(def);}}}
if(data.results.length===0&&checkFormatter(opts.formatNoMatches,"formatNoMatches")){render("<li class='select2-no-results'>"+opts.formatNoMatches(search.val())+"</li>");return;}
results.empty();self.opts.populateResults.call(this,results,data.results,{term:search.val(),page:this.resultsPage,context:null});if(data.more===true&&checkFormatter(opts.formatLoadMore,"formatLoadMore")){results.append("<li class='select2-more-results'>"+self.opts.escapeMarkup(opts.formatLoadMore(this.resultsPage))+"</li>");window.setTimeout(function(){self.loadMoreIfNeeded();},10);}
this.postprocessResults(data,initial);postRender();this.opts.element.trigger({type:"select2-loaded",data:data});})});},cancel:function(){this.close();},blur:function(){if(this.opts.selectOnBlur)
this.selectHighlighted({noFocus:true});this.close();this.container.removeClass("select2-container-active");if(this.search[0]===document.activeElement){this.search.blur();}
this.clearSearch();this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");},focusSearch:function(){focus(this.search);},selectHighlighted:function(options){var index=this.highlight(),highlighted=this.results.find(".select2-highlighted"),data=highlighted.closest('.select2-result').data("select2-data");if(data){this.highlight(index);this.onSelect(data,options);}},getPlaceholder:function(){return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder;},initContainerWidth:function(){function resolveContainerWidth(){var style,attrs,matches,i,l;if(this.opts.width==="off"){return null;}else if(this.opts.width==="element"){return this.opts.element.outerWidth(false)===0?'auto':this.opts.element.outerWidth(false)+'px';}else if(this.opts.width==="copy"||this.opts.width==="resolve"){style=this.opts.element.attr('style');if(style!==undefined){attrs=style.split(';');for(i=0,l=attrs.length;i<l;i=i+1){matches=attrs[i].replace(/\s/g,'').match(/width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);if(matches!==null&&matches.length>=1)
return matches[1];}}
style=this.opts.element.css('width');if(style&&style.length>0)return style;if(this.opts.width==="resolve"){return(this.opts.element.outerWidth(false)===0?'auto':this.opts.element.outerWidth(false)+'px');}
return null;}else if($.isFunction(this.opts.width)){return this.opts.width();}else{return this.opts.width;}};var width=resolveContainerWidth.call(this);if(width!==null){this.container.css("width",width);}}});SingleSelect2=clazz(AbstractSelect2,{createContainer:function(){var container=$(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <div><b></b></div>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return container;},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.focusser.prop("disabled",!this.isInterfaceEnabled());}},opening:function(){var el,range;this.parent.opening.apply(this,arguments);if(this.showSearchInput!==false){this.search.val(this.focusser.val());}
this.search.focus();el=this.search.get(0);if(el.createTextRange){range=el.createTextRange();range.collapse(false);range.select();}
this.focusser.prop("disabled",true).val("");this.updateResults(true);this.opts.element.trigger($.Event("select2-open"));},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus();},focus:function(){if(this.opened()){this.close();}else{this.focusser.removeAttr("disabled");this.focusser.focus();}},isFocused:function(){return this.container.hasClass("select2-container-active");},cancel:function(){this.parent.cancel.apply(this,arguments);this.focusser.removeAttr("disabled");this.focusser.focus();},initContainer:function(){var selection,container=this.container,dropdown=this.dropdown;this.showSearch(false);this.selection=selection=container.find(".select2-choice");this.focusser=container.find(".select2-focusser");this.focusser.attr("id","s2id_autogen"+nextUid());$("label[for='"+this.opts.element.attr("id")+"']").attr('for',this.focusser.attr('id'));this.focusser.attr("tabindex",this.elementTabIndex);this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;if(e.which===KEY.PAGE_UP||e.which===KEY.PAGE_DOWN){killEvent(e);return;}
switch(e.which){case KEY.UP:case KEY.DOWN:this.moveHighlight((e.which===KEY.UP)?-1:1);killEvent(e);return;case KEY.ENTER:this.selectHighlighted();killEvent(e);return;case KEY.TAB:this.selectHighlighted({noFocus:true});return;case KEY.ESC:this.cancel(e);killEvent(e);return;}}));this.search.on("blur",this.bind(function(e){if(document.activeElement===this.body().get(0)){window.setTimeout(this.bind(function(){this.search.focus();}),0);}}));this.focusser.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;if(e.which===KEY.TAB||KEY.isControl(e)||KEY.isFunctionKey(e)||e.which===KEY.ESC){return;}
if(this.opts.openOnEnter===false&&e.which===KEY.ENTER){killEvent(e);return;}
if(e.which==KEY.DOWN||e.which==KEY.UP||(e.which==KEY.ENTER&&this.opts.openOnEnter)){this.open();killEvent(e);return;}
if(e.which==KEY.DELETE||e.which==KEY.BACKSPACE){if(this.opts.allowClear){this.clear();}
killEvent(e);return;}}));installKeyUpChangeEvent(this.focusser);this.focusser.on("keyup-change input",this.bind(function(e){e.stopPropagation();if(this.opened())return;this.open();}));selection.on("mousedown","abbr",this.bind(function(e){if(!this.isInterfaceEnabled())return;this.clear();killEventImmediately(e);this.close();this.selection.focus();}));selection.on("mousedown",this.bind(function(e){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
if(this.opened()){this.close();}else if(this.isInterfaceEnabled()){this.open();}
killEvent(e);}));dropdown.on("mousedown",this.bind(function(){this.search.focus();}));selection.on("focus",this.bind(function(e){killEvent(e);}));this.focusser.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.container.addClass("select2-container-active");})).on("blur",this.bind(function(){if(!this.opened()){this.container.removeClass("select2-container-active");this.opts.element.trigger($.Event("select2-blur"));}}));this.search.on("focus",this.bind(function(){if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.container.addClass("select2-container-active");}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.setPlaceholder();},clear:function(triggerChange){var data=this.selection.data("select2-data");if(data){this.opts.element.val("");this.selection.find("span").empty();this.selection.removeData("select2-data");this.setPlaceholder();if(triggerChange!==false){this.opts.element.trigger({type:"select2-removed",val:this.id(data),choice:data});this.triggerChange({removed:data});}}},initSelection:function(){var selected;if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([]);this.close();this.setPlaceholder();}else{var self=this;this.opts.initSelection.call(null,this.opts.element,function(selected){if(selected!==undefined&&selected!==null){self.updateSelection(selected);self.close();self.setPlaceholder();}});}},prepareOpts:function(){var opts=this.parent.prepareOpts.apply(this,arguments),self=this;if(opts.element.get(0).tagName.toLowerCase()==="select"){opts.initSelection=function(element,callback){var selected=element.find(":selected");callback(self.optionToData(selected));};}else if("data"in opts){opts.initSelection=opts.initSelection||function(element,callback){var id=element.val();var match=null;opts.query({matcher:function(term,text,el){var is_match=equal(id,opts.id(el));if(is_match){match=el;}
return is_match;},callback:!$.isFunction(callback)?$.noop:function(){callback(match);}});};}
return opts;},getPlaceholder:function(){if(this.select){if(this.select.find("option").first().text()!==""){return undefined;}}
return this.parent.getPlaceholder.apply(this,arguments);},setPlaceholder:function(){var placeholder=this.getPlaceholder();if(this.opts.element.val()===""&&placeholder!==undefined){if(this.select&&this.select.find("option:first").text()!=="")return;this.selection.find("span").html(this.opts.escapeMarkup(placeholder));this.selection.addClass("select2-default");this.container.removeClass("select2-allowclear");}},postprocessResults:function(data,initial,noHighlightUpdate){var selected=0,self=this,showSearchInput=true;this.findHighlightableChoices().each2(function(i,elm){if(equal(self.id(elm.data("select2-data")),self.opts.element.val())){selected=i;return false;}});if(noHighlightUpdate!==false){this.highlight(selected);}
if(initial===true&&this.showSearchInput===false){var min=this.opts.minimumResultsForSearch;if(min>=0){this.showSearch(countResults(data.results)>=min);}}},showSearch:function(showSearchInput){this.showSearchInput=showSearchInput;this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!showSearchInput);this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!showSearchInput);$(this.dropdown,this.container).toggleClass("select2-with-searchbox",showSearchInput);},onSelect:function(data,options){if(!this.triggerSelect(data)){return;}
var old=this.opts.element.val(),oldData=this.data();this.opts.element.val(this.id(data));this.updateSelection(data);this.opts.element.trigger({type:"select2-selected",val:this.id(data),choice:data});this.close();if(!options||!options.noFocus)
this.selection.focus();if(!equal(old,this.id(data))){this.triggerChange({added:data,removed:oldData});}},updateSelection:function(data){var container=this.selection.find("span"),formatted;this.selection.data("select2-data",data);container.empty();formatted=this.opts.formatSelection(data,container);if(formatted!==undefined){container.append(this.opts.escapeMarkup(formatted));}
this.selection.removeClass("select2-default");if(this.opts.allowClear&&this.getPlaceholder()!==undefined){this.container.addClass("select2-allowclear");}},val:function(){var val,triggerChange=false,data=null,self=this,oldData=this.data();if(arguments.length===0){return this.opts.element.val();}
val=arguments[0];if(arguments.length>1){triggerChange=arguments[1];}
if(this.select){this.select.val(val).find(":selected").each2(function(i,elm){data=self.optionToData(elm);return false;});this.updateSelection(data);this.setPlaceholder();if(triggerChange){this.triggerChange({added:data,removed:oldData});}}else{if(this.opts.initSelection===undefined){throw new Error("cannot call val() if initSelection() is not defined");}
if(!val&&val!==0){this.clear(triggerChange);return;}
this.opts.element.val(val);this.opts.initSelection(this.opts.element,function(data){self.opts.element.val(!data?"":self.id(data));self.updateSelection(data);self.setPlaceholder();if(triggerChange){self.triggerChange({added:data,removed:oldData});}});}},clearSearch:function(){this.search.val("");this.focusser.val("");},data:function(value,triggerChange){var data;if(arguments.length===0){data=this.selection.data("select2-data");if(data==undefined)data=null;return data;}else{if(!value||value===""){this.clear(triggerChange);}else{data=this.data();this.opts.element.val(!value?"":this.id(value));this.updateSelection(value);if(triggerChange){this.triggerChange({added:value,removed:data});}}}}});MultiSelect2=clazz(AbstractSelect2,{createContainer:function(){var container=$(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["    <ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitilize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return container;},prepareOpts:function(){var opts=this.parent.prepareOpts.apply(this,arguments),self=this;if(opts.element.get(0).tagName.toLowerCase()==="select"){opts.initSelection=function(element,callback){var data=[];element.find(":selected").each2(function(i,elm){data.push(self.optionToData(elm));});callback(data);};}else if("data"in opts){opts.initSelection=opts.initSelection||function(element,callback){var ids=splitVal(element.val(),opts.separator);var matches=[];opts.query({matcher:function(term,text,el){var is_match=$.grep(ids,function(id){return equal(id,opts.id(el));}).length;if(is_match){matches.push(el);}
return is_match;},callback:!$.isFunction(callback)?$.noop:function(){var ordered=[];for(var i=0;i<ids.length;i++){var id=ids[i];for(var j=0;j<matches.length;j++){var match=matches[j];if(equal(id,opts.id(match))){ordered.push(match);matches.splice(j,1);break;}}}
callback(ordered);}});};}
return opts;},selectChoice:function(choice){var selected=this.container.find(".select2-search-choice-focus");if(selected.length&&choice&&choice[0]==selected[0]){}else{if(selected.length){this.opts.element.trigger("choice-deselected",selected);}
selected.removeClass("select2-search-choice-focus");if(choice&&choice.length){this.close();choice.addClass("select2-search-choice-focus");this.opts.element.trigger("choice-selected",choice);}}},initContainer:function(){var selector=".select2-choices",selection;this.searchContainer=this.container.find(".select2-search-field");this.selection=selection=this.container.find(selector);var _this=this;this.selection.on("mousedown",".select2-search-choice",function(e){_this.search[0].focus();_this.selectChoice($(this));})
this.search.attr("id","s2id_autogen"+nextUid());$("label[for='"+this.opts.element.attr("id")+"']").attr('for',this.search.attr('id'));this.search.on("input paste",this.bind(function(){if(!this.isInterfaceEnabled())return;if(!this.opened()){this.open();}}));this.search.attr("tabindex",this.elementTabIndex);this.keydowns=0;this.search.on("keydown",this.bind(function(e){if(!this.isInterfaceEnabled())return;++this.keydowns;var selected=selection.find(".select2-search-choice-focus");var prev=selected.prev(".select2-search-choice:not(.select2-locked)");var next=selected.next(".select2-search-choice:not(.select2-locked)");var pos=getCursorInfo(this.search);if(selected.length&&(e.which==KEY.LEFT||e.which==KEY.RIGHT||e.which==KEY.BACKSPACE||e.which==KEY.DELETE||e.which==KEY.ENTER)){var selectedChoice=selected;if(e.which==KEY.LEFT&&prev.length){selectedChoice=prev;}
else if(e.which==KEY.RIGHT){selectedChoice=next.length?next:null;}
else if(e.which===KEY.BACKSPACE){this.unselect(selected.first());this.search.width(10);selectedChoice=prev.length?prev:next;}else if(e.which==KEY.DELETE){this.unselect(selected.first());this.search.width(10);selectedChoice=next.length?next:null;}else if(e.which==KEY.ENTER){selectedChoice=null;}
this.selectChoice(selectedChoice);killEvent(e);if(!selectedChoice||!selectedChoice.length){this.open();}
return;}else if(((e.which===KEY.BACKSPACE&&this.keydowns==1)||e.which==KEY.LEFT)&&(pos.offset==0&&!pos.length)){this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());killEvent(e);return;}else{this.selectChoice(null);}
if(this.opened()){switch(e.which){case KEY.UP:case KEY.DOWN:this.moveHighlight((e.which===KEY.UP)?-1:1);killEvent(e);return;case KEY.ENTER:this.selectHighlighted();killEvent(e);return;case KEY.TAB:this.selectHighlighted({noFocus:true});return;case KEY.ESC:this.cancel(e);killEvent(e);return;}}
if(e.which===KEY.TAB||KEY.isControl(e)||KEY.isFunctionKey(e)||e.which===KEY.BACKSPACE||e.which===KEY.ESC){return;}
if(e.which===KEY.ENTER){if(this.opts.openOnEnter===false){return;}else if(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey){return;}}
this.open();if(e.which===KEY.PAGE_UP||e.which===KEY.PAGE_DOWN){killEvent(e);}
if(e.which===KEY.ENTER){killEvent(e);}}));this.search.on("keyup",this.bind(function(e){this.keydowns=0;this.resizeSearch();}));this.search.on("blur",this.bind(function(e){this.container.removeClass("select2-container-active");this.search.removeClass("select2-focused");this.selectChoice(null);if(!this.opened())this.clearSearch();e.stopImmediatePropagation();this.opts.element.trigger($.Event("select2-blur"));}));this.container.on("mousedown",selector,this.bind(function(e){if(!this.isInterfaceEnabled())return;if($(e.target).closest(".select2-search-choice").length>0){return;}
this.selectChoice(null);this.clearPlaceholder();if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.open();this.focusSearch();e.preventDefault();}));this.container.on("focus",selector,this.bind(function(){if(!this.isInterfaceEnabled())return;if(!this.container.hasClass("select2-container-active")){this.opts.element.trigger($.Event("select2-focus"));}
this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");this.clearPlaceholder();}));this.initContainerWidth();this.opts.element.addClass("select2-offscreen");this.clearSearch();},enableInterface:function(){if(this.parent.enableInterface.apply(this,arguments)){this.search.prop("disabled",!this.isInterfaceEnabled());}},initSelection:function(){var data;if(this.opts.element.val()===""&&this.opts.element.text()===""){this.updateSelection([]);this.close();this.clearSearch();}
if(this.select||this.opts.element.val()!==""){var self=this;this.opts.initSelection.call(null,this.opts.element,function(data){if(data!==undefined&&data!==null){self.updateSelection(data);self.close();self.clearSearch();}});}},clearSearch:function(){var placeholder=this.getPlaceholder(),maxWidth=this.getMaxSearchWidth();if(placeholder!==undefined&&this.getVal().length===0&&this.search.hasClass("select2-focused")===false){this.search.val(placeholder).addClass("select2-default");this.search.width(maxWidth>0?maxWidth:this.container.css("width"));}else{this.search.val("").width(10);}},clearPlaceholder:function(){if(this.search.hasClass("select2-default")){this.search.val("").removeClass("select2-default");}},opening:function(){this.clearPlaceholder();this.resizeSearch();this.parent.opening.apply(this,arguments);this.focusSearch();this.updateResults(true);this.search.focus();this.opts.element.trigger($.Event("select2-open"));},close:function(){if(!this.opened())return;this.parent.close.apply(this,arguments);},focus:function(){this.close();this.search.focus();},isFocused:function(){return this.search.hasClass("select2-focused");},updateSelection:function(data){var ids=[],filtered=[],self=this;$(data).each(function(){if(indexOf(self.id(this),ids)<0){ids.push(self.id(this));filtered.push(this);}});data=filtered;this.selection.find(".select2-search-choice").remove();$(data).each(function(){self.addSelectedChoice(this);});self.postprocessResults();},tokenize:function(){var input=this.search.val();input=this.opts.tokenizer(input,this.data(),this.bind(this.onSelect),this.opts);if(input!=null&&input!=undefined){this.search.val(input);if(input.length>0){this.open();}}},onSelect:function(data,options){if(!this.triggerSelect(data)){return;}
this.addSelectedChoice(data);this.opts.element.trigger({type:"selected",val:this.id(data),choice:data});if(this.select||!this.opts.closeOnSelect)this.postprocessResults();if(this.opts.closeOnSelect){this.close();this.search.width(10);}else{if(this.countSelectableResults()>0){this.search.width(10);this.resizeSearch();if(this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()){this.updateResults(true);}
this.positionDropdown();}else{this.close();this.search.width(10);}}
this.triggerChange({added:data});if(!options||!options.noFocus)
this.focusSearch();},cancel:function(){this.close();this.focusSearch();},addSelectedChoice:function(data){var enableChoice=!data.locked,enabledItem=$("<li class='select2-search-choice'>"+"    <div></div>"+"    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>"+"</li>"),disabledItem=$("<li class='select2-search-choice select2-locked'>"+"<div></div>"+"</li>");var choice=enableChoice?enabledItem:disabledItem,id=this.id(data),val=this.getVal(),formatted;formatted=this.opts.formatSelection(data,choice.find("div"));if(formatted!=undefined){choice.find("div").replaceWith("<div title='"+this.opts.escapeMarkup(formatted)+"'>"+this.opts.escapeMarkup(formatted)+"</div>");}
if(enableChoice){choice.find(".select2-search-choice-close").on("mousedown",killEvent).on("click dblclick",this.bind(function(e){if(!this.isInterfaceEnabled())return;$(e.target).closest(".select2-search-choice").fadeOut('fast',this.bind(function(){this.unselect($(e.target));this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");this.close();this.focusSearch();})).dequeue();killEvent(e);})).on("focus",this.bind(function(){if(!this.isInterfaceEnabled())return;this.container.addClass("select2-container-active");this.dropdown.addClass("select2-drop-active");}));}
choice.data("select2-data",data);choice.insertBefore(this.searchContainer);val.push(id);this.setVal(val);},unselect:function(selected){var val=this.getVal(),data,index;selected=selected.closest(".select2-search-choice");if(selected.length===0){throw"Invalid argument: "+selected+". Must be .select2-search-choice";}
data=selected.data("select2-data");if(!data){return;}
index=indexOf(this.id(data),val);if(index>=0){val.splice(index,1);this.setVal(val);if(this.select)this.postprocessResults();}
selected.remove();this.opts.element.trigger({type:"removed",val:this.id(data),choice:data});this.triggerChange({removed:data});},postprocessResults:function(data,initial,noHighlightUpdate){var val=this.getVal(),choices=this.results.find(".select2-result"),compound=this.results.find(".select2-result-with-children"),self=this;choices.each2(function(i,choice){var id=self.id(choice.data("select2-data"));if(indexOf(id,val)>=0){choice.addClass("select2-selected");choice.find(".select2-result-selectable").addClass("select2-selected");}});compound.each2(function(i,choice){if(!choice.is('.select2-result-selectable')&&choice.find(".select2-result-selectable:not(.select2-selected)").length===0){choice.addClass("select2-selected");}});if(this.highlight()==-1&&noHighlightUpdate!==false){self.highlight(0);}
if(!this.opts.createSearchChoice&&!choices.filter('.select2-result:not(.select2-selected)').length>0){this.results.append("<li class='select2-no-results'>"+self.opts.formatNoMatches(self.search.val())+"</li>");}},getMaxSearchWidth:function(){return this.selection.width()-getSideBorderPadding(this.search);},resizeSearch:function(){var minimumWidth,left,maxWidth,containerLeft,searchWidth,sideBorderPadding=getSideBorderPadding(this.search);minimumWidth=measureTextWidth(this.search)+10;left=this.search.offset().left;maxWidth=this.selection.width();containerLeft=this.selection.offset().left;searchWidth=maxWidth-(left-containerLeft)-sideBorderPadding;if(searchWidth<minimumWidth){searchWidth=maxWidth-sideBorderPadding;}
if(searchWidth<40){searchWidth=maxWidth-sideBorderPadding;}
if(searchWidth<=0){searchWidth=minimumWidth;}
this.search.width(searchWidth);},getVal:function(){var val;if(this.select){val=this.select.val();return val===null?[]:val;}else{val=this.opts.element.val();return splitVal(val,this.opts.separator);}},setVal:function(val){var unique;if(this.select){this.select.val(val);}else{unique=[];$(val).each(function(){if(indexOf(this,unique)<0)unique.push(this);});this.opts.element.val(unique.length===0?"":unique.join(this.opts.separator));}},buildChangeDetails:function(old,current){var current=current.slice(0),old=old.slice(0);for(var i=0;i<current.length;i++){for(var j=0;j<old.length;j++){if(equal(this.opts.id(current[i]),this.opts.id(old[j]))){current.splice(i,1);i--;old.splice(j,1);j--;}}}
return{added:current,removed:old};},val:function(val,triggerChange){var oldData,self=this,changeDetails;if(arguments.length===0){return this.getVal();}
oldData=this.data();if(!oldData.length)oldData=[];if(!val&&val!==0){this.opts.element.val("");this.updateSelection([]);this.clearSearch();if(triggerChange){this.triggerChange({added:this.data(),removed:oldData});}
return;}
this.setVal(val);if(this.select){this.opts.initSelection(this.select,this.bind(this.updateSelection));if(triggerChange){this.triggerChange(this.buildChangeDetails(oldData,this.data()));}}else{if(this.opts.initSelection===undefined){throw new Error("val() cannot be called if initSelection() is not defined");}
this.opts.initSelection(this.opts.element,function(data){var ids=$(data).map(self.id);self.setVal(ids);self.updateSelection(data);self.clearSearch();if(triggerChange){self.triggerChange(this.buildChangeDetails(oldData,this.data()));}});}
this.clearSearch();},onSortStart:function(){if(this.select){throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");}
this.search.width(0);this.searchContainer.hide();},onSortEnd:function(){var val=[],self=this;this.searchContainer.show();this.searchContainer.appendTo(this.searchContainer.parent());this.resizeSearch();this.selection.find(".select2-search-choice").each(function(){val.push(self.opts.id($(this).data("select2-data")));});this.setVal(val);this.triggerChange();},data:function(values,triggerChange){var self=this,ids,old;if(arguments.length===0){return this.selection.find(".select2-search-choice").map(function(){return $(this).data("select2-data");}).get();}else{old=this.data();if(!values){values=[];}
ids=$.map(values,function(e){return self.opts.id(e);});this.setVal(ids);this.updateSelection(values);this.clearSearch();if(triggerChange){this.triggerChange(this.buildChangeDetails(old,this.data()));}}}});$.fn.select2=function(){var args=Array.prototype.slice.call(arguments,0),opts,select2,value,multiple,allowedMethods=["val","destroy","opened","open","close","focus","isFocused","container","onSortStart","onSortEnd","enable","readonly","positionDropdown","data"],valueMethods=["val","opened","isFocused","container","data"];this.each(function(){if(args.length===0||typeof(args[0])==="object"){opts=args.length===0?{}:$.extend({},args[0]);opts.element=$(this);if(opts.element.get(0).tagName.toLowerCase()==="select"){multiple=opts.element.prop("multiple");}else{multiple=opts.multiple||false;if("tags"in opts){opts.multiple=multiple=true;}}
select2=multiple?new MultiSelect2():new SingleSelect2();select2.init(opts);}else if(typeof(args[0])==="string"){if(indexOf(args[0],allowedMethods)<0){throw"Unknown method: "+args[0];}
value=undefined;select2=$(this).data("select2");if(select2===undefined)return;if(args[0]==="container"){value=select2.container;}else{value=select2[args[0]].apply(select2,args.slice(1));}
if(indexOf(args[0],valueMethods)>=0){return false;}}else{throw"Invalid arguments to select2 plugin: "+args;}});return(value===undefined)?this:value;};$.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:true,openOnEnter:true,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(result,container,query,escapeMarkup){var markup=[];markMatch(result.text,query.term,markup,escapeMarkup);return markup.join("");},formatSelection:function(data,container){return data?data.text:undefined;},sortResults:function(results,container,query){return results;},formatResultCssClass:function(data){return undefined;},formatNoMatches:function(){return"No matches found";},formatInputTooShort:function(input,min){var n=min-input.length;return"Please enter "+n+" more character"+(n==1?"":"s");},formatInputTooLong:function(input,max){var n=input.length-max;return"Please delete "+n+" character"+(n==1?"":"s");},formatSelectionTooBig:function(limit){return"You can only select "+limit+" item"+(limit==1?"":"s");},formatLoadMore:function(pageNumber){return"Loading more results...";},formatSearching:function(){return"Searching...";},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(e){return e.id;},matcher:function(term,text){return(''+text).toUpperCase().indexOf((''+term).toUpperCase())>=0;},separator:",",tokenSeparators:[],tokenizer:defaultTokenizer,escapeMarkup:function(markup){var replace_map={'\\':'&#92;','&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;',"/":'&#47;'};return String(markup).replace(/[&<>"'\/\\]/g,function(match){return replace_map[match];});},blurOnChange:false,selectOnBlur:false,adaptContainerCssClass:function(c){return c;},adaptDropdownCssClass:function(c){return null;}};$.fn.select2.ajaxDefaults={transport:$.ajax,params:{type:"GET",cache:false,dataType:"json"}};window.Select2={query:{ajax:ajax,local:local,tags:tags},util:{debounce:debounce,markMatch:markMatch},"class":{"abstract":AbstractSelect2,"single":SingleSelect2,"multi":MultiSelect2}};}(jQuery));(function($){"use strict";$.extend($.fn.select2.defaults,{formatNoMatches:function(){return"Совпадений не найдено";},formatInputTooShort:function(input,min){var n=min-input.length;return"Пожалуйста, введите еще "+n+" символ"+(n==1?"":((n>1)&&(n<5)?"а":"ов"));},formatInputTooLong:function(input,max){var n=input.length-max;return"Пожалуйста, введите на "+n+" символ"+(n==1?"":((n>1)&&(n<5)?"а":"ов"))+" меньше";},formatSelectionTooBig:function(limit){return"Вы можете выбрать не более "+limit+" элемент"+(limit==1?"а":"ов");},formatLoadMore:function(pageNumber){return"Загрузка данных...";},formatSearching:function(){return"Поиск...";}});})(jQuery);(function($){var methods={init:function(options){var form=this;if(!form.data('jqv')||form.data('jqv')==null){methods._saveOptions(form,options);$(".formError").live("click",function(){$(this).fadeOut(150,function(){$(this).remove();});});}
return this;},attach:function(userOptions){var form=this;var options;if(userOptions)
options=methods._saveOptions(form,userOptions);else
options=form.data('jqv');var validateAttribute=(form.find("[data-validation-engine*=validate]"))?"data-validation-engine":"class";if(!options.binded){if(options.bindMethod=="bind"){form.find("[class*=validate]").not("[type=checkbox]").not("[type=radio]").not(".datepicker").bind(options.validationEventTrigger,methods._onFieldEvent);form.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").bind("click",methods._onFieldEvent);form.find("[class*=validate][class*=datepicker]").bind(options.validationEventTrigger,{"delay":300},methods._onFieldEvent);form.bind("submit",methods._onSubmitEvent);}else if(options.bindMethod=="live"){form.find("[class*=validate]").not("[type=checkbox]").not(".datepicker").live(options.validationEventTrigger,methods._onFieldEvent);form.find("[class*=validate][type=checkbox]").live("click",methods._onFieldEvent);form.find("[class*=validate][class*=datepicker]").live(options.validationEventTrigger,{"delay":300},methods._onFieldEvent);form.live("submit",methods._onSubmitEvent);}
options.binded=true;if(options.autoPositionUpdate){$(window).bind("resize",{"noAnimation":true,"formElem":form},methods.updatePromptsPosition);}}
return this;},detach:function(){var form=this;var options=form.data('jqv');if(options.binded){form.find("[class*=validate]").not("[type=checkbox]").unbind(options.validationEventTrigger,methods._onFieldEvent);form.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").unbind("click",methods._onFieldEvent);form.unbind("submit",methods.onAjaxFormComplete);form.find("[class*=validate]").not("[type=checkbox]").die(options.validationEventTrigger,methods._onFieldEvent);form.find("[class*=validate][type=checkbox]").die("click",methods._onFieldEvent);form.die("submit",methods.onAjaxFormComplete);form.removeData('jqv');if(options.autoPositionUpdate){$(window).unbind("resize",methods.updatePromptsPosition)}}
return this;},validate:function(){return methods._validateFields(this);},validateField:function(el){var options=$(this).data('jqv');var r=methods._validateField($(el),options);if(options.onSuccess&&options.InvalidFields.length==0)
options.onSuccess();else if(options.onFailure&&options.InvalidFields.length>0)
options.onFailure();return r;},validateform:function(){return methods._onSubmitEvent.call(this);},updatePromptsPosition:function(event){if(event&&this==window)
var form=event.data.formElem,noAnimation=event.data.noAnimation;else
var form=$(this.closest('form'));var options=form.data('jqv');form.find('[class*=validate]').not(':hidden').not(":disabled").each(function(){var field=$(this);var prompt=methods._getPrompt(field);var promptText=$(prompt).find(".formErrorContent").html();if(prompt)
methods._updatePrompt(field,$(prompt),promptText,undefined,false,options,noAnimation);})
return this;},showPrompt:function(promptText,type,promptPosition,showArrow){var form=this.closest('form');var options=form.data('jqv');if(!options)options=methods._saveOptions(this,options);if(promptPosition)
options.promptPosition=promptPosition;options.showArrow=showArrow==true;methods._showPrompt(this,promptText,type,false,options);return this;},hidePrompt:function(){var promptClass="."+methods._getClassName($(this).attr("id"))+"formError";$(promptClass).fadeTo("fast",0.3,function(){$(this).remove();});return this;},hide:function(){var closingtag;if($(this).is("form")){closingtag="parentForm"+methods._getClassName($(this).attr("id"));}else{closingtag=methods._getClassName($(this).attr("id"))+"formError";}
$('.'+closingtag).fadeTo("fast",0.3,function(){$(this).remove();});return this;},hideAll:function(){$('.formError').fadeTo("fast",0.3,function(){$(this).remove();});return this;},_onFieldEvent:function(event){var field=$(this);var form=field.closest('form');var options=form.data('jqv');window.setTimeout(function(){methods._validateField(field,options);if(options.InvalidFields.length==0&&options.onSuccess){options.onSuccess();}else if(options.InvalidFields.length>0&&options.onFailure){options.onFailure();}},(event.data)?event.data.delay:0);},_onSubmitEvent:function(){var form=$(this);var options=form.data('jqv');var r=methods._validateFields(form,true);if(r&&options.ajaxFormValidation){methods._validateFormWithAjax(form,options);return false;}
if(options.onValidationComplete){options.onValidationComplete(form,r);return false;}
return r;},_checkAjaxStatus:function(options){var status=true;$.each(options.ajaxValidCache,function(key,value){if(!value){status=false;return false;}});return status;},_validateFields:function(form,skipAjaxValidation){var options=form.data('jqv');var errorFound=false;form.trigger("jqv.form.validating");var first_err=null;form.find('[class*=validate]').not(':hidden').not(":disabled").each(function(){var field=$(this);errorFound|=methods._validateField(field,options,skipAjaxValidation);field.focus();if(options.doNotShowAllErrosOnSubmit)
return false;if(errorFound&&first_err==null)first_err=field;});form.trigger("jqv.form.result",[errorFound]);if(errorFound){if(options.scroll){var destination=first_err.offset().top;var fixleft=first_err.offset().left;var positionType=options.promptPosition;if(typeof(positionType)=='string'){if(positionType.indexOf(":")!=-1){positionType=positionType.substring(0,positionType.indexOf(":"));}}
if(positionType!="bottomRight"&&positionType!="bottomLeft"){var prompt_err=methods._getPrompt(first_err);destination=prompt_err.offset().top;}
$("html:not(:animated),body:not(:animated)").animate({scrollTop:destination,scrollLeft:fixleft},1100,function(){if(options.focusFirstField)first_err.focus();});if(options.isOverflown){var overflowDIV=$(options.overflownDIV);var scrollContainerScroll=overflowDIV.scrollTop();var scrollContainerPos=-parseInt(overflowDIV.offset().top);destination+=scrollContainerScroll+scrollContainerPos-5;var scrollContainer=$(options.overflownDIV+":not(:animated)");scrollContainer.animate({scrollTop:destination},1100);}}else if(options.focusFirstField)
first_err.focus();return false;}
return true;},_validateFormWithAjax:function(form,options){var data=form.serialize();var url=(options.ajaxFormValidationURL)?options.ajaxFormValidationURL:form.attr("action");$.ajax({type:"GET",url:url,cache:false,dataType:"json",data:data,form:form,methods:methods,options:options,beforeSend:function(){return options.onBeforeAjaxFormValidation(form,options);},error:function(data,transport){methods._ajaxError(data,transport);},success:function(json){if(json!==true){var errorInForm=false;for(var i=0;i<json.length;i++){var value=json[i];var errorFieldId=value[0];var errorField=$($("#"+errorFieldId)[0]);if(errorField.length==1){var msg=value[2];if(value[1]==true){if(msg==""||!msg){methods._closePrompt(errorField);}else{if(options.allrules[msg]){var txt=options.allrules[msg].alertTextOk;if(txt)
msg=txt;}
methods._showPrompt(errorField,msg,"pass",false,options,true);}}else{errorInForm|=true;if(options.allrules[msg]){var txt=options.allrules[msg].alertText;if(txt)
msg=txt;}
methods._showPrompt(errorField,msg,"",false,options,true);}}}
options.onAjaxFormComplete(!errorInForm,form,json,options);}else
options.onAjaxFormComplete(true,form,"",options);}});},_validateField:function(field,options,skipAjaxValidation){if(!field.attr("id"))
$.error("jQueryValidate: an ID attribute is required for this field: "+field.attr("name")+" class:"+
field.attr("class"));var rulesParsing=field.attr('class');var getRules=/validate\[(.*)\]/.exec(rulesParsing);if(!getRules)
return false;var str=getRules[1];var rules=str.split(/\[|,|\]/);var isAjaxValidator=false;var fieldName=field.attr("name");var promptText="";var required=false;options.isError=false;options.showArrow=true;var form=$(field.closest("form"));for(var i=0;i<rules.length;i++){rules[i]=rules[i].replace(" ","")
var errorMsg=undefined;switch(rules[i]){case"required":required=true;errorMsg=methods._required(field,rules,i,options);break;case"custom":errorMsg=methods._customRegex(field,rules,i,options);break;case"groupRequired":var classGroup="[class*="+rules[i+1]+"]";var firstOfGroup=form.find(classGroup).eq(0);if(firstOfGroup[0]!=field[0]){methods._validateField(firstOfGroup,options,skipAjaxValidation)
options.showArrow=true;continue;};errorMsg=methods._groupRequired(field,rules,i,options);if(errorMsg)required=true;options.showArrow=false;break;case"ajax":if(!skipAjaxValidation){methods._ajax(field,rules,i,options);isAjaxValidator=true;}
break;case"minSize":errorMsg=methods._minSize(field,rules,i,options);break;case"maxSize":errorMsg=methods._maxSize(field,rules,i,options);break;case"min":errorMsg=methods._min(field,rules,i,options);break;case"max":errorMsg=methods._max(field,rules,i,options);break;case"past":errorMsg=methods._past(field,rules,i,options);break;case"future":errorMsg=methods._future(field,rules,i,options);break;case"dateRange":var classGroup="[class*="+rules[i+1]+"]";var firstOfGroup=form.find(classGroup).eq(0);var secondOfGroup=form.find(classGroup).eq(1);if(firstOfGroup[0].value||secondOfGroup[0].value){errorMsg=methods._dateRange(firstOfGroup,secondOfGroup,rules,i,options);}
if(errorMsg)required=true;options.showArrow=false;break;case"dateTimeRange":var classGroup="[class*="+rules[i+1]+"]";var firstOfGroup=form.find(classGroup).eq(0);var secondOfGroup=form.find(classGroup).eq(1);if(firstOfGroup[0].value||secondOfGroup[0].value){errorMsg=methods._dateTimeRange(firstOfGroup,secondOfGroup,rules,i,options);}
if(errorMsg)required=true;options.showArrow=false;break;case"maxCheckbox":errorMsg=methods._maxCheckbox(form,field,rules,i,options);field=$(form.find("input[name='"+fieldName+"']"));break;case"minCheckbox":errorMsg=methods._minCheckbox(form,field,rules,i,options);field=$(form.find("input[name='"+fieldName+"']"));break;case"equals":errorMsg=methods._equals(field,rules,i,options);break;case"funcCall":errorMsg=methods._funcCall(field,rules,i,options);break;default:}
if(errorMsg!==undefined){promptText+=errorMsg+"<br/>";options.isError=true;}}
if(!required&&field.val()=="")options.isError=false;var fieldType=field.prop("type");if((fieldType=="radio"||fieldType=="checkbox")&&form.find("input[name='"+fieldName+"']").size()>1){field=$(form.find("input[name='"+fieldName+"'][type!=hidden]:first"));options.showArrow=false;}
if(fieldType=="text"&&form.find("input[name='"+fieldName+"']").size()>1){field=$(form.find("input[name='"+fieldName+"'][type!=hidden]:first"));options.showArrow=false;}
if(options.isError){methods._showPrompt(field,promptText,"",false,options);}else{if(!isAjaxValidator)methods._closePrompt(field);}
if(!isAjaxValidator){field.trigger("jqv.field.result",[field,options.isError,promptText]);}
var errindex=$.inArray(field[0],options.InvalidFields);if(errindex==-1){if(options.isError)
options.InvalidFields.push(field[0]);}else if(!options.isError){options.InvalidFields.splice(errindex,1);}
return options.isError;},_required:function(field,rules,i,options){switch(field.prop("type")){case"text":case"password":case"textarea":case"file":default:if(!field.val())
return options.allrules[rules[i]].alertText;break;case"radio":case"checkbox":var form=field.closest("form");var name=field.attr("name");if(form.find("input[name='"+name+"']:checked").size()==0){if(form.find("input[name='"+name+"']").size()==1)
return options.allrules[rules[i]].alertTextCheckboxe;else
return options.allrules[rules[i]].alertTextCheckboxMultiple;}
break;case"select-one":if(!field.val())
return options.allrules[rules[i]].alertText;break;case"select-multiple":if(!field.find("option:selected").val())
return options.allrules[rules[i]].alertText;break;}},_groupRequired:function(field,rules,i,options){var classGroup="[class*="+rules[i+1]+"]";var isValid=false;field.closest("form").find(classGroup).each(function(){if(!methods._required($(this),rules,i,options)){isValid=true;return false;}})
if(!isValid)return options.allrules[rules[i]].alertText;},_customRegex:function(field,rules,i,options){var customRule=rules[i+1];var rule=options.allrules[customRule];if(!rule){alert("jqv:custom rule not found "+customRule);return;}
var ex=rule.regex;if(!ex){alert("jqv:custom regex not found "+customRule);return;}
var pattern=new RegExp(ex);if(!pattern.test(field.val()))
return options.allrules[customRule].alertText;},_funcCall:function(field,rules,i,options){var functionName=rules[i+1];var fn=window[functionName]||options.customFunctions[functionName];if(typeof(fn)=='function')
return fn(field,rules,i,options);},_equals:function(field,rules,i,options){var equalsField=rules[i+1];if(field.val()!=$("#"+equalsField).val())
return options.allrules.equals.alertText;},_maxSize:function(field,rules,i,options){var max=rules[i+1];var len=field.val().length;if(len>max){var rule=options.allrules.maxSize;return rule.alertText+max+rule.alertText2;}},_minSize:function(field,rules,i,options){var min=rules[i+1];var len=field.val().length;if(len<min){var rule=options.allrules.minSize;return rule.alertText+min+rule.alertText2;}},_min:function(field,rules,i,options){var min=parseFloat(rules[i+1]);var len=parseFloat(field.val());if(len<min){var rule=options.allrules.min;if(rule.alertText2)return rule.alertText+min+rule.alertText2;return rule.alertText+min;}},_max:function(field,rules,i,options){var max=parseFloat(rules[i+1]);var len=parseFloat(field.val());if(len>max){var rule=options.allrules.max;if(rule.alertText2)return rule.alertText+max+rule.alertText2;return rule.alertText+max;}},_past:function(field,rules,i,options){var p=rules[i+1];var pdate=(p.toLowerCase()=="now")?new Date():methods._parseDate(p);var vdate=methods._parseDate(field.val());if(vdate<pdate){var rule=options.allrules.past;if(rule.alertText2)return rule.alertText+methods._dateToString(pdate)+rule.alertText2;return rule.alertText+methods._dateToString(pdate);}},_future:function(field,rules,i,options){var p=rules[i+1];var pdate=(p.toLowerCase()=="now")?new Date():methods._parseDate(p);var vdate=methods._parseDate(field.val());if(vdate>pdate){var rule=options.allrules.future;if(rule.alertText2)return rule.alertText+methods._dateToString(pdate)+rule.alertText2;return rule.alertText+methods._dateToString(pdate);}},_isDate:function(value){var dateRegEx=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);if(dateRegEx.test(value)){return true;}
return false;},_isDateTime:function(value){var dateTimeRegEx=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);if(dateTimeRegEx.test(value)){return true;}
return false;},_dateCompare:function(start,end){return(new Date(start.toString())<new Date(end.toString()));},_dateRange:function(first,second,rules,i,options){if((!first[0].value&&second[0].value)||(first[0].value&&!second[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._isDate(first[0].value)||!methods._isDate(second[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._dateCompare(first[0].value,second[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}},_dateTimeRange:function(first,second,rules,i,options){if((!first[0].value&&second[0].value)||(first[0].value&&!second[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._isDateTime(first[0].value)||!methods._isDateTime(second[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}
if(!methods._dateCompare(first[0].value,second[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2;}},_maxCheckbox:function(form,field,rules,i,options){var nbCheck=rules[i+1];var groupname=field.attr("name");var groupSize=form.find("input[name='"+groupname+"']:checked").size();if(groupSize>nbCheck){options.showArrow=false;if(options.allrules.maxCheckbox.alertText2)return options.allrules.maxCheckbox.alertText+" "+nbCheck+" "+options.allrules.maxCheckbox.alertText2;return options.allrules.maxCheckbox.alertText;}},_minCheckbox:function(form,field,rules,i,options){var nbCheck=rules[i+1];var groupname=field.attr("name");var groupSize=form.find("input[name='"+groupname+"']:checked").size();if(groupSize<nbCheck){options.showArrow=false;return options.allrules.minCheckbox.alertText+" "+nbCheck+" "+options.allrules.minCheckbox.alertText2;}},_ajax:function(field,rules,i,options){var errorSelector=rules[i+1];var rule=options.allrules[errorSelector];var extraData=rule.extraData;var extraDataDynamic=rule.extraDataDynamic;if(!extraData)
extraData="";if(extraDataDynamic){var tmpData=[];var domIds=String(extraDataDynamic).split(",");for(var i=0;i<domIds.length;i++){var id=domIds[i];if($(id).length){var inputValue=field.closest("form").find(id).val();var keyValue=id.replace('#','')+'='+escape(inputValue);tmpData.push(keyValue);}}
extraDataDynamic=tmpData.join("&");}else{extraDataDynamic="";}
if(!options.isError){$.ajax({type:"GET",url:rule.url,cache:false,dataType:"json",data:"fieldId="+field.attr("id")+"&fieldValue="+field.val()+"&extraData="+extraData+"&"+extraDataDynamic,field:field,rule:rule,methods:methods,options:options,beforeSend:function(){var loadingText=rule.alertTextLoad;if(loadingText)
methods._showPrompt(field,loadingText,"load",true,options);},error:function(data,transport){methods._ajaxError(data,transport);},success:function(json){var errorFieldId=json[0];var errorField=$($("#"+errorFieldId)[0]);if(errorField.length==1){var status=json[1];var msg=json[2];if(!status){options.ajaxValidCache[errorFieldId]=false;options.isError=true;if(msg){if(options.allrules[msg]){var txt=options.allrules[msg].alertText;if(txt)
msg=txt;}}
else
msg=rule.alertText;methods._showPrompt(errorField,msg,"",true,options);}else{if(options.ajaxValidCache[errorFieldId]!==undefined)
options.ajaxValidCache[errorFieldId]=true;if(msg){if(options.allrules[msg]){var txt=options.allrules[msg].alertTextOk;if(txt)
msg=txt;}}
else
msg=rule.alertTextOk;if(msg)
methods._showPrompt(errorField,msg,"pass",true,options);else
methods._closePrompt(errorField);}}
errorField.trigger("jqv.field.result",[errorField,!options.isError,msg]);}});}},_ajaxError:function(data,transport){if(data.status==0&&transport==null)
alert("The page is not served from a server! ajax call failed");else if(typeof console!="undefined")
console.log("Ajax error: "+data.status+" "+transport);},_dateToString:function(date){return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();},_parseDate:function(d){var dateParts=d.split("-");if(dateParts==d)
dateParts=d.split("/");return new Date(dateParts[0],(dateParts[1]-1),dateParts[2]);},_showPrompt:function(field,promptText,type,ajaxed,options,ajaxform){var prompt=methods._getPrompt(field);if(ajaxform)prompt=false;if(prompt)
methods._updatePrompt(field,prompt,promptText,type,ajaxed,options);else
methods._buildPrompt(field,promptText,type,ajaxed,options);},_buildPrompt:function(field,promptText,type,ajaxed,options){var prompt=$('<div>');prompt.addClass(methods._getClassName(field.attr("id"))+"formError");if(field.is(":input"))prompt.addClass("parentForm"+methods._getClassName(field.parents('form').attr("id")));prompt.addClass("formError");switch(type){case"pass":prompt.addClass("greenPopup");break;case"load":prompt.addClass("blackPopup");break;default:options.InvalidCount++;}
if(ajaxed)
prompt.addClass("ajaxed");var promptContent=$('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);if(options.showArrow){var arrow=$('<div>').addClass("formErrorArrow");var positionType=field.data("promptPosition")||options.promptPosition;if(typeof(positionType)=='string'){if(positionType.indexOf(":")!=-1){positionType=positionType.substring(0,positionType.indexOf(":"));};};switch(positionType){case"bottomLeft":case"bottomRight":prompt.find(".formErrorContent").before(arrow);arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');break;case"topLeft":case"topRight":arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');prompt.append(arrow);break;}}
if(options.isOverflown)
field.before(prompt);else
$("body").append(prompt);var pos=methods._calculatePosition(field,prompt,options);prompt.css({"top":pos.callerTopPosition,"left":pos.callerleftPosition,"marginTop":pos.marginTopSize,"opacity":0}).data("callerField",field);return prompt.animate({"opacity":0.87});},_updatePrompt:function(field,prompt,promptText,type,ajaxed,options,noAnimation){if(prompt){if(typeof type!=="undefined"){if(type=="pass")
prompt.addClass("greenPopup");else
prompt.removeClass("greenPopup");if(type=="load")
prompt.addClass("blackPopup");else
prompt.removeClass("blackPopup");}
if(ajaxed)
prompt.addClass("ajaxed");else
prompt.removeClass("ajaxed");prompt.find(".formErrorContent").html(promptText);var pos=methods._calculatePosition(field,prompt,options);css={"top":pos.callerTopPosition,"left":pos.callerleftPosition,"marginTop":pos.marginTopSize};if(noAnimation)
prompt.css(css);else
prompt.animate(css)}},_closePrompt:function(field){var prompt=methods._getPrompt(field);if(prompt)
prompt.fadeTo("fast",0,function(){prompt.remove();});},closePrompt:function(field){return methods._closePrompt(field);},_getPrompt:function(field){var className=methods._getClassName(field.attr("id"))+"formError";var match=$("."+methods._escapeExpression(className))[0];if(match)
return $(match);},_escapeExpression:function(selector){return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1");},_calculatePosition:function(field,promptElmt,options){var promptTopPosition,promptleftPosition,marginTopSize;var fieldWidth=field.width();var promptHeight=promptElmt.height();var overflow=options.isOverflown;if(overflow){promptTopPosition=promptleftPosition=0;marginTopSize=-promptHeight;}else{var offset=field.offset();promptTopPosition=offset.top;promptleftPosition=offset.left;marginTopSize=0;}
var positionType=field.data("promptPosition")||options.promptPosition;var shift1="";var shift2="";var shiftX=0;var shiftY=0;if(typeof(positionType)=='string'){if(positionType.indexOf(":")!=-1){shift1=positionType.substring(positionType.indexOf(":")+1);positionType=positionType.substring(0,positionType.indexOf(":"));if(shift1.indexOf(",")!=-1){shift2=shift1.substring(shift1.indexOf(",")+1);shift1=shift1.substring(0,shift1.indexOf(","));shiftY=parseInt(shift2);if(isNaN(shiftY)){shiftY=0;};};shiftX=parseInt(shift1);if(isNaN(shift1)){shift1=0;};};};switch(positionType){default:case"topRight":if(overflow)
promptleftPosition+=fieldWidth-30;else{promptleftPosition+=fieldWidth-30;promptTopPosition+=-promptHeight-2;}
break;case"topLeft":promptTopPosition+=-promptHeight-10;break;case"centerRight":promptleftPosition+=fieldWidth+13;break;case"bottomLeft":promptTopPosition=promptTopPosition+field.height()+15;break;case"bottomRight":promptleftPosition+=fieldWidth-30;promptTopPosition+=field.height()+5;}
promptleftPosition+=shiftX;promptTopPosition+=shiftY;return{"callerTopPosition":promptTopPosition+"px","callerleftPosition":promptleftPosition+"px","marginTopSize":marginTopSize+"px"};},_saveOptions:function(form,options){if($.validationEngineLanguage)
var allRules=$.validationEngineLanguage.allRules;else
$.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");$.validationEngine.defaults.allrules=allRules;var userOptions=$.extend(true,{},$.validationEngine.defaults,options);form.data('jqv',userOptions);return userOptions;},_getClassName:function(className){if(className){return className.replace(/:/g,"_").replace(/\./g,"_");}}};$.fn.validationEngine=function(method){var form=$(this);if(!form[0])return false;if(typeof(method)=='string'&&method.charAt(0)!='_'&&methods[method]){if(method!="showPrompt"&&method!="hidePrompt"&&method!="hide"&&method!="hideAll")
methods.init.apply(form);return methods[method].apply(form,Array.prototype.slice.call(arguments,1));}else if(typeof method=='object'||!method){methods.init.apply(form,arguments);return methods.attach.apply(form);}else{$.error('Method '+method+' does not exist in jQuery.validationEngine');}};$.validationEngine={defaults:{validationEventTrigger:"blur",scroll:true,focusFirstField:true,promptPosition:"topRight",bindMethod:"bind",inlineAjax:false,ajaxFormValidation:false,ajaxFormValidationURL:false,onAjaxFormComplete:$.noop,onBeforeAjaxFormValidation:$.noop,onValidationComplete:false,isOverflown:false,overflownDIV:"",doNotShowAllErrosOnSubmit:false,binded:false,showArrow:true,isError:false,ajaxValidCache:{},autoPositionUpdate:false,InvalidFields:[],onSuccess:false,onFailure:false}}})(jQuery);(function($){$.fn.validationEngineLanguage=function(){};$.validationEngineLanguage={newLang:function(){$.validationEngineLanguage.allRules={"required":{"regex":"none","alertText":"* Необходимо заполнить","alertTextCheckboxMultiple":"* Вы должны выбрать вариант","alertTextCheckboxe":"* Необходимо отметить"},"minSize":{"regex":"none","alertText":"* Минимум ","alertText2":" символа(ов)"},"maxSize":{"regex":"none","alertText":"* Максимум ","alertText2":" символа(ов)"},"groupRequired":{"regex":"none","alertText":"* You must fill one of the following fields"},"min":{"regex":"none","alertText":"* Минимальное значение "},"max":{"regex":"none","alertText":"* Максимальное значение "},"past":{"regex":"none","alertText":"* Дата до "},"future":{"regex":"none","alertText":"* Дата от "},"maxCheckbox":{"regex":"none","alertText":"* Нельзя выбрать столько вариантов"},"minCheckbox":{"regex":"none","alertText":"* Пожалуйста, выберите ","alertText2":" опцию(ии)"},"equals":{"regex":"none","alertText":"* Поля не совпадают"},"phone":{"regex":/^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"alertText":"* Неправильный формат телефона"},"email":{"regex":/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,"alertText":"* Неверный формат email"},"integer":{"regex":/^[\-\+]?\d+$/,"alertText":"* Не целое число"},"number":{"regex":/^[\-\+]?(([0-9]+)([\.,]([0-9]+))?|([\.,]([0-9]+))?)$/,"alertText":"* Неправильное число с плавающей точкой"},"date":{"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,"alertText":"* Неправильная дата (должно быть в ДД.MM.ГГГГ формате)"},"ipv4":{"regex":/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,"alertText":"* Неправильный IP-адрес"},"url":{"regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,"alertText":"* Неправильный URL"},"onlyNumberSp":{"regex":/^[0-9\ ]+$/,"alertText":"* Только числа"},"onlyLetterSp":{"regex":/^[a-zA-Z\u0400-\u04FF\ \']+$/,"alertText":"* Только буквы"},"onlyLetterNumber":{"regex":/^[0-9a-zA-Z\u0400-\u04FF]+$/,"alertText":"* Запрещены специальные символы"},"ajaxUserCall":{"url":"ajaxValidateFieldUser","extraData":"name=eric","alertText":"* Этот пользователь уже занят","alertTextLoad":"* Проверка, подождите..."},"ajaxNameCall":{"url":"ajaxValidateFieldName","alertText":"* Это имя уже занято","alertTextOk":"* Это имя доступно","alertTextLoad":"* Проверка, подождите..."},"validate2fields":{"alertText":"* Пожалуйста, введите HELLO"}};}};$.validationEngineLanguage.newLang();})(jQuery);(function(h){var f={pint:/[\d]/,"int":/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i};var c={TAB:9,RETURN:13,ESC:27,BACKSPACE:8,DELETE:46};var a={63234:37,63235:39,63232:38,63233:40,63276:33,63277:34,63272:46,63273:36,63275:35};var e=function(j){var i=j.keyCode;i=h.browser.safari?(a[i]||i):i;return(i>=33&&i<=40)||i==c.RETURN||i==c.TAB||i==c.ESC};var d=function(j){var i=j.keyCode;var l=j.charCode;return i==9||i==13||(i==40&&(!h.browser.opera||!j.shiftKey))||i==27||i==16||i==17||(i>=18&&i<=20)||(h.browser.opera&&!j.shiftKey&&(i==8||(i>=33&&i<=35)||(i>=36&&i<=39)||(i>=44&&i<=45)))};var b=function(j){var i=j.keyCode||j.charCode;return h.browser.safari?(a[i]||i):i};var g=function(i){return i.charCode||i.keyCode||i.which};h.fn.keyfilter=function(i){return this.keypress(function(m){if(m.ctrlKey||m.altKey){return}var j=b(m);if(h.browser.mozilla&&(e(m)||j==c.BACKSPACE||(j==c.DELETE&&m.charCode==0))){return}var o=g(m),n=String.fromCharCode(o),l=true;if(!h.browser.mozilla&&(d(m)||!n)){return}if(h.isFunction(i)){l=i.call(this,n)}else{l=i.test(n)}if(!l){m.preventDefault()}})};h.extend(h.fn.keyfilter,{defaults:{masks:f},version:1.7});h(document).ready(function(){var i=h("input[class*=mask],textarea[class*=mask]");for(var j in h.fn.keyfilter.defaults.masks){i.filter(".mask-"+j).keyfilter(h.fn.keyfilter.defaults.masks[j])}})})(jQuery);(function($){var options={url:'/catalog/autocomplete',minLength:2,modal:".search-modal",modal_error_class:'search-modal-error',noimageSrc:'noimage.jpg'};var methods={init:function(data){var el=$(this);el.live('keyup',methods.search);$('.'+options.modal_error_class).live('click',function(e){$(this).removeClass(options.modal_error_class);$(this).hide();el.val('');el.focus();});},search:function(){var val=$(this).val();options.searchPhrase=val;var limit=Math.floor(($(window).height()-160)/60)-1;if(val&&val.length>options.minLength){$.getJSON(options.url,{q:$(this).val(),l:limit},function(data){if(data.length>0){methods.formatResult(data);}
else{methods.noResults();}});}
else{$(options.modal).hide();}},noResults:function(){var modal=$(options.modal);modal.addClass(options.modal_error_class);modal.html('<ul><li>По Вашему запросу ничего не найдено.</li></ul>');},formatResult:function(data){var modal=$(options.modal);if(modal.hasClass(options.modal_error_class)){modal.removeClass(options.modal_error_class);}
modal.html('');var html='<ul>';$(data).each(function(){var i=$(this)[0];if(i.imgid!=null){var imgSrc='catalog/'+i.imgid+'_s.'+i.imgext+'';}
else{var imgSrc=options.noimageSrc;}
html+='<li>\
                <a href="/catalog/item/'+i.id+'"> \
                    <span class="search-modal__img"><img src="/public/images/'+imgSrc+'" alt="" /></span> \
                    <p>'+i.category+' '+i.brand+' '+i.name+'</p> \
                </a></li> \
                ';});html+='<li class="search-modal__link"> \
                    <a href="/catalog/search/'+options.searchPhrase+'">Показать все результаты поиска &rarr;</a> \
                </li>\
                </ul>';modal.append(html)
modal.show();}};$.fn.siteSearch=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Метод с именем '+method+' не существует');}};})(jQuery);function Menu()
{if(window.location.href.match('search.+catid'))
{var catId=parseInt(window.location.href.substr(window.location.href.indexOf('catid')+6,window.location.href.length));$("#menu-"+catId).parent().addClass('active');$("#menu-"+catId).parent().parent().parent().addClass('active');}
if($('#sidebar1 .navigation li.active').size()==0)
{$('#sidebar1 .navigation').children('li').first().addClass('active');}}function refreshBasketStats(){$.getJSON("/basket/getBasketStats",{},function(data){$(".data-basket-amount").html(data.amount);$(".data-basketSumm").html(data.summ);$('.data-tableSumm').html(data.summ);if($(".data-tableSumm").size()>0)
$(".data-tableSumm").html(data.summ+data.delivery);if($(".data-transfer").size()>0){getTransferSumm();}
if($('.data-gift').size()==0){$('.data-giftItem').remove();}
if((data.amount=='0'&&data.creditAmount=='0'))
$(".data-basket").html("Ваша корзина пуста");if((data.amount=='0')){$(".data-order").html("Ваша корзина пуста");$('.modal-footer .btn-warning').hide();$('.shopping-cart a').removeClass('active');}
else{$('.modal-footer .btn-warning').show();}});}
function getTransferSumm()
{if($(".data-transfer").size()>0)
{$.get("/basket/transfersumm",{},function(data)
{if(data.length>0){$(".data-transfer").html(data);}
else{$(".data-transfer").html('');}});}}
function addToCart(itemId,credit,type,url){if(!itemId)
return false;var getvars={itemId:itemId};if(credit)
getvars.credit=1;if(type)
getvars.type=type;var url=$(this).closest('div').find('p.cat-item-name a').attr('href');$.get("/basket/addtocart",getvars,function(data){$('.data-basket').html(data);$(".data-amount").keyfilter(/[\d\-]/);$('.shopping-cart a').addClass('active');if(credit)
initCalc();if(window.location.href.match('order'))
{if(typeof(dojo)!='undefined')
{if($("#basket").html()!="Ваша корзина пуста")
{var newStore=new dojo.data.ItemFileWriteStore({url:"/basket/getItems"});if(newStore)
{grid.setStore(newStore);}}
else
window.location.reload();}
else
window.location.reload();}
else
{refreshBasketStats();}
GIHhtQfW_AtmPixel('http://590.ua/basket/addtocart');setTimeout(function(){GIHhtQfW_AtmPixel(url);},1000);});}
function appendFilter(filter){window.location=filter.options[filter.selectedIndex].value;}
function selectBrand(brand){if(brand.selectedIndex==0){window.location="/catalog/";}else{window.location="/catalog/brand/"
+brand.options[brand.selectedIndex].value;}
return true;}
function filter(id){var arr=window.location.toString().split('/');if(id!='price')
var id=id.substr(7);if(id!='price')
{for(var i in arr){if(arr[i]=='filter'+id+'_from'){arr[parseInt(i)+1]=$('#amount_from_'+id).val()!=''?$('#amount_from_'+id).val():0;var found=true;}
if(arr[i]=='filter'+id+'_to'){arr[parseInt(i)+1]=$('#amount_to_'+id).val()!=''?$('#amount_to_'+id).val():0;var found=true;}}}
else
{for(var i in arr){if(arr[i]=='price_from'){if($('#price_from').val()!='')
arr[parseInt(i)+1]=$('#price_from').val();else
arr.splice(i,2);var found=true;}
if(arr[i]=='price_to'){if($('#price_to').val()!='')
arr[parseInt(i)+1]=$('#price_to').val();else
arr.splice(i,2);var found=true;}}}
if(!found){if(id!='price')
{arr.push('filter'+id+'_from');var val=$('#amount_from_'+id).val()!=''?$('#amount_from_'+id).val():0;arr.push(val);arr.push('filter'+id+'_to');var val=$('#amount_to_'+id).val()!=''?$('#amount_to_'+id).val():0;arr.push(val);}
else
{if($('#price_from').val()!='')
{arr.push('price_from');arr.push($('#price_from').val());}
if($('#price_to').val())
{arr.push('price_to');arr.push($('#price_to').val());}}}
window.location=arr.join('/').replace("#",'');}
function StopDrag(){filter(window.id);}
function showMessage(text,time){if(!time)
var time=5600;if(text)
$("#messageText").html(text);$('#messages').slideDown(function(){setTimeout(function(){jQuery('#messages').slideUp();},time);});}
function FilerOnEnter(id)
{var testTextBox=$(id);var code=null;testTextBox.keypress(function(e)
{code=(e.keyCode?e.keyCode:e.which);if(code==13)
filter('price');});}
function rotateBanner()
{var el=$("#banner");if($(el).size()>0)
{var rawId=$(el).find('a').attr('id');var id=rawId.substring(2,rawId.length);$.getJSON('/banners/getbanner',{id:id},function(data){var aEl=$(el).find('a');$(aEl).attr('title',data.name);$(aEl).attr('href',data.href);$(aEl).attr('id','id'+data.id);$(el).find('img').attr('src','/public/uploads/'+data.filename);});setTimeout('rotateBanner()',4500)}}
function selectRegion(regionId)
{$(".data-region-list a").each(function(){$(this).removeClass('active');});$.cookie('region',regionId,{expires:7,path:"/",domain:document.location.hostname,secure:false});var el=$("#region_"+regionId);$(".data-phones").html($(el).data('phone'));$(".data-current-city").html($(el).html());$("#region_"+regionId).addClass('active');$('.region-choose > .dropdown').removeClass('open');if($('.data-current-city').text()==='Киев'){$('header .work-time p').first().show();$('header .work-time p').last().hide();}
else{$('header .work-time p').first().hide();$('header .work-time p').last().show();}
refreshBasketStats();}
function getCompareItems()
{$.get("/catalog/getcompareitem",{},function(data){if(data.length>1)
{$(".data-navbar").show();$(".data-compareItems").html(data);}
else{$('.data-CompareLnk').removeClass('open')}});}
function askedItem(id)
{jQuery.get("/catalog/asked",{id:id},function(data){$('#asked_'+id).addClass('active');$('#asked_'+id).html('Добавлено')});}
function callBack(id_item)
{window.id_item=id_item;}
function sendCallback()
{name=$("#asked-name").val();phone=$("#asked-phone").val();jQuery.get("/catalog/callback",{name:name,phone:phone,id_item:window.id_item},function(){$('#asked').modal('hide')});}
$(document).ready(function(){$('.data-getActInfo').live('click',function(e){var id=$(this).attr('id').substr(2);var el=$(this);$.get('/catalog/actioninfo',{id:id},function(data){if(data.length>10)
{$('#gift-modal-'+id).find('.modal-body').html(data);$('#gift-modal-'+id).find('#dataActionLnk').attr('href',$('#gift-modal-'+id).find('.dataActionLnk').attr('href'));}});});$('#brands').select2();$('#brands').on('change',function(){if($(this).val()){window.location=$(this).val();}});$('.tozoom').fancybox();getCompareItems();FilerOnEnter("#price_from");FilerOnEnter("#price_to");$('*[rel="tooltip"]').tooltip();$('*[rel="popover"]').popover();$('.data-openBasket').on('click',function(e){e.preventDefault();$.get('/basket/basket-data',{},function(data){$('.data-basket').html(data);$(".data-amount").keyfilter(/[\d\-]/);$('#data-basket').modal('show')
refreshBasketStats();});});var filterDiv=$('.filter');if(filterDiv.hasClass('get-ajax')){var l=window.location.toString();var h=l.indexOf('#');if(h>-1){l=l.substr(0,h);}
$.get(l+'/only-filters/true',{},function(data){$('.filter').html(data);});}
$("#login-form, #callback-form, .form-search").validationEngine();if($.browser.msie)
$("#phone").mask("+99(999) 999-99-99");else
$("#phone").mask("+38(999) 999-99-99");$('#data-sendCallback').live('click',function(e){$('#callback-form').trigger('submit');});$('#data-sendError').live('click',function(){var text=$('#data-errorText').html();var url=$('#data-errorUrl').val();var comments=$('#data-errorComments').val();$.getJSON("/texterror",{text:text,url:url,comments:comments},function(data){$('#error-modal #data-errorText').html('Спасибо за обнаруженную ошибку');$('#data-sendError, #data-errorComments').remove();});});$(document).keypress(function(e){if(e.ctrlKey&&((e.keyCode==0xA)||(e.keyCode==0xD))){var text=getSelText().toString();var url=window.location.toString();$('#error-modal').modal('show');$('#error-modal .modal-header h3').html('Вы обнаружили ошибку в тексте:');$('#error-modal .modal-body cite').html(text);$('#data-errorUrl').val(url);}});if($("#stext").size()>0){var arr=$("#stext").html().split('.');var pf='<div id="fst">'+arr[0]+'.</div>';arr.splice(0,1);var pe='<div id="etxt">'+arr.join('.')+'</div>';$("#stext").html(pf+pe);$('#etxt').toggle();$('#data-toggle-text').live('click',function(){$('#etxt').toggle();if($("#etxt").css('display')=='none')
text='Читать дальше'
else
text='Скрыть текст'
$(this).html(text);});}
$('#callback-form').live('submit',function(e){e.preventDefault();var request=new Object();request['name']=$(this).find('#name').val();request['phone']=$(this).find('#phone').val();request['region_id']=$(this).find('#region_id').val();request['theme']=$(this).find('#theme').val();request['message']=$(this).find('#message').val();$.post('/callback',request,function(data){$('#callback .modal-body').html('Спасибо, с Вами свяжется менеджер интернет-магазина в течение рабочего дня. Мы перезваниваем 6 дней в неделю, кроме воскресенья: понедельник - пятница: 10.00 - 18.00; суббота: 11.00 - 17.00.');$('#data-sendCallback').remove();});});$('.btn-back').on('click',function(e){e.preventDefault();window.history.back()})
$(".data-remove").live("click",function(){var idArr=$(this).attr('id').split('_');var id=idArr[1];var type=idArr[0];var getvars={id:id,type:type};$.get("/basket/delitem",getvars,function(data){refreshBasketStats();});$(this).closest('tr').remove();$('.data-itemId-'+id).removeClass('btn-warning').addClass('btn-info');$('.data-itemId-'+id+' span').html('В корзину');});$('.data-AddToCart').on('click',function(){var el=$(this);el.removeClass('btn-info').addClass('btn-warning');el.find('span').html('Уже в корзине');})
$(".data-amount").live("keyup",function(event){if($(this).val()!=''){var id=$(this).attr('id').substr(6);var newval=$(this).val();var price=parseInt($(this).parent().find('input[name="price"]').val());var el=$(this);var tr=$(this).closest('tr');var bonusSumEl=$(tr).find('.data-bonusSum');if($(bonusSumEl).size()>0){var bonusAmount=parseInt($(tr).find('.data-bonus').val())*parseInt(newval);$(tr).find('.data-bonusSum').html(bonusAmount);}
var getvars={id:id,newvalue:newval};if(newval==0){$.get("/basket/delitem",getvars,function(data){refreshBasketStats();$('.data-itemId-'+id).removeClass('btn-warning').addClass('btn-info');});return;}
if($(this).parent().find('input[name="type"]').val())
getvars.type='set';$.get("/basket/change",getvars,function(data){el.closest('tr').find('.data-itemPrice').html(price*newval);refreshBasketStats();});}});$('.data-toggleCompare').live('click',function(e){var itemId=$(this).data('id');var catId=$(this).data('category');var el=$(this);if($(this).hasClass('checked')){$.get("/catalog/delcompareitem",{id:itemId,cat:catId},function(data){getCompareItems();$(el).removeClass('checked');});}
else{$('.data-CompareLnk').addClass('open');$.get("/catalog/addcompareitem",{id:itemId},function(data){getCompareItems();$(el).addClass('checked');});}});$('.data-toggleCompare').on('click',function(){var $this=$(this);if($this.hasClass('checked')||$('.data-cloneImg').is(':animated'))return;$img=$('<img>',{'class':'data-cloneImg','src':$this.data('url'),'css':{'position':'absolute','left':$this.offset().left,'top':$this.offset().top}})
$('body').append($img);$('.data-cloneImg').animate({'top':$('.data-CompareLnk').offset().top,'left':$('.data-CompareLnk').offset().left,'opacity':0},2000,function(){$('.data-cloneImg').remove();})})
$('#searchtext').siteSearch();$(document).click(function(){$('.search-modal').hide();});$('.search-modal').click(function(e){e.stopPropagation()});$('#addComment').on('submit',function(e){e.preventDefault();var post=new Object();$(this).find('input').each(function(){post[$(this).attr('name')]=$(this).val();});post.text=$(this).find('textarea').first().val();$.post($(this).attr('action'),post,function(data){if(data.result){$('#comments-modal .modal-body').html('Спасибо за Ваш отзыв. Он появится на сайте после проверки администратором.');$('#comments-modal .data-login').remove();}});});if($('.data-current-city').text()==='Киев'){$('header .work-time p').first().show();$('header .work-time p').last().hide();}
else{$('header .work-time p').first().hide();$('header .work-time p').last().show();}
$('.product_box').each(function(){var container='.'+$(this).find('.products_container_wrapper').children().first().attr('class');var childrens=$(container).children().length;var width=$(container).children().first().outerWidth(true);var container_width=width*childrens;$(container).css('width',container_width+'px');})
window.anim_status=false;});function next_product(that,count)
{if(!window.anim_status)
{window.anim_status=true;var count=count+1;var container=$(that).parents('.product_box').find('.products_container_wrapper').children().first();var first_block=$(container).children().first();var first_block_class='.'+$(container).children().first().attr('class');var width=$(first_block).outerWidth(true);var last_element=$(container).find(first_block_class+':nth-child('+count+')');$(last_element).css('opacity','0');$(container).animate({right:width},'fast',function(){$(last_element).animate({opacity:'1'},'fast');$(this).css('right','auto');$(container).append(first_block);window.anim_status=false;})}}
function prev_product(that,count)
{if(!window.anim_status)
{window.anim_status=true;var count=count+1;var container=$(that).parents('.product_box').find('.products_container_wrapper').children().first();var last_block=$(container).children().last();var width=$(last_block).width();$(last_block).hide()
$(container).prepend(last_block);$(container).animate({'left':width},'fast',function(){$(container).css('left','auto');$(last_block).fadeIn('fast');window.anim_status=false;})}}
﻿
(function($){var pasteEventName=($.browser.msie?'paste':'input')+".mask";var iPhone=(window.orientation!=undefined);$.mask={definitions:{'9':"[0-9]",'a':"[A-Za-z]",'*':"[A-Za-z0-9]"}};$.fn.extend({caret:function(begin,end){if(this.length==0)return;if(typeof begin=='number'){end=(typeof end=='number')?end:begin;return this.each(function(){if(this.setSelectionRange){this.focus();this.setSelectionRange(begin,end);}else if(this.createTextRange){var range=this.createTextRange();range.collapse(true);range.moveEnd('character',end);range.moveStart('character',begin);range.select();}});}else{if(this[0].setSelectionRange){begin=this[0].selectionStart;end=this[0].selectionEnd;}else if(document.selection&&document.selection.createRange){var range=document.selection.createRange();begin=0-range.duplicate().moveStart('character',-100000);end=begin+range.text.length;}
return{begin:begin,end:end};}},unmask:function(){return this.trigger("unmask");},mask:function(mask,settings){if(!mask&&this.length>0){var input=$(this[0]);var tests=input.data("tests");return $.map(input.data("buffer"),function(c,i){return tests[i]?c:null;}).join('');}
settings=$.extend({placeholder:"_",completed:null},settings);var defs=$.mask.definitions;var tests=[];var partialPosition=mask.length;var firstNonMaskPos=null;var len=mask.length;$.each(mask.split(""),function(i,c){if(c=='?'){len--;partialPosition=i;}else if(defs[c]){tests.push(new RegExp(defs[c]));if(firstNonMaskPos==null)
firstNonMaskPos=tests.length-1;}else{tests.push(null);}});return this.each(function(){var input=$(this);var buffer=$.map(mask.split(""),function(c,i){if(c!='?')return defs[c]?settings.placeholder:c});var ignore=false;var focusText=input.val();input.data("buffer",buffer).data("tests",tests);function seekNext(pos){while(++pos<=len&&!tests[pos]);return pos;};function shiftL(pos){while(!tests[pos]&&--pos>=0);for(var i=pos;i<len;i++){if(tests[i]){buffer[i]=settings.placeholder;var j=seekNext(i);if(j<len&&tests[i].test(buffer[j])){buffer[i]=buffer[j];}else
break;}}
writeBuffer();input.caret(Math.max(firstNonMaskPos,pos));};function shiftR(pos){for(var i=pos,c=settings.placeholder;i<len;i++){if(tests[i]){var j=seekNext(i);var t=buffer[i];buffer[i]=c;if(j<len&&tests[j].test(t))
c=t;else
break;}}};function keydownEvent(e){var pos=$(this).caret();var k=e.keyCode;ignore=(k<16||(k>16&&k<32)||(k>32&&k<41));if((pos.begin-pos.end)!=0&&(!ignore||k==8||k==46))
clearBuffer(pos.begin,pos.end);if(k==8||k==46||(iPhone&&k==127)){shiftL(pos.begin+(k==46?0:-1));return false;}else if(k==27){input.val(focusText);input.caret(0,checkVal());return false;}};function keypressEvent(e){if(ignore){ignore=false;return(e.keyCode==8)?false:null;}
e=e||window.event;var k=e.charCode||e.keyCode||e.which;var pos=$(this).caret();if(e.ctrlKey||e.altKey||e.metaKey){return true;}else if((k>=32&&k<=125)||k>186){var p=seekNext(pos.begin-1);if(p<len){var c=String.fromCharCode(k);if(tests[p].test(c)){shiftR(p);buffer[p]=c;writeBuffer();var next=seekNext(p);$(this).caret(next);if(settings.completed&&next==len)
settings.completed.call(input);}}}
return false;};function clearBuffer(start,end){for(var i=start;i<end&&i<len;i++){if(tests[i])
buffer[i]=settings.placeholder;}};function writeBuffer(){return input.val(buffer.join('')).val();};function checkVal(allow){var test=input.val();var lastMatch=-1;for(var i=0,pos=0;i<len;i++){if(tests[i]){buffer[i]=settings.placeholder;while(pos++<test.length){var c=test.charAt(pos-1);if(tests[i].test(c)){buffer[i]=c;lastMatch=i;break;}}
if(pos>test.length)
break;}else if(buffer[i]==test[pos]&&i!=partialPosition){pos++;lastMatch=i;}}
if(!allow&&lastMatch+1<partialPosition){input.val("");clearBuffer(0,len);}else if(allow||lastMatch+1>=partialPosition){writeBuffer();if(!allow)input.val(input.val().substring(0,lastMatch+1));}
return(partialPosition?i:firstNonMaskPos);};if(!input.attr("readonly"))
input.one("unmask",function(){input.unbind(".mask").removeData("buffer").removeData("tests");}).bind("focus.mask",function(){focusText=input.val();var pos=checkVal();writeBuffer();setTimeout(function(){if(pos==mask.length)
input.caret(0,pos);else
input.caret(pos);},0);}).bind("blur.mask",function(){checkVal();if(input.val()!=focusText)
input.change();}).bind("keydown.mask",keydownEvent).bind("keypress.mask",keypressEvent).bind(pasteEventName,function(){setTimeout(function(){input.caret(checkVal(true));},0);});checkVal();});}});})(jQuery);$(document).ready(function(){$('.data-zoom').live('click',function(){var imgUrl=$(this).data('url');var w=$(window).width();var h=$(window).height();var img=$(this);var imgTitle=$(this).data('alt');var opacity=$("<div>",{'class':'opacity','css':{'width':w,'height':h}});var zoom=$("<div>",{'class':"zoom",'html':"<img src = "+imgUrl+" /><span><i>"+imgTitle+"</i></span>",'css':{'width':w,'height':h,'line-height':h+'px'}});$('body').append(opacity,zoom);$('.zoom img').css({'height':h*0.8-40});$('.zoom span').css({'bottom':h*0.05});var closeZoom=$("<strong>",{'class':'closeZoom','html':'<i class="icon-remove icon-white"></i>','css':{'top':h*0.2/2,'cursor':'pointer'}});$('.zoom').append(closeZoom);});$('.zoom, .closeZoom').live('click',function(){$('.zoom, .opacity, .closeZoom').remove();});$(document).keyup(function(e){if(e.keyCode==27){$('.zoom, .opacity, .closeZoom').remove();}});})