let defaultOpt = {
  index:1, //当前激活图片下标
  loop:true,  //是否开启无缝滚动
  threshold:0.2 , //滑动超过0.2比例即可翻页
  autoplay:{
    delay: 2000 , //4秒切换一次
  },
  pagination: {
    el: '.swiper-pagination',
  }
}



 class MoveHandle {
    constructor(opt){
      if(!opt.el){
        return
      }
      this.initParameter(defaultOpt,opt)
      this.initEvent()
      this.initAotuplay()
      this.renderdot()
      this.setIndex(this.index,false)
    }

    initParameter(defaultOpt,opt){
      Object.assign(defaultOpt,opt)
      this.opt = defaultOpt
      this.el = opt.el
      this.index = defaultOpt.index
      if(this.el.firstElementChild){
        this.EleHandle = new EleHandle({
          el:this.el.firstElementChild,
          opt:this.opt
        })
        this.maxIndex  =  this.el.firstElementChild.children.length
        this.elwidth = this.el.offsetWidth
      }
    }

    initEvent(){
      let el = this.el
      this.handleEvent = this.handleEvent.bind(this)
      addEvent(el,'touchstart',this.handleEvent)
      addEvent(el,'mousedown',this.handleEvent)
      addEvent(el,'touchmove',this.handleEvent)
      addEvent(el,'mousemove',this.handleEvent)
      addEvent(el,'touchend',this.handleEvent)
      addEvent(el,'mouseup',this.handleEvent)
      addEvent(el.firstElementChild,'transitionend',this.handleEvent)
    }

   renderdot(){
    let { pagination , loop } = this.opt
    let el = pagination.el
    let parentNode = this.el.querySelector(el)


    let length =  this.el.firstElementChild.children.length
    let idx = 0
    let fragment = document.createDocumentFragment();
    if(parentNode){
      if(loop){
        length = length -2
      }
      while(idx <length ){
        idx ++
        let node = document.createElement('span')
        node.setAttribute('index',idx)
        if(idx === this.index){
          node.setAttribute('class','dot active-dot')
        }else{
          node.setAttribute('class','dot')
        }
        fragment.appendChild(node)
      }
      parentNode.innerHTML = ''
      parentNode.appendChild(fragment)
    }
   }
   initAotuplay(){
      let { autoplay = false ,loop  } = this.opt
      if(autoplay){
        let delay =  autoplay.delay
        this.AotuplayInterval =  setInterval(()=>{
          if(this.index >= this.maxIndex){
              this.index = 1
          }else{
            this.index++
          }
          this.setIndex(this.index)
        },delay)
      }
    }
    resetInterVal(run){
      clearInterval(this.AotuplayInterval)
      run && this.initAotuplay()
    }
    destroy(){
      let arr = ['touchstart','mousedown','touchmove','mousemove','touchend','mouseup','']
      arr.forEach(eventname=>{
          removeEvent(this.el,eventname,this.handleEvent)
      })
      removeEvent(this.el.firstElementChild,'transitionend',this.handleEvent)
    }

    _start(e){
      this.state = true
      let point = e.touches ? e.touches[0] : e
      this.startX = point.pageX
      this.startY = point.pageY
      this.resetInterVal()

    }
    _move(e){
      if(!this.state){
        return
      }
      let point = e.touches ? e.touches[0] : e
      this.deltaX = point.pageX - this.startX
      this.deltaY = point.pageY - this.startY
      this.direction = point.pageX > this.startX ? 'left' :'right'
      let offsetX = 0
      offsetX = -(this.index * this.elwidth) +this.deltaX
      this.EleHandle.moveEle(offsetX)

    }


    _end(e){
      this.state = false
      let deltax = Math.abs(this.deltaX)
      if(deltax/this.elwidth >=this.opt.threshold){
        if(this.direction ==='left'){
          this.index =  this.index <=0 ? 0 :--this.index
        }else if(this.direction ==='right'){
          this.index = this.index >= this.maxIndex-1 ? this.maxIndex -1:this.index+1
        }
        this.setIndex(this.index)
      }else{
         this.setIndex(this.index)

      }
    }
    setDotIndex(index){
      if(index<=1){
        index = 0
      }else{
        index --
      }
      let { pagination } = this.opt
      let el = pagination.el
      let children = this.el.querySelector(el).children
      if(children){
        children.forEach(e=>{
          e.classList.remove('active-dot')
        })
        children[index] && children[index].classList.add('active-dot')
      }
    }

    setIndex(index,useTranstion=true){
      if(index<=1){
        index= 1
      }
      if(!this.opt.loop){
        index --
      }else{
         if(index >= this.maxIndex){
           index = this.maxIndex - 2
         }else{
         }
      }
      this.index = index
      this.setDotIndex(this.index)
      this.resetInterVal(true)
      this.EleHandle.calculateOffsetX(index,useTranstion)
    }

    // 修正无缝滚动偏移量
    correctionLoopOffsetX(){
      //边界条件只有到最后一位和第一位才会修复偏移量
      if( this.index === 0 ){
         this.index = this.maxIndex - 2
         this.setIndex(this.index,false)
      }
      if(this.index === this.maxIndex-1){
        this.index = 1
        this.setIndex(this.index,false)
      }
    }


    handleEvent (e) {
    switch (e.type) {
      case 'touchstart':
      case 'mousedown':
        this._start(e)
        break
      case 'touchmove':
      case 'mousemove':
        this._move(e)
        break
      case 'touchend':
      case 'mouseup':
      case 'touchcancel':
      case 'mousecancel':
        this._end(e)
        break
      case 'orientationchange':
      case 'resize':
        break
      case 'transitionend':
      case 'webkitTransitionEnd':
      case 'oTransitionEnd':
      case 'MSTransitionEnd':
        this.EleHandle.removeTranstion()
        if(this.opt.loop){
          this.correctionLoopOffsetX()
        }
        break
      case 'click':
            // e.preventDefault()
            // e.stopPropagation()
        break
    }
  }

 }


function addEvent(el, type, fn, capture = false ) {
  el.addEventListener(type, fn, {passive: false, capture: !!capture})
}
function removeEvent(el, type, fn, capture = false) {
  el.removeEventListener(type, fn, {passive: false, capture: !!capture})
}

class EleHandle {
  constructor({opt,el}){
    this.el  = el
    this.transtionName  ='transtion-move'
    if(opt.loop){
      this.cloneFirstAndLastNode()
    }
  }
  cloneFirstAndLastNode(){
    let child =  this.el.children
    let firstNode =  child[0].cloneNode(true)
    let lastNode =  child[child.length-1].cloneNode(true)
    let arr = [lastNode , ...child , firstNode]
     arr.forEach((e,i)=>{
       e.setAttribute('index',i)
     })
    this.el.insertBefore(lastNode,child[0])
    this.el.appendChild(firstNode)
  }
  setTranstion(duration=0.4){
    this.loadCssCode(`.${this.transtionName}{
      transition:all ${duration}s ease
    }`);

    this.el.classList.add(this.transtionName)
  }

  moveEle(pointX){
    this.el.style.cssText = `transform:translateX(${pointX}px);`
  }

  removeTranstion(){
    this.el.classList.remove(this.transtionName)
  }

  loadCssCode(code){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.appendChild(document.createTextNode(code));
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
  }
  calculateOffsetX(index,useTransion = true){
    const len =  this.el.children.length
    const parentWidth = this.el.parentNode.offsetWidth
    let offsetX  = index *parentWidth
    useTransion && this.setTranstion()
    this.moveEle(-offsetX)
  }
}

export default MoveHandle
